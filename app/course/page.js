import React from 'react'
import Header from '../{components}/header/header'
import Card from '../{components}/card/card'
import Card2 from '../{components}/imgCard/card2'

export default function course() {
  return (
    <>
      <Header title="Our courses"/>
      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <Card title="Undergraduate Programs"/>
            <Card title="Graduate Programs" />
            <Card title="Adult Learning & Degree Completion"/>
        </div>
    </section>

    <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <Card2 title="Web Development" source="/img/course1.png" />
            <Card2 title="Artificial Intelligence" source="/img/course2.png"/>
            <Card2 title="Data Science" source="/img/course3.png"/>
        </div>
    </section>

    </>
  )
}
