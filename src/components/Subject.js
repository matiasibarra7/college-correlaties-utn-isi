import React from "react";
import "./Subject.css"
import allSubjects from "../data/allSubjects.json";


function Subject(props) {
  function setLineRegular() {
    const checkboxReg = document.querySelector("#reg_check_" + props.id)
    const checkboxApr = document.querySelector("#apr_check_" + props.id)

    const lineParent = checkboxReg.parentNode.parentNode

    if (checkboxReg.checked) {
      lineParent.classList.add("reg")
    }
    else {
      checkboxApr.checked = false
      lineParent.classList.remove("reg", "apr")
      document.querySelector("#reg_all_year_" + props.year).checked = false
    }
  }

  function setLineApprove() {
    const checkboxReg = document.querySelector("#reg_check_" + props.id)
    const checkboxApr = document.querySelector("#apr_check_" + props.id)

    const lineParent = checkboxReg.parentNode.parentNode

    if (checkboxApr.checked) {
      lineParent.classList.add("reg", "apr")
      checkboxReg.checked = true
    }
    else {
      checkboxApr.checked = false
      lineParent.classList.remove("apr")
      document.querySelector("#apr_all_year_" + props.year).checked = false
    }
  }

  return (
    <>
      {
        <div className='subject-line'>
          <div>{props.id}</div>
          <div>{props.name}</div>
          <div><input type="checkbox" name="regular" id={"reg_check_" + props.id} className={"reg_check_year_" + props.year} onChange={()=> setLineRegular()} /></div>
          <div><input type="checkbox" name="approve" id={"apr_check_" + props.id} className={"apr_check_year_" + props.year} onChange={()=> setLineApprove()} /></div>
          <div>{props.correlatives_course.length?
           <>
            {
              props.correlatives_course.map((el, i) => {
                return <span key={`req_reg_span_${i}`} className="requirement" title={allSubjects[el - 1]}>{el}</span>
              })
            }
           </> : 
           "No tiene"}</div>
           <div>{props.correlatives_course_apro.length?
           <>
            {
              props.correlatives_course_apro.map((el, i) => {
                return <span key={`req_apro_span_${i}`} className="requirement" title={allSubjects[el - 1]}>{el}</span>
              })
            }
           </> : 
           "No tiene"}</div>
           <div>{props.correlatives_exam.length?
           <>
            {
              props.correlatives_exam.map((el, i) => {
                return <span key={`req_corr_span_${i}`} className="requirement" title={allSubjects[el - 1]}>{el}</span>
              })
            }
           </> : 
           "No tiene"}</div>
           {/* {console.log(`${props.id} ${props.name}`)}
           {console.log(`Del array ${allSubjects[props.id - 1]}`)} */}
        </div>
      }
    </>
  )
}


export default Subject;