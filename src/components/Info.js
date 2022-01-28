import React from "react";

function Info({ specialty, weight, greased, medal }) {
	return (
        <div>
            <p>{specialty}</p>
            <p>{weight}</p>
            <p>{greased}</p>
            <p>{medal}</p>
        </div>
    )
}

export default Info;



