import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");

	return (
		<div className="container mx-auto" >
			<div className="rayaNegra2">.</div>

			<div className="rayaNegra1">.</div>
			<div>
			<div className="rayaNegra">.</div>
		
			<div className="traffic-light">
				<div className="am"> 
					<div
					onClick={() => setColor("red")}
					className={
						"light red " + (color === "red" ? "glow" : "")
					}>.</div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow " + (color === "yellow" ? "glow" : "")
					}>.</div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green " + (color === "green" ? "glow" : "")
					}>.</div>
					</div>
			</div>
			</div>
		</div>
	);
};

export default Home;