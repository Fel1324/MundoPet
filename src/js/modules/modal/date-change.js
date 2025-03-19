import { loadSchedulesDay } from "../schedules/load";

const dateModal = document.querySelector("#date-modal");

dateModal.onchange = () => loadSchedulesDay();
