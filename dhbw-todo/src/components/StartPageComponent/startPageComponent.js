import React from "react";

export const StartPageComponent = () => {

    return <div className="ToDoElementComponentWrapper">
        <h2>DHBW ToDo Generator 2.1</h2>
        <h3>Soll eine Aufgabe hinzugefügt werden?</h3>
        <input type="text" name="name" />
        <button>Add</button>

        <button className="welcomeComponentButton">Alle Aufgaben löschen</button>
        <button className="welcomeComponentButton">Alle Aufgaben anzeigen</button>
    </div>
};