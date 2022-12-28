
const color: [number, number, number] = [255, 0, 233];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"]


////////////// ENUMS /////////////////////////

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

