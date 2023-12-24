const input     = document.getElementById('input')
const yourMoney = document.getElementById('result1')
const theirMoney = document.getElementById('result2')
const computeButton = document.getElementById('compute-btn')

computeButton.onclick = function () {
  yourMoney.textContent = input.value * 0.6 + ' грн'
  theirMoney.textContent = input.value * 0.4 + ' грн'
}