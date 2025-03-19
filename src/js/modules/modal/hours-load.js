import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.querySelector("#hours");

export function hoursLoad(date){
  hours.innerHTML = "<option hidden>Selecione a hora</option>";

  const opening = openingHours.map(hour => {
    const [scheduleHour] = hour.split(":");
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    return{
      hour,
      available: isHourPast,
    }
  });

  opening.forEach(({ hour, available }) => {{
    const option = document.createElement("option");
    option.disabled = available;
    option.value = hour;
    option.textContent = hour;

    if(hour === "08:00"){
      hourTitle("Manhã");
    } else if(hour === "13:00"){
      hourTitle("Tarde");
    } else if(hour === "18:00"){
      hourTitle("Noite");
    }

    hours.append(option);
  }});
}

function hourTitle(content){
  const title = document.createElement("option");
  title.textContent = content;
  title.disabled = true;

  hours.append(title);
}
