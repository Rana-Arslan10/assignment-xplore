import "./globals.css"
import React from 'react'
import Header from "./{components}/header/header"
import Card from "./{components}/card/card"
import Hcard from "./{components}/Hcard1/Hcard"
import Hcard2 from "./{components}/Hcard2/Hcard2"
import Hcard3 from "./{components}/Hcard3/Hcard3"
import Mheader from "./{components}/MainHeader/Mheader"
export default function page() {
  return (
    <>
     
     <Mheader />
     
    
    <section class="course">
        <div class="PageBlock">
            <div class="verticalLine"></div>
            <div class="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <Card title="Undergraduate Programs"/>
            <Card title="Graduate Programs" />
            <Card title="Adult Learning & Degree Completion"/>
        </div>
    </section>


    <section class="campus">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div class="row">
          <Hcard title="Faisalabad" source="/img/Campus1.png"/>
          <Hcard title="Lahore" source="/img/Campus2.png"/>
          <Hcard title="Islamabad" source="/img/Campus3.png"/>
        </div>
    </section>
       
     
    <section class="facilities">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div class="row">
         <Hcard2 title="Best Libary" source="/img/libary.png"/>
         <Hcard2 title="Athletics" source="/img/playground.png"/>
         <Hcard2 title="Tasty and Healthy Food" source="/img/food.png"/>
        </div>
    </section>
     


    <section class="testimonials">
        <div class="PageBlock">
            <div class="verticalLine"></div>
            <div class="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">

             <Hcard3 source="/img/user.png" title="Student Name" />
             <Hcard3 source="/img/user.png" title="Student Name" />
        </div>
    </section>



    <section class="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" class="hero_btn">CONTACT US</a>
    </section>


    </>
  )
}
