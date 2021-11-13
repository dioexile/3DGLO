const sendForm = (formId) => {
  const form = document.getElementById(formId)
  const firstFormInputs = form.querySelectorAll('input')
  console.log(firstFormInputs)
  form.addEventListener('submit', (e) => {
    e.preventDefault()




    firstFormInputs.forEach(e => {
      e.value = ''
    });
  })
}

export default sendForm