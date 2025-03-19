import dayjs from "dayjs";
import { verifyData } from "./verify-data";
import { newSchedule } from "../../services/new-schedule";

const form = document.querySelector("#form");
const date = document.querySelector("#date");

const tutorName = document.querySelector("#tutor-name");
const petName = document.querySelector("#pet-name");
const serviceDescription = document.querySelector("#description");
const dateModal = document.querySelector("#date-modal");
const hours = document.querySelector("#hours");

const today = dayjs(new Date()).format("YYYY-MM-DD");

date.value = today;
date.min = today;
dateModal.value = today;
dateModal.min = today;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const tutor = tutorName.value.trim();
    const pet = petName.value.trim();
    const desc = serviceDescription.value.trim();

    if(tutor === "" || pet === "" || desc === "") return alert("Preencha todos os campos!");

    const hourSelected = hours.value;
    const [hour] = hourSelected.split(":");
    const when = dayjs(dateModal.value).add(hour, "hour");

    const id = new Date().getTime().toString();
    
    const {isHourPast, unavailableHour} = verifyData(when);
    if(isHourPast){
      alert(`O horário das ${unavailableHour} está indisponível! Por favor, selecione outro horário!`);
      return;
    }

    await newSchedule({
      id,
      tutor,
      pet,
      desc,
      when: dayjs(when).format("HH:mm"),
    });

  } catch (error) {
    alert("Não foi possível realizar o agendamento!");
    console.log(error);
  }
}