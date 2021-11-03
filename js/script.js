let billInput = document.getElementById('bill')
let peopleInput = document.getElementById('number_people')
let warning = document.getElementById('warning')

bill.addEventListener('input', formIsValid)
number_people.addEventListener('input', formIsValid)

function validateBill() {
  let billValue = bill.value.replace(',', '.')

  if (!isNaN(billValue) == false || billValue <= 0) {
    billInput.style.border = '2px solid #DC8282'
    return false
  } else {
    billValue = parseFloat(billValue)
    billInput.style.border = '2px solid #87DC82'
    return true
  }
}

function validatePeople() {
  let peopleValue = number_people.value

  if (!isNaN(peopleValue) == false) {
    peopleInput.style.border = '2px solid #DC8282'
    warning.style.display = 'inline'
    warning.textContent = 'Enter a valid number'
    return false
  } else if (peopleValue == 0) {
    peopleInput.style.border = '2px solid #DC8282'
    warning.style.display = 'inline'
    warning.textContent = "Can't be zero."
    return false
  } else {
    peopleInput.style.border = '2px solid #87DC82'
    warning.style.display = 'none'
    return true
  }
}

function takePercentage(percentage) {
  let somethingHere = percentage

  return somethingHere.replace('%', '')
}

function formIsValid() {
  let [billIsValid, peopleIsValid, percentageIsValid] = [
    validateBill(),
    validatePeople()
  ]

  console.log(
    `Bill: ${billIsValid}.\nPeople: ${peopleIsValid}.\nPercentage: ${percentageIsValid}.`
  )
}

function calculateBill() {
  let price = bill.value

  let people = number_people.value

  let totalBill = price / people

  price_person_total.innerHTML = `$${totalBill.toFixed(2)}`
}
