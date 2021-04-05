import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FilterListIcon from '@material-ui/icons/FilterList';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { IProps, Order } from '../../store/types';
import dateFormat from '../../utils/dateFormat';
import { Colors } from '../../utils/constants';
import sorting from '../../utils/sorting';

const useSortableData = (items: Order[] | any, config = null) => {
    
	const [ sortConfig, setSortConfig ] = React.useState<any>(config);
	const [ data, setData ] = React.useState(items);
	const [ checkAllBoxes, setCheckAllBoxes ] = React.useState(false);

	React.useMemo(
		() => {

			const sortableItems = sorting(items, sortConfig);

			// Set the Data with `isChecked` property for checkbox tracking
			setData(
				sortableItems.map((item) => ({
					...item,
					isChecked: false
				}))
			);
		},
		[ items, sortConfig ]
    );
    
	const requestSort = (key: string) => {
		let direction = 'ascending';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	// Check and uncheck all items
	const checkAllItems = () => {
		let checkAll = !checkAllBoxes;

		let allItem = data;

		allItem.map((item: Order) => {
			item.isChecked = checkAll;
		});

		setData(
			data.map((item: Order) => ({
				...item,
				isChecked: !item.isChecked
			}))
		);

		setCheckAllBoxes(checkAll);
		setData(allItem);
	};

	// Check and uncheck an item
	const checkItem = (orderNumber: number) => {
		if (!orderNumber) return;
		setData(
			data.map((item: Order) => {
				if (item.order_number === orderNumber) {
					return {
						...item,
						isChecked: !item.isChecked
					};
				}
				return item;
			})
		);
	};

	return { items: data, requestSort, sortConfig, checkAllItems, checkItem };
};

const OrderTable: React.FC<IProps> = (props) => {
	const { items, requestSort, sortConfig, checkItem, checkAllItems } = useSortableData(props.orders);

	const getClassNamesFor = (name: string) => {
		if (!sortConfig) return;
		return sortConfig.key === name ? sortConfig.direction : undefined;
	};

	return (
		<div className="table-wrapper">
			{/* Table Header */}
			<div className="table-header">
				<h1>Orders</h1>
				<div>
					<FilterListIcon fontSize="small" style={{ marginRight: 15, color: Colors.secondary }} />
					<MoreVertIcon fontSize="small" style={{ color: Colors.secondary }} />
				</div>
			</div>

			{/* Table */}
			<table>
				<thead>
					<tr>
						<th>
							<input type="checkbox" onChange={checkAllItems} />
						</th>
						<th>
							<button
								type="button"
								onClick={() => requestSort('order_number')}
								className={getClassNamesFor('order_number')}
							>
								Order Number
							</button>
						</th>
						<th>
							<button
								type="button"
								onClick={() => requestSort('customer.first_name')}
								className={getClassNamesFor('customer.first_name')}
							>
								Customer Name
							</button>
						</th>
						<th>
							<button
								type="button"
								onClick={() => requestSort('customer.address.city')}
								className={getClassNamesFor('customer.address.city')}
							>
								Customer Address
							</button>
						</th>
						<th>
							<button
								type="button"
								onClick={() => requestSort('order_details.value')}
								className={getClassNamesFor('order_details.value')}
							>
								Order Value
							</button>
						</th>
						<th>
							<button
								type="button"
								onClick={() => requestSort('order_details.date')}
								className={getClassNamesFor('order_details.date')}
							>
								Order Date
							</button>
						</th>
						<th>
							<button
								type="button"
								onClick={() => requestSort('shipping_details.date')}
								className={getClassNamesFor('shipping_details.date')}
							>
								Ship Date
							</button>
						</th>
						<th>
							<button
								type="button"
								onClick={() => requestSort('status')}
								className={getClassNamesFor('status')}
							>
								Status
							</button>
						</th>
					</tr>
				</thead>
				<tbody>
					{items.length > 0 &&
						items.map((item: Order) => (
							<tr key={item.order_number}>
								<td>
									<input
										type="checkbox"
										checked={item.isChecked || false}
										onChange={() => checkItem(item.order_number)}
									/>
								</td>
								<td>{item.order_number}</td>
								<td>{`${item.customer.first_name}, ${item.customer.last_name}`}</td>
								<td>{item.customer.address.city}</td>
								<td>${item.order_details.value}</td>
								<td>{dateFormat(item.order_details.date)}</td>
								<td>{dateFormat(item.shipping_details.date)}</td>
								<td>{item.status}</td>
							</tr>
						))}
				</tbody>
			</table>

			{/* Table Footer */}
			<div className="table-footer">
				<div className="paginate-label"> Rows per page:</div>

				<div className="pagination-select">
					<span>10</span>
					<ArrowDropDownIcon fontSize="small" style={{ marginRight: 15, color: Colors.secondary }} />
				</div>

				<div className="pagination-count">1-10 of 100 </div>

				<div className="pagination-nav">
					<NavigateBeforeIcon fontSize="small" style={{ marginRight: 8, color: Colors.secondary }} />
					<NavigateNextIcon fontSize="small" style={{ color: Colors.secondary }} />
				</div>
			</div>
		</div>
	);
};

export default OrderTable;
