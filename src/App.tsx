import React from 'react'
import Header from './Bring/Header/Header'
import "./App.css"
import NavBar from './Bring/Navbar/NavBar'
import AddCategory from './Bring/Category/AddCategory'
import Categories from './Bring/Category/Categories'
// import Button from './Components/Button'
// import Greet from './Components/Greet'
// import Counter from './Components/state/Counter'
// import LogedIn from './Components/state/LogedIn'

const App = () => {
  return (
    <div className='main__app'>
     {/* <Greet name="Zahid" messages={30} logedIn={true} />
    <Button styles={{border:"1px solid red"}} handleclick={()=>{console.log("ButtonClicked");
    }}/>

    <LogedIn/>
    <hr />
    <Counter/> */}

  {/* <Header/> */}
  <NavBar/>
  {/* <AddCategory/> */}
  <Categories/>
    </div>
  )
}

export default App
