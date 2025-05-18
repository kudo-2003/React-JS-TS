export class Order {
    constructor(orderId, userId, products, totalPrice, status) {
        this.orderId = orderId;
        this.userId = userId;
        this.products = products; // Mảng chứa các sản phẩm
        this.totalPrice = totalPrice;
        this.status = status; // "pending", "shipped", "delivered"
    }
}
