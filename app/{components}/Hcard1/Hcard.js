import React from 'react'
import Image from 'next/image'

export default function Hcard(props) {
  return (
    <div class="campus-col">
        <Image src={props.source} width={500} height={250}
        alt="Picture of the author"/>
         <div class="layer">
            <h3>{props.title}</h3>
         </div>
    </div>
  )
}
