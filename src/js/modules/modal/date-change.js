import { loadSchedulesDay } from "../schedules/load-schedules-day";

const dateModal = document.querySelector("#date-modal");
const dateFilter = document.querySelector("#date");

dateFilter.onchange = (event) => {
  dateModal.value = event.target.value;
  loadSchedulesDay();
}

dateModal.onchange = (event) => {
  dateFilter.value = event.target.value;
  loadSchedulesDay();
}
