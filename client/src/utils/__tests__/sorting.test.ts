import { Order } from "../../store/types";
import sorting from "../sorting";

describe('Sorting', () => {
    const mockData = [
        {
            order_number: 100000,
            customer: {
                first_name: 'John',
                last_name: 'Doe',
                address: { line1: '123 Main Street', line2: '', city: 'Boston', state: 'MA', zip: '02215' }
            },
            order_details: { value: 137.11, date: 'Mon Feb 01 2021 00:00:00 GMT+0000 (GMT)' },
            shipping_details: { date: 'Wed Feb 03 2021 00:00:00 GMT+0000 (GMT)' },
            status: 'open'
        },
        {
            order_number: 100005,
            customer: {
                first_name: 'Mary',
                last_name: 'Smith',
                address: { line1: '555 Broadway', line2: '', city: 'New York', state: 'NY', zip: '12345' }
            },
            order_details: { value: 157.12, date: 'Sun Mar 01 2021 00:00:00 GMT+0000 (GMT)' },
            shipping_details: { date: 'Tue Mar 03 2021 00:00:00 GMT+0000 (GMT)' },
            status: 'shipped'
        },
        {
            order_number: 1000101,
            customer: {
                first_name: 'Dakota',
                last_name: 'Finley',
                address: { line1: '999 South Bend Road', line2: '', city: 'Charleston', state: 'MSC', zip: '38672' }
            },
            order_details: { value: 98.99, date: 'Tue Jan 10 2021 00:00:00 GMT+0000 (GMT)' },
            shipping_details: { date: 'Wed Jan 13 2021 00:00:00 GMT+0000 (GMT)' },
            status: 'cancelled',
        }
    ];

    it('should sort the order array by order_details value in ascending order', () => {
        const sortConfig = { key: 'order_details.value', direction: 'ascending' };
        const expected: Order[] = [
            {
                order_number: 1000101,
                customer: {
                    first_name: 'Dakota',
                    last_name: 'Finley',
                    address: { line1: '999 South Bend Road', line2: '', city: 'Charleston', state: 'MSC', zip: '38672' }
                },
                order_details: { value: 98.99, date: 'Tue Jan 10 2021 00:00:00 GMT+0000 (GMT)' },
                shipping_details: { date: 'Wed Jan 13 2021 00:00:00 GMT+0000 (GMT)' },
                status: 'cancelled'
            },
            {
                order_number: 100000,
                customer: {
                    first_name: 'John',
                    last_name: 'Doe',
                    address: { line1: '123 Main Street', line2: '', city: 'Boston', state: 'MA', zip: '02215' }
                },
                order_details: { value: 137.11, date: 'Mon Feb 01 2021 00:00:00 GMT+0000 (GMT)' },
                shipping_details: { date: 'Wed Feb 03 2021 00:00:00 GMT+0000 (GMT)' },
                status: 'open'
            },
            {
                order_number: 100005,
                customer: {
                    first_name: 'Mary',
                    last_name: 'Smith',
                    address: { line1: '555 Broadway', line2: '', city: 'New York', state: 'NY', zip: '12345' }
                },
                order_details: { value: 157.12, date: 'Sun Mar 01 2021 00:00:00 GMT+0000 (GMT)' },
                shipping_details: { date: 'Tue Mar 03 2021 00:00:00 GMT+0000 (GMT)' },
                status: 'shipped'
            }];

        expect(sorting(mockData, sortConfig)).toEqual(expected)
    })

    it('should sort the order array by order_number in descending order', () => {
        const sortConfig = { key: 'order_number', direction: 'descending' };

        const expected: Order[] = [
            {
                order_number: 1000101,
                customer: {
                    first_name: 'Dakota',
                    last_name: 'Finley',
                    address: { line1: '999 South Bend Road', line2: '', city: 'Charleston', state: 'MSC', zip: '38672' }
                },
                order_details: { value: 98.99, date: 'Tue Jan 10 2021 00:00:00 GMT+0000 (GMT)' },
                shipping_details: { date: 'Wed Jan 13 2021 00:00:00 GMT+0000 (GMT)' },
                status: 'cancelled'
            },
            {
                order_number: 100005,
                customer: {
                    first_name: 'Mary',
                    last_name: 'Smith',
                    address: { line1: '555 Broadway', line2: '', city: 'New York', state: 'NY', zip: '12345' }
                },
                order_details: { value: 157.12, date: 'Sun Mar 01 2021 00:00:00 GMT+0000 (GMT)' },
                shipping_details: { date: 'Tue Mar 03 2021 00:00:00 GMT+0000 (GMT)' },
                status: 'shipped'
            },
            {
                order_number: 100000,
                customer: {
                    first_name: 'John',
                    last_name: 'Doe',
                    address: { line1: '123 Main Street', line2: '', city: 'Boston', state: 'MA', zip: '02215' }
                },
                order_details: { value: 137.11, date: 'Mon Feb 01 2021 00:00:00 GMT+0000 (GMT)' },
                shipping_details: { date: 'Wed Feb 03 2021 00:00:00 GMT+0000 (GMT)' },
                status: 'open'
            },
        ];

        expect(sorting(mockData, sortConfig)).toEqual(expected)
    })
})