// Aca los requires

const subjects = {
  regularOn: (boxes_reg, checkboxReg, lineParent) => {
    if (boxes_reg) {
      boxes_reg.forEach(el => {
        el.classList.add("compliment")
      })
    };
    lineParent.classList.add("reg");
    // Si es activado por aprobado, setea el regular
    checkboxReg.checked = true
  },

  regularOff: (boxes_reg, checkboxReg, lineParent) => {
    lineParent.classList.remove("reg")

    if (boxes_reg) {
      boxes_reg.forEach(el => {
        el.classList.remove("compliment")
      }
    )}
  },

  approveOn: (boxes_apro, checkboxApr, lineParent) => {
    if (boxes_apro) {
      boxes_apro.forEach(el => {
        el.classList.add("compliment")
      })
    }
    lineParent.classList.add("apr")
  },
  
  approveOff: (boxes_apro, checkboxApr, lineParent) => {
    checkboxApr.checked = false
    lineParent.classList.remove("apr")

    if (boxes_apro) {
      boxes_apro.forEach(el => {
        el.classList.remove("compliment")
      })
    }
    // Si se activa por quitar el regular, resetea el aprobado
    checkboxApr.checked = false
  }
  
};

module.exports = subjects;