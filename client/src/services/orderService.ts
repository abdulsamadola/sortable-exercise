import { instance } from "./"

export const loadOrders = async () => await instance.get('orders');