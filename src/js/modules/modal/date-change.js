import { loadSchedulesDay } from "../schedules/load-schedules-day";

const dateModal = document.querySelector("#date-modal");
const date = document.querySelector("#date");

dateModal.onchange = () => loadSchedulesDay();
date.onchange = () => loadSchedulesDay();
