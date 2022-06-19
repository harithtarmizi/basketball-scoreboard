let countHome = document.getElementById("count-home")
let countAway = document.getElementById("count-away")
let HomeScore = 0
let AwayScore = 0

function PtsHome1() {
	HomeScore += 1
	countHome.innerText = HomeScore
} 

function PtsHome2() {
	HomeScore += 2
	countHome.innerText = HomeScore
} 
function PtsHome3() {
	HomeScore += 3
	countHome.innerText = HomeScore
} 

function PtsAway1() {
	AwayScore += 1
	countAway.innerText = AwayScore
} 

function PtsAway2() {
	AwayScore += 2
	countAway.innerText = AwayScore
} 
function PtsAway3() {
	AwayScore += 3
	countAway.innerText = AwayScore
} 
