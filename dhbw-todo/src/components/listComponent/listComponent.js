import React from "react";
import "./listComponent.css";

//Es wird ein Array übergeben mit der Liste
export const ListComponent = ({list}) => {


    // der Inhalt der Liste
    let listItems = <p>
        es ist noch keine Liste vorhanden
    </p>

    let keycount = 0;
    if(list) {
        listItems = list.map((item) => 
            <li key={keycount++}>
                <div className="container">
                    <input type="checkbox" className="checkboxToDo" name="checkboxToDo" onClick={markAsDone} />
                    <div className="editToDo" contentEditable="true" onClick={editListItem}>{item}</div>

                    <div className="buttonWrapperToDo">
                        <button className="editButton" onClick={editListItem}>Bearbeiten</button>
                        <button className="deleteButton" onClick={deletListItem}>Löschen</button>
                    </div>
                </div>
            </li>
         );
    } else {

    }



    // löscht ein einzelnes Element der ToDo Liste
    function deletListItem(item) {
        
    }

    // Löscht die ganze Liste
    function clearList() {

    }

    // makiert ein Element als abgeschlossen
    function markAsDone(item) {

    }

    // Fügt ein Element der Liste hinzu
    function addListItem() {

    }

    // Editiert ein List Item
    function editListItem(e) {

    }

    // diese Funktion hört darauf ob im Inputfeld "Aufgabe Hinzufügen" etwas eingegeben wird. 
    function keyListener(e) {

    }


    if (listItems) {
        console.log(listItems)
    }

    return ( <div className="listToDo"> 

        <div className='inputToDo'>
              <input type="text" name="inputToDo" id="inputToDo" placeholder="To-Do hinzufügen.." onKeyPress={keyListener} />
        </div>

        <div className="listItemsToDo">
                <ul>
                    {listItems}
                </ul>

        <div className='resetToDo' onClick={clearList}>
            Aufgaben zurücksetzen
        </div>
    </div>

    </div>
    )

}