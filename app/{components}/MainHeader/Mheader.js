import React from 'react'
import Nav from '../navbar/nav'
import Link from 'next/link'

export default function Mheader() {
  return (
   <>
   <section class="header">
        <Nav/>

        <div class="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br /> esse blanditiis in quae perspiciatis quo.
            </p>
            <Link href="/contact" class="hero_btn">Visit Us To Know More</Link>
        </div>
    </section>

   </> 
  )
}
