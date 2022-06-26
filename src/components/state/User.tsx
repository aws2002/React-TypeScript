import { useState } from "react";
type AuthUser={
    name:string,
    email:string
}
export default function User() {
    const [user,setUser]=useState<AuthUser>({} as AuthUser) //? const [user,setUser]=useState<AuthUser|null>(null)
    const handleLogin=()=>{
        setUser({
            name:"Osama",
            email:"otaku3game@gamil.com"
        })
    }
    // const handleLogout=()=>{
    //     setUser(null)
    // }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>user name is {user.name}</div>
      <div>user email is {user.email}</div>
    </div>
  );
}
