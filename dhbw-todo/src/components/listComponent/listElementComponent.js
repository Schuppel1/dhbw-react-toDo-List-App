import React, { useState } from "react";
import "./listComponent.css";

// Ein Einzelnes Listen Element
export const ListElementComponent = ({todo,deletefunction,keyValue,checkDoubleEntry}) => {


    // Schaut ob sich der Status verändert hat. 
    const [allValues, setAllValues] = useState({
        isTodo: todo,
        isEditMode: '',
        isChecked: '',
        isVisible: 'true'
     });
    
    // Editiert ein List Item
    function editListItem() {
        if(checkDoubleEntry(allValues.isTodo)) {
            alert("Ein Eintrag mit diesem Namen existiert bereits")
            return;
        }
        setAllValues({
            isTodo: allValues.isTodo,
            isEditMode: false,
            isChecked: allValues.isChecked,
            isVisible: allValues.isVisible
        })
    }

    //anstatt einem Text wird ein Input textfeld getoggelt. 
    function toogleEditmode() {
        setAllValues({
            isTodo: allValues.isTodo,
            isEditMode: !allValues.isEditMode,
            isChecked: allValues.isChecked,
            isVisible: allValues.isVisible
        })
    }

    // damit react die Änderungen anzeigt müssen die einzelnen Änderungen immer übergeben werden im useState
    function handleChange(event) {
        setAllValues({
            isTodo: event.target.value,
            isEditMode: allValues.isEditMode,
            isChecked: allValues.isChecked,
            isVisible: allValues.isVisible
        })
   }

   // für den internen Status der Checkbox
   function checkBoxChanged() {
        if(allValues.isChecked) {
            setAllValues({
                isTodo: allValues.isTodo,
                isEditMode: allValues.isEditMode,
                isChecked: false,
                isVisible: allValues.isVisible
            })
        } else {
            setAllValues({
                isTodo: allValues.isTodo,
                isEditMode: allValues.isEditMode,
                isChecked: true,
                isVisible: allValues.isVisible
            })
        }
   }

   // Anstatt zu löschen werden die Items nur unsichtbar gemacht.
   function onDelete() {
    setAllValues({
        isTodo: allValues.isTodo,
        isEditMode: allValues.isEditMode,
        isChecked: true,
        isVisible: false
    })
    // Funktion der Elternklasse wird aufgerufen. Diese testet ob es noch sichtbare toDos gibt 
    deletefunction()
   }


   // checkbox HTML Elmenet
    let checkboxHtmlElement =  <input type="checkbox" className="checkboxToDo" name="checkboxToDo" onChange={checkBoxChanged}/>

    if(allValues.isChecked) {
        checkboxHtmlElement =  <input type="checkbox" className="checkboxToDo" name="checkboxToDo" onChange={checkBoxChanged} checked/>
    }
    
    if(!allValues.isVisible) {
        return;
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