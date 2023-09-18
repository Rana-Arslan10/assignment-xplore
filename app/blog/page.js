import React from 'react'
import Header from '../{components}/header/header'
import Image from 'next/image'
import Input from '../{components}/input/input'
import Button from '../{components}/button/button'
import Span from '../{components}/span/span'

export default function blog() {
  return (
    <>
      <Header title="Our Post"/>

      <section className="blog-content">
        <div className="row">
            <div className="blog-left">
                <h2>Our Certificate & Online Program</h2>
                <h5>Sep 10, 2023</h5>
                <Image src="/img/post.png" width={500}height={500}
                alt="Picture of the author"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                <br />
                    <div class="comment-box">
                    <h3>Leave a Comment</h3>
                    <form class="comment-form">
                        <Input text="Enter Name" />
                        <Input text="Enter Email" />
                        <textarea rows="5" placeholder="Your Comment"></textarea>
                        <Button text="Post Comment"/>
                    </form>
                </div>
            </div>

            <div class="blog-right">
                <h3>Post Categories</h3>
                
               <Span title="Buisness Analytics" nub="12"/> 
               <Span title="Machine Learning" nub="29"/> 
               <Span title="Computer Sceince" nub="15"/> 
               <Span title="Data Analytics" nub="22"/> 
               <Span title="Full Stack" nub="20"/> 
               
               
            </div>
        </div>
    </section>


    </>
  )
}
