import React from 'react'

export default ({ type, value, to, ...props }) => {
  if (type === 'button') {
    return <button {...props}>{value}</button>
  } else if (type === 'submit') {
    return <input {...props} type="submit" value={value} />
  } else if (type === 'anchor') {
    return <a {...props} href={to}>{value}</a>
  }
  return
}