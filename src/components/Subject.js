import React from "react";
import "./Subject.css"
import allSubjects from "../data/allSubjects.json";
import controller from "../controllers/controllerSubjects"


function Subject(props) {

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
      
    } else {
      controller.approveOff(boxes_apro, checkboxApr, lineParent)

      document.querySelector("#apr_all_year_" + props.year).checked = false
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