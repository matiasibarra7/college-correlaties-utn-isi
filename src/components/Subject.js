import React from "react";
import "./Subject.css"
import allSubjects from "../data/allSubjects.json";
import controller from "../controllers/controllerSubjects"


function Subject(props) {

  // Recibe las hs de la variable global luego de recibir la suma o resta y pinta o despinta el cuadro de electivas en proyecto final
  function electCalc(hs) {
    console.log(hs)
    if (hs < 0) { props.hs.amount = 0}

    const div22hs = document.querySelector(".apr_22hs_electivas")
  
    if (hs >= 22) { 
      div22hs.classList.add("compliment")
    } else {
      div22hs.classList.remove("compliment")
    }
  }

  function setLineRegular() {
    const checkboxReg = document.querySelector("#reg_check_" + props.id)
    const boxes_reg = document.querySelectorAll(".reg_" + props.id)
    
    const boxes_apro = document.querySelectorAll(".apr_" + props.id)
    const checkboxApr = document.querySelector("#apr_check_" + props.id)
    
    const lineParent = checkboxReg.parentNode.parentNode
    
    if (checkboxReg.checked) {
      controller.regularOn(boxes_reg, checkboxReg, lineParent)

    } else {
      controller.regularOff(boxes_reg, checkboxReg, lineParent)
        
      controller.approveOff(boxes_apro, checkboxApr, lineParent)

      document.querySelector("#reg_all_year_" + props.year).checked = false

      // probando resta de horas
      if (props.elect_hs) {
        props.hs.amount = props.hs.amount - props.elect_hs
        electCalc(props.hs.amount)
      }
      // probando resta de horas
    }
  }

  function setLineApprove() {
    const checkboxReg = document.querySelector("#reg_check_" + props.id)
    const boxes_reg = document.querySelectorAll(".reg_" + props.id)
    
    const checkboxApr = document.querySelector("#apr_check_" + props.id)
    const boxes_apro = document.querySelectorAll(".apr_" + props.id)

    const lineParent = checkboxReg.parentNode.parentNode
    
    if (checkboxApr.checked) {

      controller.regularOn(boxes_reg, checkboxReg, lineParent)

      controller.approveOn(boxes_apro, checkboxApr, lineParent)

      // probando suma de horas
      if (props.elect_hs) {
        props.hs.amount += props.elect_hs
        electCalc(props.hs.amount)
      }
      // probando suma de horas
      
    } else {
      controller.approveOff(boxes_apro, checkboxApr, lineParent)

      document.querySelector("#apr_all_year_" + props.year).checked = false

    // probando resta de horas
    if (props.elect_hs) {
      props.hs.amount = props.hs.amount - props.elect_hs
      electCalc(props.hs.amount)
    }
    // probando resta de horas
    }


  }

  return (
    <>
      {
        <div className='subject-line'>
          <div>{props.id}</div>
          <div>{props.name}</div>
          <div><input type="checkbox" name="regular" id={"reg_check_" + props.id} data-algo={props.id} className={"reg_check_year_" + props.year} onChange={()=> setLineRegular()} /></div>
          <div><input type="checkbox" name="approve" id={"apr_check_" + props.id} data-algo={props.id} className={"apr_check_year_" + props.year} onChange={()=> setLineApprove()} /></div>
          <div>{props.correlatives_course.length?
           <>
            {
              props.correlatives_course.map((el, i) => {
                return <span key={`req_reg_span_${i}`} className={`requirement ${"reg_" + el}`} title={el ==="e8"? allSubjects[42] : allSubjects[el - 1]}>{el === 43? "e8" : el}</span>
              })
            }
           </> : 
           "No tiene"}</div>
           <div>{props.correlatives_course_apro.length?
           <>
            {
              props.correlatives_course_apro.map((el, i) => {
                /* console.log(el) */
                return <span key={`req_apro_span_${i}`} className={`requirement ${"apr_" + el}`} title={allSubjects[el - 1]}>{el}</span>
              })
            }
           </> : 
           "No tiene"}</div>
           <div>{props.correlatives_exam.length?
           <>
            {
              props.correlatives_exam.map((el, i) => {
                return <span key={`req_corr_span_${i}`} className={`requirement ${"apr_" + el}`} title={el ==="e8"? allSubjects[42] : allSubjects[el - 1]}>{el === 43? "e8" : el}</span>
              })  
            }
           </> : 
           "No tiene"}</div>
        </div>
      }
    </>
  )
}


export default Subject;