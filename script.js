const modalOverlay = document.querySelector('.modal-overlay')

const Modal = {
  open () {
    // Abrir modal
    // Adicionar a class active ao modal
    modalOverlay.classList.add('active')
  },
  close(){
    //fechar o modal
    modalOverlay.classList.remove('active')
    //remover a class active do modal
  }
}