import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("date")
export async function schedulesDay() {
  try {
    const date = selectedDate.value

    const dailySchedules = await scheduleFetchByDay({ date })

    schedulesShow({ dailySchedules })

    hoursLoad({ date, dailySchedules })
  } catch (error) {
    console.error("Erro ao carregar agendamentos:", error)
    alert("Não foi possível carregar os agendamentos. Tente novamente.")
  }
}