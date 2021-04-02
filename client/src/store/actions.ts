import { Order, LoadOrdersRequest, LoadOrdersSuccess, LoadOrdersError } from './types';

export const loadOrdersRequest = (): LoadOrdersRequest => ({
    type: 'loadOrdersRequest',
});

export const loadOrdersSuccess = (orders: Order[]): LoadOrdersSuccess => ({
    type: 'loadOrdersSuccess',
    orders,
});

export const loadOrdersError = (): LoadOrdersError => ({
    type: 'loadOrdersError',
});