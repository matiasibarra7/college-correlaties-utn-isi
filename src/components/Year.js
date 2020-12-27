import React from "react";
import Subject from "./Subject"
import data from "../data.json";


function Year(props) {

  function approveAllByYear() {
    const value = document.querySelector("#apr_all_year_" + props.id).checked

    if (value) {
      document.querySelector("#reg_all_year_" + props.id).checked = true
    }

    let checks = document.querySelectorAll(".apr_check_year_" + props.id)
    checks.forEach(el=> {
      el.checked = value;
      const lineParent = el.parentNode.parentNode
      if (value) {
        lineParent.childNodes[2].childNodes[0].checked = true
        lineParent.classList.add("reg", "apr")
      } else {
        lineParent.classList.remove("apr")
      }
    })
  }

  function regularizateAllByYear() {
    const value = document.querySelector("#reg_all_year_" + props.id).checked

    if (!value) {
      document.querySelector("#apr_all_year_" + props.id).checked = false
    }

    let checks = document.querySelectorAll(".reg_check_year_" + props.id)
    checks.forEach(el=> {
      el.checked = value;
      const lineParent = el.parentNode.parentNode
      if (value) {
        lineParent.classList.add("reg")
      } else {
        lineParent.childNodes[3].childNodes[0].checked = false
        lineParent.classList.remove("reg", "apr")
      }
    })
  }

  return (
    <>
    {props.id > 1? <br/> : ""}
    <div style={{ maxWidth: "1280px", margin: "0 auto"}}>

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
        data[props.id - 1].subjects.map(subject => {
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