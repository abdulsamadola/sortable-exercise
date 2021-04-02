import produce from 'immer';
import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
    loading: {
        orders: false,
    },
    orders: [],
}

const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case "loadOrdersRequest":
            return produce(state, draft => {
                draft.loading.orders = true;
            });
        case "loadOrdersSuccess":
            return produce(state, draft => {
                draft.loading.orders = false;
                draft.orders = action.orders;
            });
        case "loadOrdersError":
            return produce(state, draft => {
                draft.loading.orders = false;
            });
        default:
            return state;
    }
}

export default reducer;