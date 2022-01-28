import React, {useState} from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"
import GreaseButton from "./GreaseButton"

import hogs from "../porkers_data";

function App() {
	const [filterList, setFilterList] = useState(hogs)
	const [greasedList, setGreasedList] = useState(true)

	function handleClick(){
		const filter = hogs.filter((pig)=> (greasedList? pig.greased : pig))
		setFilterList(filter)
		setGreasedList((greasedList)=>!greasedList)
	}

	

	function sortbyWeight(){
		setFilterList(hogs.sort((a, b) => a.weight - b.weight))
	}
	


	
	// console.log(hogs)
	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
				<GreaseButton onClick={handleClick} greasedList={greasedList} />
				<button onClick={sortbyWeight}>Sort by Weight</button>
			</div>
			<div className="eight wide column centered">
				<div className="ui two stackable cards">
					{filterList.map((pig)=>(
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
