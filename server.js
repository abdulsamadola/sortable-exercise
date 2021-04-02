// Import dependencies
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const ORDERS_URL =
	'https://gist.githubusercontent.com/ryanjn/07512cb1c008a5ec754aea6cbbf4afab/raw/eabb4d324270cf0d3d17a79ffb00ff3cfaf9acc3/orders.json';

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
	console.log(`Request_Endpoint: ${req.method} ${req.url}`);
	next();
});

// Configure the bodyParser middleware
app.use(express.json());

// Configure the CORs middleware
app.use(cors());

// This is an endpoint to get orders
app.get('/api/orders', async (req, res) => {
	try {
		const { data: orders } = await axios.get(ORDERS_URL);
		if (orders) {
			res.status(200).json({
				status: 'success',
				results: orders.length,
				data: {
					orders
				}
			});
		}
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: 'Something went wrong'
		});
	}
});

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

// Catch any bad requests
app.get('*', (req, res) => {
	res.status(400).json({
		status: 'fail',
		msg: 'Bad Request'
	});
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
