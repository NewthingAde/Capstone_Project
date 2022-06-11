const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

//The very root route
app.get("/", (req, res) => {
	res.send({ message: "WELCOME!! This is App Version 2" });
});

app.get("/healthz", (req, res) => {
	res.json({
		status: "OK",
		uptime: process.uptime()
	});
});

const PORT = process.env.APPPORT || 5000;

app.listen(PORT, () => {
	console.log(`Server Started at port ${PORT}`);
});
