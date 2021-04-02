import { ThunkAction } from 'redux-thunk';
import { ApplicationState, ApplicationAction, Order } from './types';
import { loadOrdersRequest, loadOrdersSuccess, loadOrdersError } from './actions';
import * as orderService from '../services/orderService';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadOrders = (): Effect => (dispatch, getState) => {

    dispatch(loadOrdersRequest());
    return orderService.loadOrders()
        .then(({ data }) => {
            const orders: Order[] = data.data.orders;
            dispatch(loadOrdersSuccess(orders))
        })
        .catch(() => dispatch(loadOrdersError()));
};