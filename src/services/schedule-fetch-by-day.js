import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
  const response = await fetch(`${apiConfig.baseURL}/schedules`)

  if (!response.ok) {
    throw new Error(`Erro ao buscar agendamentos: ${response.status}`)
  }

  const data = await response.json()

  if (!Array.isArray(data)) {
    throw new Error("A resposta da API não contém uma lista válida de agendamentos")
  }

  const dailySchedules = data.filter((schedule) =>
    dayjs(date).isSame(schedule.when, "day")
  )

  return dailySchedules
}