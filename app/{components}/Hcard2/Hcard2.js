import React from 'react'
import Image from 'next/image'

export default function Hcard2(props) {
  return (
    <div class="facilities-col">
        <Image src={props.source} width={500} height={250}
        alt="Picture of the author"/>
        <h3>{props.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
    </div>
  )
}
