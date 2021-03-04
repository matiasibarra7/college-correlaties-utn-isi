import React from "react";
import Subject from "./Subject/Subject"
import "./Year.css";
import controller from "../../controllers/controllerSubjects"

function Year(props) {

  const thisYear = props.infoByYear
  const subjectsOfThisYear = thisYear[props.id - 1].subjects

  function printHeader(yearNumber) {
    
    switch (yearNumber) {
      case 1:
        return "Primer Año"
      case 2:
        return "Segundo Año"
      case 3:
        return "Tercer Año"
      case 4:
        return "Cuarto Año"
      case 5:
        return "Quinto Año"
      default: 
        return "Algo falló"
    }

  }

  // Recibe las hs de la variable global luego de recibir la suma o resta y pinta o despinta el cuadro de electivas en proyecto final
  function electCalc(hs) {
    console.log(hs)
    if (hs < 0) { props.hs.amount = 0 }

    const div22hs = document.querySelector(".apr_22hs_electivas")
  
    if (hs >= 22) { 
      div22hs.classList.add("compliment")
    } else {
      div22hs.classList.remove("compliment")
    }
  }


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
      const thisSubject = subjectsOfThisYear[i]

      if (value) {

        controller.regularOn(boxes_reg, checksReg[i], lineParent)

        controller.approveOn(boxes_apro, el, lineParent)

        // probando suma de horas
        if (thisSubject.elect_hs) {
          props.hs.amount += thisSubject.elect_hs
          electCalc(props.hs.amount)
        }
        // probando suma de horas

      } else {
        controller.approveOff(boxes_apro, el, lineParent)

        // probando resta de horas
        if (thisSubject.elect_hs) {
          props.hs.amount = props.hs.amount - thisSubject.elect_hs
          electCalc(props.hs.amount)
        }
        // probando resta de horas
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
      const thisSubject = subjectsOfThisYear[i]

      if (value) {
        controller.regularOn(boxes_reg, el, lineParent)
      } else {
      
        controller.regularOff(boxes_reg, el, lineParent)
        
        controller.approveOff(boxes_apro, checksApr[i], lineParent)

        // probando resta de horas
        if (thisSubject.elect_hs) {
          props.hs.amount = props.hs.amount - thisSubject.elect_hs
          electCalc(props.hs.amount)
        }
        // probando resta de horas
      }
    })
  }

  return (
    <>
    { props.id > 1? <br/> : "" }
    <div className="block-year">

      <div className="year-title">
        { printHeader(props.id) }
      </div>
       

      <div className="subject-line">
        <div></div>
        <div></div>
        <div><input type="checkbox" id={"reg_all_year_" + props.id} onClick={()=> regularizateAllByYear()} title="Tildar todo el año"/></div>
        <div><input type="checkbox" id={"apr_all_year_" + props.id} onClick={()=> approveAllByYear()} title="Tildar todo el año" /></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {
        thisYear[props.id - 1].subjects.map(subject => {
          return < Subject 
            key={"subject_" + subject.id} 
            name={subject.name} 
            id={subject.id} 
            elect_hs={subject.elect_hs}
            correlatives_course={subject.correlatives_course} 
            correlatives_exam={subject.correlatives_exam} 
            correlatives_course_apro={subject.correlatives_course_apro}
            year={props.id}
            hs={props.hs} /> 
        })
      }
      
    </div>
    </>
  )
}


export default Year;