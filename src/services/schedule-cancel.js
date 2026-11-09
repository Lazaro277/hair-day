import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error(`Erro ao cancelar agendamento: ${response.status}`)
  }

  alert('Agendamento cancelado com sucesso!')
}