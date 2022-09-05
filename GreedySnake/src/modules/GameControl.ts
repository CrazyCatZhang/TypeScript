import Snake from './Snake'
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = ''
    isActive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
        this.run()
    }

    init() {
        document.addEventListener('keydown', this.keyHandler.bind(this))
    }

    keyHandler(event: KeyboardEvent) {
        this.direction = event.key
    }

    run() {
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }

        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            // @ts-ignore
            alert(e.message + ' GAME OVER!')
            this.isActive = false
            location.reload()
        }

        this.isActive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    checkEat(X: number, Y: number) {
        if (this.food.X === X && this.food.Y === Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl