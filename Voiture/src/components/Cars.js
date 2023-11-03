import React from "react";
import Wrapper from "./Wrapper";

const Car = ({ children, color }) => {

    return children && (
        <Wrapper>
            <p>Brand : { children }</p>
            <p>Color : { color ? color : "Néant" }</p>
        </Wrapper>   
    )
    
}

export default Car;