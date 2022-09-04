class ScorePanel {
    score = 0
    level = 1
    maxLevel: number
    upScore: number
    scoreElement: HTMLElement
    levelElement: HTMLElement

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.maxLevel = maxLevel
        this.upScore = upScore
        // @ts-ignore
        this.scoreElement = document.getElementById('score')
        // @ts-ignore
        this.levelElement = document.getElementById('level')
    }

    addScore() {
        this.scoreElement.innerHTML = ++this.score + ''
        if (this.score % this.upScore === 0) this.addLevel()
    }

    addLevel() {
        if (this.level < this.maxLevel) this.levelElement.innerHTML = ++this.level + ''
    }
}

export default ScorePanel