import React from 'react'


// We have to define what type of prop is coming

type GreetProps = {
    name: string
    messages:number
    logedIn:boolean
}




const Greet = (props: GreetProps) => {
    return (
        
        <>
        {
            props.logedIn?
            <>
            <h1>Hello {props.name} how are you i hope you are good in health</h1>
            <h3>you have {props.messages} unread messages</h3> </>:
            <h1>Welcome Guest</h1>
        }   
        
        </>

    )
}

export default Greet