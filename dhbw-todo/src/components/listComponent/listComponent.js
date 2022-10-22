import React from "react";
import "./listComponent.css";
import { ListElementComponent } from "./listElementComponent";

//Es wird ein Array übergeben mit der Liste
export const ListComponent = ({list}) => {


    // der Inhalt der Liste
    let listItems = <p>
        es ist noch keine Liste vorhanden
    </p>

    let keycount = 0;
    //<li key={keycount++}></li>
    if(list) {
        listItems = list.map((item) => 
        <ListElementComponent todo={item} editmode={false} key={keycount++}></ListElementComponent>
         );
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