
const tipText = document.querySelector('.result .tip-amount')
const totalText = document.querySelector('.result .total-amount') 

const form = document.querySelector('.calculator form')

function calculateTip(form, tipText, totalText) {
  const amount = parseFloat(form.elements['bill-field'].value) || 0
  const people = parseInt(form.elements['number-people'].value) || 1

  const tip = parseFloat(
    form.elements['custom-tip-value'].value || form.elements['tip'].value
  ) || 0

  const tipPerson = amount * (tip / 100) / people
  const totalPerson = amount / people + tipPerson 


  tipText.textContent = tipPerson.toFixed(2) || 0
  totalText.textContent = totalPerson.toFixed(2) || 0
}

form.addEventListener('input', (e) => {
  calculateTip(form, tipText, totalText)
})

document.querySelector('#reset').addEventListener('click', (e) => {
  form.reset()
  calculateTip(form, tipText, totalText)
})