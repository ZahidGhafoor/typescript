import React, { useEffect, useState } from 'react'


type AuthUser = {
  name: string
  email: string
}


const LogedIn = () => {


  const [login, setLogin] = useState(false)
  const [user, setUser] = useState<null | AuthUser>(null)

  const handleLogout = () => { setLogin(false)
  setUser(null)
  }


  const handleLogin = () => {

    setUser({
      name: "zahid",
      email: "zahid@gmail.com"
    })

  }


  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h1>{login == true ? "loged in sucessfully" : " welcome back pleade login"}</h1>

      <div className="user">
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>


      </div>
    </>

  )
}

export default LogedIn