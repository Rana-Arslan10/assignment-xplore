import React from 'react'

export default function Card2(props) {
  return (
    <div class="facilities-col">
        <img src={props.source}alt="" />
        <h3>{props.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
    </div>
  )
}
