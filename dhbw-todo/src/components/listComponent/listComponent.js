import React from "react";

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
                <div className="todo-name">
                    <input type="checkbox" className="todo--check" name="todo--check" onClick={markAsDone} />

                    <div className="todo--name" contentEditable="true" onClick={editListItem}>{item}</div>
                </div>

                <div className="todo-actions">
                    <div className="todo-edit" onClick={editListItem}>Bearbeiten</div>
                    <div className="todo-del" onClick={deletListItem}>Löschen</div>
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

    return (

        <div className="todo-list">
                <ul className='todo--list'>
                    {listItems}
                </ul>
            <div className='todo--input'>
              <input type="text" name="todo--input" id="todo--input" placeholder="Aufgabe hinzufügen ..." onKeyPress={keyListener} />
            </div>

            <div className='todo--reset' onClick={clearList}>
              Aufgaben zurücksetzen
            </div>
    </div>
    )

}