const dataOfCharts = {
  mon: 100,
  tue: 240,
  wed: 510,
  thu: 200,
  fri: 170,
  sat: 460,
  sun: 310,
}

function setBalance() {
  const balance = document.querySelector("#balance")
  let balanceValue = 0

  for (let counter in dataOfCharts) {
    // for in = para cada elemento em dataOfCharts
    balanceValue += dataOfCharts[counter]
  }

  balance.textContent = `$${balanceValue}`
}

function setBar(weekday, value) {
  const cell = document.querySelector(`.${weekday} .cell`)
  const popUpText = document.querySelector(`.${weekday} .pop-up p`)
  let cellHeight = value <= 500 ? value / 40 : 12.5
  cell.style.height = `${cellHeight}rem`

  if (cellHeight <= 0) {
    cellHeight = Math.abs(value) / 40
    cell.style.height = `${cellHeight}rem`
  }

  popUpText.textContent = `$${value}`
}

function setColorToTodayCell() {
  const actualDay = new Date().getDay()
  const cell = document.querySelector(`.chart:nth-child(${actualDay}) .cell`)

  cell.style.backgroundColor = "var(--cyan)"
}

function setBestAndWorstDay() {
  const biggerValueElement = document.querySelector("#bestDay")
  const worstValueElement = document.querySelector("#worstDay")
  let biggerValue = 0
  let worstValue

  for (let counter in dataOfCharts) {
    biggerValue =
      biggerValue < dataOfCharts[counter] ? dataOfCharts[counter] : biggerValue
  }

  for (let counter in dataOfCharts) {
    worstValue =
      worstValue < dataOfCharts[counter] ? worstValue : dataOfCharts[counter]
  }

  biggerValueElement.textContent = `$${biggerValue}`
  worstValueElement.textContent = `$${worstValue}`
}

setBar("mon", dataOfCharts.mon)
setBar("tue", dataOfCharts.tue)
setBar("wed", dataOfCharts.wed)
setBar("thu", dataOfCharts.thu)
setBar("fri", dataOfCharts.fri)
setBar("sat", dataOfCharts.sat)
setBar("sun", dataOfCharts.sun)

setColorToTodayCell()
setBalance()

setBestAndWorstDay()
