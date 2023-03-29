<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Meus Links</title>
	<style>
		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
			font-family: Arial, sans-serif;
		}

		body {
			background-color: #f5f5f5;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			min-height: 100vh;
		}

		.container {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			width: 80%;
			max-width: 600px;
			padding: 40px;
			background-color: #fff;
			border-radius: 20px;
			box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
		}

		.link {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			padding: 20px;
			margin: 10px 0;
			border-radius: 10px;
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			transition: all 0.3s ease-in-out;
			color: #fff;
			text-decoration: none;
			font-size: 18px;
			font-weight: bold;
			text-align: center;
			background-size: 200% auto;
			background-image: linear-gradient(to right, #f687b3 0%, #fcd307 50%, #00bfff 100%);
		}

		.link:hover {
			transform: translateY(-5px);
			box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
		}

		.link:nth-child(1) {
			background-image: linear-gradient(to right, #3c3c3c 0%, #605f5f 50%, #8c8c8c 100%);
		}

		.link:nth-child(2) {
			background-image: linear-gradient(to right, #4361ee 0%, #7209b7 50%, #f72585 100%);
		}

		.link:nth-child(3) {
			background-image: linear-gradient(to right, #1e9600 0%, #fff200 50%, #ff0000 100%);
		}

		.link:nth-child(4) {
			background-image: linear-gradient(to right, #fd79a8 0%, #c0c0c0 50%, #6c5ce7 100%);
		}

		.link:nth-child(5) {
			background-image: linear-gradient(to right, #e63946 0%, #f1faee 50%, #a8dadc 100%);
		}

		.link:nth-child(6) {
			background-image: linear-gradient(to right, #222831 0%, #393e46 50%, #00adb5 100%);
		}

		.link:nth-child(7) {
			background-image: linear-gradient(to right, #6200ee 0%, #b5179e 50%, #e83e8