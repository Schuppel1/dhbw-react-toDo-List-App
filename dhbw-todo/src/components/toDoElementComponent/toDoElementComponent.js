import React, {Fragment} from "react";

export const ToDoElementComponent = ({Aufgabe}) => {

    let toDo = Aufgabe;

    function editAufgabe(e) {
        toDo = "nop";
    }

    return <div className="ToDoElementComponentWrapper">
        <p>{toDo}</p>
        <button className="welcomeComponentButton" onClick={editAufgabe}>edit</button>
        <button className="welcomeComponentButton">delete</button>
    </div>
};