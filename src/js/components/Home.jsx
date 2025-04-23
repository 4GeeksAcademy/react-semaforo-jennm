import React from "react";

//aqui voy a importar el componente TrafficLight
import TrafficLight from "./TrafficLight";


//aqui creo mi nuevo codigo
const Home = () => {
	return (
		<div className="text-center mt-5">
            <h1 className="text-center mt-5">My Traffic Light</h1> {/* mi titulo */}
			
		    <TrafficLight/> {/* esta es mi etiqueta personalizada */}

			<p className="mt-4">
				Made by Jenn with love❤️!
			</p>
		</div>
	);
};

export default Home; //esto si lo mantenemos igual 