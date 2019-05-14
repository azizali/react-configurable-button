import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ type, value, to, ...props }) {
  if (type === 'button') {
    return <button {...props}>{value}</button>
  } else if (type === 'submit') {
    return <input {...props} type="submit" value={value} />
  } else if (type === 'anchor') {
    return <a {...props} href={to}>{value}</a>
  } else {
    return null
  }
}

Button.propTypes = ({
  type: PropTypes.oneOf(['button', 'submit', 'anchor']),
  value: PropTypes.string.isRequired,
  to: (props, propName, componentName) => {
    if (props.type === 'anchor' && !props[propName]) {
      return new Error(`Component ${componentName}: ${propName} is required when prop 'type' has value of 'anchor'`)
    }
  }
})

Button.defaultProps = {
  type: 'button',
  value: 'Default Text'
}
