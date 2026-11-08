
const tipText = document.querySelector('.result .tip-amount')
const totalText = document.querySelector('.result .total-amount') 

const form = document.querySelector('.calculator form')

function calculateTip(form, tipText, totalText) {
  const amount = parseFloat(form.elements['bill-field'].value) || 0
  const people = parseInt(form.elements['number-people'].value) || 1

  const tip = parseFloat(
    form.elements['custom-tip-value'].value || form.elements['tip'].value
  ) || 0

  const totalTip = amount * (tip / 100) / people
  const totalAmount = amount + totalTip


  tipText.textContent = totalTip.toFixed(2) || 0
  totalText.textContent = totalAmount.toFixed(2) || 0
}

form.addEventListener('input', (e) => {
  calculateTip(form, tipText, totalText)
})

document.querySelector('#reset').addEventListener('click', (e) => {
  form.reset()
  calculateTip(form, tipText, totalText)
})