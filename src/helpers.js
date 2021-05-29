export const roundNumber = (myNum) => {
	myNum = myNum.toFixed(2)
	if (myNum[3] == 0 && myNum[2] == 0) {
		myNum = parseFloat(myNum)
		myNum += 0.01
	}
	return parseFloat(myNum)
}
