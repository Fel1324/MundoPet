import { loadSchedulesDay } from "./load-schedules-day.js";
import { deleteSchedules } from "../../services/delete-schedules.js";

const periods = document.querySelectorAll(".period");

periods.forEach(period => {
  period.onclick = async (event) => {
    if(event.target.classList.contains("remove")){
      const item = event.target.closest("li");
      const id = item.id;

      if(id){
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento? ⚠️");

        if(isConfirm){
          await deleteSchedules(id);
          loadSchedulesDay();
        }
      }
    }
  }
});
