import React from 'react'

export default ({ dbInfo, template }) => {
  if (dbInfo === true) {
    return (
      <div>
        <h3 key="submitSuccess">{template.notify.success}</h3>
      </div>
    )
  } else if (dbInfo === 'error') {
    return (
      <div>
        <h3 key="submitInvalid">{template.notify.error}</h3>
      </div>
    )
  }

  return null
}
