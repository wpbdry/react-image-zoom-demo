import React from 'react'

export interface DemoTitleProps{
  name: string
  url: string
  hint: string
}

export default function DemoTitle(props: DemoTitleProps) {
  return <div>
    <h2>
      <a href={props.url} target='_blank'>
        {props.name}
      </a>
    </h2>
    <p>
      {props.hint}
    </p>
  </div>
}
