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
            <ListElementComponent todo={item} editmode={false} keyValue={keycount++} deletefunction={deletListItem}/>
        );
    }

    // löscht ein einzelnes Element der ToDo Liste
    function deletListItem(itemContent) {
        console.log(isList)
        const arrayIndex = (isList.indexOf(itemContent));
        console.log("ArrayIndex")
        console.log(arrayIndex)
        setList(isList.splice(arrayIndex,1))
        console.log(isList)

    }

    // Löscht die ganze Liste
    function clearList() {
        listItems = <p>
            Es ist noch keine Liste vorhanden
        </p>
        setList()
    }

    // Fügt ein Element der Liste hinzu
    function addListItem(e) {
        let a =document.getElementById("inputToDo")
        if(!isList) {
            setList([a.value])
        } else {
            setList(isList.concat([a.value]))
        }
        
        a.value=""
    }

    console.log(isList)
    return ( 
    <div className="listToDo"> 

        <div className='inputToDo'>
              <input type="text" name="inputToDo" id="inputToDo" placeholder="To-Do hinzufügen.." />
              <button className="addButton" onClick={addListItem}>Hinzufügen</button>
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