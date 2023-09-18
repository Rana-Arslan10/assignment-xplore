import React from 'react'

export default function input(props) {
  return (
    <input type={props.type} placeholder={props.text} required />
  )
}
