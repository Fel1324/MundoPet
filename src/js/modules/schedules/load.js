import { hoursLoad } from "../modal/hours-load.js";

const dateModal = document.querySelector("#date-modal");

export function loadSchedulesDay(){
  const date = dateModal.value;

  hoursLoad(date);
}
