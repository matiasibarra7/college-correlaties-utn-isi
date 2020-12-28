import React from "react";
import Subject from "./Subject"
import controller from "../controllers/controllerSubjects"

function Year(props) {

  function approveAllByYear() {
    //Valor del check aprobado por año
    const value = document.querySelector("#apr_all_year_" + props.id).checked

    // Si activo aprobado, activo también el regular
    if (value) {
      document.querySelector("#reg_all_year_" + props.id).checked = true
    }

    const checksApr = document.querySelectorAll(".apr_check_year_" + props.id)
    const checksReg = document.querySelectorAll(".reg_check_year_" + props.id)

    
    checksApr.forEach( (el, i) => {
      el.checked = value;
      const lineParent = el.parentNode.parentNode
      const boxes_reg = document.querySelectorAll(".reg_" + el.dataset.algo)
      const boxes_apro = document.querySelectorAll(".apr_" + el.dataset.algo)
      if (value) {

        controller.regularOn(boxes_reg, checksReg[i], lineParent)

        controller.approveOn(boxes_apro, el, lineParent)

      } else {
        controller.approveOff(boxes_apro, el, lineParent)
      }
    })
  }

  function regularizateAllByYear() {
    //Valor del check regular por año
    const value = document.querySelector("#reg_all_year_" + props.id).checked

    // Si desactivo regular, desactivo también el aprobado
    if (!value) {
      document.querySelector("#apr_all_year_" + props.id).checked = false
    }

    let checksApr = document.querySelectorAll(".apr_check_year_" + props.id)
    let checksReg = document.querySelectorAll(".reg_check_year_" + props.id)

    checksReg.forEach( (el,i) => {
      el.checked = value;
      const lineParent = el.parentNode.parentNode
      const boxes_reg = document.querySelectorAll(".reg_" + el.dataset.algo)
      const boxes_apro = document.querySelectorAll(".apr_" + el.dataset.algo)

      if (value) {
        controller.regularOn(boxes_reg, el, lineParent)
      } else {
      
        controller.regularOff(boxes_reg, el, lineParent)
        
        controller.approveOff(boxes_apro, checksApr[i], lineParent)

      }
    })
  }

  return (
    <>
    {props.id > 1? <br/> : ""}
    <div className="block-year">

      Año {props.id} 

      <div className="subject-line">
        <div></div>
        <div></div>
        <div><input type="checkbox" id={"reg_all_year_" + props.id} onClick={()=> regularizateAllByYear()} /></div>
        <div><input type="checkbox" id={"apr_all_year_" + props.id} onClick={()=> approveAllByYear()} /></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {
        props.infoByYear[props.id - 1].subjects.map(subject => {
          return < Subject 
            key={"subject_" + subject.id} 
            name={subject.name} 
            id={subject.id} 
            correlatives_course={subject.correlatives_course} 
            correlatives_exam={subject.correlatives_exam} 
            correlatives_course_apro={subject.correlatives_course_apro}
            year={props.id} /> 
        })
      }
      
    </div>
    </>
  )
}


export default Year;