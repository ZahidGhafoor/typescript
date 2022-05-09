// Event props


import React from 'react'

type buttonprops= {
    handleclick: ()=> void
    // style propss
    styles:React.CSSProperties
}


const Button = (props: buttonprops) => {
  return (
      <>
  <button onClick={props.handleclick}>Button</button>
  <div style={props.styles}>heloo</div>
  </>
  )
}

export default Button