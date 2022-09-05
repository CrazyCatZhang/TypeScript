class Snake {
    head: HTMLElement
    bodies: HTMLCollectionOf<HTMLElement>
    elements: HTMLElement

    constructor() {
        // @ts-ignore
        this.elements = document.getElementById('snake')
        // @ts-ignore
        this.head = document.querySelector('#snake > div')
        this.bodies = this.elements.getElementsByTagName('div')
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value: number) {
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了!!!')
        }

        if (this.X === value) return

        if (this.bodies[1]?.offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        this.moveBody()

        this.head.style.left = value + 'px'

        this.checkHeadBody()
    }

    set Y(value: number) {
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了!!!')
        }

        if (this.Y === value) return

        if (this.bodies[1]?.offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody()

        this.head.style.top = value + 'px'

        this.checkHeadBody()
    }

    addBody() {
        this.elements.insertAdjacentHTML('beforeend', '<div></div>')
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            const X = this.bodies[i - 1].offsetLeft
            const Y = this.bodies[i - 1].offsetTop

            this.bodies[i].style.left = X + 'px'
            this.bodies[i].style.top = Y + 'px'
        }
    }

    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            const body = this.bodies[i]
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                throw new Error('撞到自己了!!!!')
            }
        }
    }
}

export default Snake