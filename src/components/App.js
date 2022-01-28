import React from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"

import hogs from "../porkers_data";

function App() {
	
	console.log(hogs)
	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
			</div>
			<div className="eight wide column centered">
				<div className="ui two stackable cards">
					{hogs.map((pig)=>(
						<Tiles key={pig.name} 
						name={pig.name} 
						image={pig.image} 
						hogs={hogs}
						specialty={pig.specialty} 
						weight={pig.weight} 
						greased={pig.greased}
						medal={pig['highest medal achieved']} /> 
					))}
		 		</div>
			</div>
		</div>
	);
}

export default App;
