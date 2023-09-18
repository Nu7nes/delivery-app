class Order {
    static counter = 0;

    constructor(order) {
        this.id = Order.counter++
        this.items = order
        this.timestamp = this.getTimestamp()
    }

    getTimestamp() {
        return new Date().getTime()
    }
}

export default Order