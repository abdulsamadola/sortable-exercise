import { Action } from 'redux';

type Customer = {
    first_name: string;
    last_name: string;
    address: Address;
};

type Address = {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
};

type OrderDetails = {
    value: number;
    date: Date | string;
};

type ShippingDetails = {
    date: Date | string;
};

export type Order = {
    order_number: number;
    customer: Customer;
    order_details: OrderDetails;
    shipping_details: ShippingDetails;
    status: string;
    isChecked?: boolean;
};

export type Color = {
    secondary: string;
}

export interface IProps {
    orders: Order[]
}

export interface LoadingState {
    orders: boolean;
}

export interface ApplicationState {
    loading: LoadingState;
    orders: Order[];
}

export interface LoadOrdersRequest extends Action {
    type: 'loadOrdersRequest';
}

export interface LoadOrdersSuccess extends Action {
    type: 'loadOrdersSuccess';
    orders: Order[];
}

export interface LoadOrdersError extends Action {
    type: 'loadOrdersError';
}

export type ApplicationAction =
    | LoadOrdersRequest
    | LoadOrdersSuccess
    | LoadOrdersError;