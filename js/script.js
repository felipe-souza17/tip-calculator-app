let billInput = document.getElementById('bill')
let peopleInput = document.getElementById('number_people')
let customInput = document.getElementById('custom_tip')
let warning = document.getElementById('warning')

bill.addEventListener('input', formIsValid)
number_people.addEventListener('input', formIsValid)

/* Validates the invoice field, substituting a comma for a period and verifying that it is a valid numbe */
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

/* Validates the number of people, observing if they are a valid number and if they are zero. */

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

/* Check if the form all fields is valid */
function formIsValid() {
  let [billIsValid, peopleIsValid] = [validateBill(), validatePeople()]

  if (billIsValid && peopleIsValid) {
    takePercentage()
    return true
  }
}

/* Takes the tip percentage on the inputs and calls the function to calculate the bill */
function takePercentage(percentage = '0') {
  let tip = percentage.replace('%', '').replace(',', '.')

  if (!isNaN(tip) == false) tip = 0
  calculateBill(tip)
}

/* Check if the form is valid and calculate the bill */
function calculateBill(percentage) {
  if (formIsValid) {
    let price = parseFloat(bill.value)

    let tip_percentage = parseFloat(percentage)

    let people = parseInt(number_people.value)

    let totalBill = ((tip_percentage / 100) * price + price) / people
    let totalTipAmount = ((tip_percentage / 100) * price) / people

    price_person_total.innerHTML = `$${totalBill.toFixed(2)}`
    tip_price_total.innerHTML = `$${totalTipAmount.toFixed(2)}`
  }
}
