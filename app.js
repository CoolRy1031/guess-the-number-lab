const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum 
      console.log(this.secretNum)
      do {
        this.prevGuesses.push(this.getGuess())
        console.log(this.prevGuesses)
        this.render()
      } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
  
  },
  getGuess: function(){
    let guess
    do {
       guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
    } while (guess < this.smallestNum || guess > this.biggestNum)
    return guess
  },
  render: function() {
    if (this.prevGuesses[this.prevGuesses.length -1] === this.secretNum){
      alert(`Congrats you guessed the ${this.secretNum}`)
    } else if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum){
      alert(`Your guess is to High guess again. previous guesses: ${this.prevGuesses.join()}`)
    } else if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum){
      alert(`Your guess is to Low guess again. previous guesses: ${this.prevGuesses.join()}`)
    }




  }

}
game.play()