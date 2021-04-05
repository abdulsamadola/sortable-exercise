import { Order } from "../store/types";

type SortConfig = {
    [key: string]: string;
}

/**
   * This function sort array items
   * @params takes in array and sort configurations
   * @returns returns sorted array
   */
export default (arr: Order[], sortConfig: SortConfig): Order[] => {
    let sortableItems = [...arr];

    if (sortConfig !== null) {
        const sortKeys = sortConfig.key.split('.');

        const getValue = (object: Order, keys: string) =>
            keys.split('.').reduce((o: Order | any, k: string) => (o || {})[k], object);

        if (sortKeys.length > 1) {
            // For nested object keys
            sortableItems.sort((a, b) => {
                if (getValue(a, sortConfig.key) < getValue(b, sortConfig.key)) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (getValue(a, sortConfig.key) > getValue(b, sortConfig.key)) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        } else {
            // For non-nested object keys
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
    }

    return sortableItems;
}