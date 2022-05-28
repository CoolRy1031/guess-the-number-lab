const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  previousGuess: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}
getGuess: function(){
  let guess
  while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
  guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.smallestNum}`))
  
}
return guess