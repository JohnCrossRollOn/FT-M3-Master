import React from "react";
import Draggable from "react-draggable";

const Weight = (props) => <Draggable bounds= "body">
    <div className="Weight" bounds>{props.value}</div>
</Draggable>

export default Weight;