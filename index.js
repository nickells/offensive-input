const nameInput = document.getElementById('name')

const desiredString = "Stupid Idiot"

const normalizeInput = (text) => {

}

nameInput.addEventListener('input', e => {
  const nextInput = e.target.value
  const nextLength = nextInput.length
  nameInput.value = desiredString.substring(0, nextLength)
})