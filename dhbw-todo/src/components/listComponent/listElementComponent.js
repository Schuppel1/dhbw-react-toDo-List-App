import React, { useState } from "react";
import "./listComponent.css";

// Ein Einzelnes Listen Element
export const ListElementComponent = ({todo,deletefunction,keyValue}) => {


    // Schaut ob sich der Status verändert hat. 
    const [allValues, setAllValues] = useState({
        isTodo: todo,
        isEditMode: '',
        isChecked: ''
     });
    
    // Editiert ein List Item
    function editListItem() {
        setAllValues({
            isTodo: allValues.isTodo,
            isEditMode: false,
            isChecked: allValues.isChecked
        })
    }

    //anstatt einem Text wird ein Input textfeld getoggelt. 
    function toogleEditmode() {
        setAllValues({
            isTodo: allValues.isTodo,
            isEditMode: !allValues.isEditMode,
            isChecked: allValues.isChecked
        })
    }

    // damit react die Änderungen anzeigt müssen die einzelnen Änderungen immer übergeben werden im useState
    function handleChange(event) {
        setAllValues({
            isTodo: event.target.value,
            isEditMode: allValues.isEditMode,
            isChecked: allValues.isChecked
        })
   }

   // für den internen Status der Checkbox
   function checkBoxChanged() {
        if(allValues.isChecked) {
            setAllValues({
                isTodo: allValues.isTodo,
                isEditMode: allValues.isEditMode,
                isChecked: false
            })
        } else {
            setAllValues({
                isTodo: allValues.isTodo,
                isEditMode: allValues.isEditMode,
                isChecked: true
            })
        }
   }

   function onDelete() {
    deletefunction(allValues.isTodo)
   }

   function getInfos() {
    console.log("Name der Todo: "+allValues.isTodo)
    console.log("Name des Keys: " + keyValue)
   }

   // checkbox HTML Elmenet
    let checkboxHtmlElement =  <input type="checkbox" className="checkboxToDo" name="checkboxToDo" onChange={checkBoxChanged}/>

    if(allValues.isChecked) {
        checkboxHtmlElement =  <input type="checkbox" className="checkboxToDo" name="checkboxToDo" onChange={checkBoxChanged} checked/>
    }
    
    // Return HTML String
    let returnHTML =     <>
        <li key={keyValue}>
            <div className="container">
                <label>{allValues.isTodo}</label>
                {checkboxHtmlElement}

                <div className="buttonWrapperToDo">
                    <button className="editButton" onClick={toogleEditmode}>Bearbeiten</button>
                    <button className="deleteButton" onClick={onDelete}>Löschen</button>
                    <button className="deleteButton" onClick={getInfos}>getInfos</button>
                </div>
            </div>
        </li>
    </>

    // Return HTML String im Edit Modus
    if(allValues.isEditMode) {
        returnHTML = 
            <li key={keyValue}>
            <div className="container">
                <input type="text" name="Editname" value={allValues.isTodo}  onChange={handleChange}/>
                {checkboxHtmlElement}
                <div className="buttonWrapperToDo">
                    <button className="editButton" onClick={editListItem}>ok</button>
                    <button className="deleteButton" onClick={deletefunction}>Löschen</button>
                </div>
            </div>
        </li>
    }

    return returnHTML
}