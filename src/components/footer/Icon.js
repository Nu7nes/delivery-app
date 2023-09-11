class Icon {
    static counter = 0;

    constructor(icon) {
        this.icon = icon
        this.selected = (Icon.counter < 1) ? true : false
        this.id = Icon.counter++
         
    }
}

export default Icon