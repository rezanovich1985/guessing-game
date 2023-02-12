class GuessingGame {
  constructor() {}

  minRange = "";
  maxRange = "";
  candidate = "";

  setRange(min, max) {
    this.minRange = min;
    this.maxRange = max;
    this.candidate = "";
  }

  guess() {
    if (this.candidate === "") {
      this.candidate = Math.round((this.minRange + this.maxRange) / 2);
    }
    // console.log(this.candidate, (this.minRange + this.maxRange) / 2);
    return this.candidate;
  }

  lower() {
    if (this.candidate !== "") {
      this.maxRange = this.candidate;
      this.candidate = "";
    }
    // console.log("lower");
  }

  greater() {
    if (this.candidate !== "") {
      this.minRange = this.candidate;
      this.candidate = "";
    }
    // console.log("greater");
  }
}

module.exports = GuessingGame;

const number = 409;
const game = new GuessingGame();
game.setRange(0, 4048);

let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
