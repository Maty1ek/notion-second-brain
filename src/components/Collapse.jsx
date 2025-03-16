import React from 'react'

const Collapse = ({title, answer}) => {
  return (
      <div className="collapse bg-base-100 border-base-300 border">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">{title}</div>
          <div className="collapse-content text-sm">
              {answer}
          </div>
      </div>
  )
}

export default Collapse