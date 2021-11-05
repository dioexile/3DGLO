const modal = () => {
  const btns = document.querySelectorAll('.popup-btn')
  const modal = document.querySelector('.popup')
  const closeBtn = document.querySelector('.popup-close')

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block'
    })
  })
  closeBtn.addEventListener('click', () => {modal.style.display = 'none'})

  modal.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-content')){
      modal.style.display = 'none'
    }
  })

}

export default modal