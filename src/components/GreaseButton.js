import React from "react";

function GreaseButton({ onClick, greasedList }) {


	return (
        <button onClick={onClick}>{greasedList? 'Show Greased Pigs' : 'Show All Pigs'}</button>
    )
};

export default GreaseButton;



