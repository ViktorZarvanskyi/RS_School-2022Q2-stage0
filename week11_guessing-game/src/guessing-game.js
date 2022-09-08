class GuessingGame {
    constructor() {
        this.minNum;
        this.maxNum;
        this.middleNum;
    }

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        return this.middleNum = Math.round((this.minNum + this.maxNum) / 2);
    }

    lower() {
        this.maxNum = this.middleNum;
    }

    greater() {
        this.minNum = this.middleNum;
    }
}

module.exports = GuessingGame;
