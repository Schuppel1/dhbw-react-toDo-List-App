import React, {useState} from "react";
import "./listComponent.css";
import { ListElementComponent } from "./listElementComponent";

//Es wird ein Array übergeben mit der Liste
export const ListComponent = ({list}) => {

    const [isList, setList] = useState(list)


    // der Inhalt der Liste als HTML Elmente
    let listItems = <p>
        Es sind noch keine ToDos vorhanden!
    </p>

    let keycount = 0;
    if(isList) {
        listItems = isList.map((item) => 
            <ListElementComponent todo={item} editmode={false} keyValue={keycount++} checkForVisibleItems={checkForVisibleItems} checkDoubleEntry={checkForDuplicated}/>
        );
    }


    // Löscht die ganze Liste
    function clearList() {
        listItems = <p>
            Es ist noch keine Liste vorhanden.
        </p>
        keycount = 0
        setList([])
    }

    // Prüft ob nur noch 1 Item vorhanden ist. Falls ja wird diese function beim löschen dieses Item aufgerufen
    function checkForVisibleItems() {
        if(document.getElementById("toDoList").childElementCount===1) {
            clearList() 
        }
    }

    // Fügt ein Element der Liste hinzu
    function addListItem(e) {
        let a =document.getElementById("inputToDo")
        if(!isList) {
            // Leere Liste musss nich alles überprüfen daher der Sonderfall
            setList([a.value])
            a.value=""
            return
        }

        setList(isList.concat([a.value]))
        
        if(checkForDuplicated(a.value)) {
            alert("doppelter Eintrag")
            return
        }

        if(a.value.length<1) {
            alert("leerer Eintrag")
            return
        }
        a.value=""
    }

    // Um doppelte Einträge zu erkennen
    function checkForDuplicated(toDoName) {
        const listItems = document.getElementById("toDoList").children;
        const listArray = Array.from(listItems);
        let double = false
        listArray.forEach((item) => {
            if(item.children.item(0).children.item(0).innerHTML.localeCompare(toDoName)==0) {    
                double= true
            } 
        });
        return double;
    }

   // HTML Return 
    return ( 
    <div className="listToDo"> 

        <div className='inputToDo'>
              <input type="text" name="inputToDo" id="inputToDo" placeholder="To-Do hinzufügen.." />
              <button className="addButton" onClick={addListItem}>Hinzufügen</button>
        </div>
        <hr />

        <div className="listItemsToDo">
                <ul id="toDoList">
                    {listItems}
                </ul>
                <hr />        

        <div className='resetToDo' onClick={clearList}>
            Alle Aufgaben zurücksetzen!
        </div>
    </div>

    </div>
    )

}