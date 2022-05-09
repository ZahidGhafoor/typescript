import React, { useRef } from 'react'

const Box = () => {

    const ref = useRef<HTMLInputElement>(null)
    // console.log(ref.current.focus());
    
  return (
    <div>Theme Context</div>
  )
}

export default Box