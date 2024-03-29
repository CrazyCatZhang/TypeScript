class Food {
    element: HTMLElement

    constructor() {
        // @ts-ignore
        this.element = document.getElementById('food')
    }

    get X() {
        return this.element.offsetLeft
    }

    get Y() {
        return this.element.offsetTop
    }

    change() {
        const left = Math.round(Math.random() * 29) * 10
        const top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food