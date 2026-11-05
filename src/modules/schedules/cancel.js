import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"
const periods = document.querySelectorAll('.period')

// Gera evento de click para cada lista
periods.forEach((period) => {
  // Captura o evento de click na lista
  period.addEventListener('click', async (event) => {
    if (event.target.classList.contains('cancel-icon')) {
      // Obter a li pai do elemento clicado
      const item = event.target.closest('li')

      // Pega o id do agendamento para remover
      const { id } = item.dataset

      // Confirma que o id existe
      if (id) {
        // Pede confirmação do usuário
        const isConfirm = confirm('Tem certeza que deseja cancelar o agendamento?')

        if (isConfirm) {
          // Se confirmado, faz a requisição na API para cancelar e recarrega os agendamentos
          await scheduleCancel({ id })
          schedulesDay()
        }
      }
    }
  })
})