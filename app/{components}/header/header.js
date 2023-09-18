import React from 'react'
import Nav from '../navbar/nav'

export default function Header(props) {
  return (
    <>
    <section className="Sub-header">
    <Nav/>
    <h1>{props.title}</h1>
    

    
    </section>
    </>
  )
}
