import React from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"

import hogs from "../porkers_data";

function App() {
	
	console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<div>
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
	);
}

export default App;
