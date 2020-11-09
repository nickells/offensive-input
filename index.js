const nameInput = document.getElementById('name')

const desiredString = "Stupid Idiot"

nameInput.addEventListener('input', e => {
  const nextLength = e.target.value.length
  nameInput.value = desiredString.substring(0, nextLength)
})