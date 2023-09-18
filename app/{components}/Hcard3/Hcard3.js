import React from 'react'
import Hstart from '../Hstar/Hstart'
export default function Hcard3(props) {
  return (
    <div class="testimonials-col">
        <img src={props.source} alt="oo.."/>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mo dimaioresinostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaquedeserunt. In quia repellat maxime.</p>
    <h3>{props.title}</h3>
        
        <Hstart /><Hstart /><Hstart /><Hstart /><Hstart />
       </div>
    </div>
  )
}
