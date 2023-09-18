import Button from '../{components}/button/button'
import Header from '../{components}/header/header'
import Image from 'next/image'
import React from 'react'

export default function about() {
  return (
    <>
    <Header title= "About us"/>
    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                 <Button text="Explore Now"/>
            </div>
            <div className="about-col">
            <Image
                src='/img/about.png'
                 width={500}
                 height={300} 
                 alt="Picture of the author"/>
                
            </div>
        </div>
        
    </section>
    </>
  )
}
