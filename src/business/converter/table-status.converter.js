'use strict'
const parseTableStatusResponse = (statusData) => {
  return {
    code: statusData.ID_ESTADO,
    name: statusData.DESCRIPCION
  }
}

module.exports = { parseTableStatusResponse }
