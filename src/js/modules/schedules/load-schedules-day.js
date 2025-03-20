import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../modal/hours-load.js";
import { showSchedules } from "./show-schedules.js";

const dateModal = document.querySelector("#date-modal");
const dateFilter = document.querySelector("#date");

export async function loadSchedulesDay(){
  const dateMod = dateModal.value;
  const dateFil = dateFilter.value;

  const dailySchedules = await scheduleFetchByDay(dateFil);
  showSchedules(dailySchedules);

  hoursLoad(dateMod, dailySchedules);
}
