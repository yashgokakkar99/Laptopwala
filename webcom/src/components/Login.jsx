import React from "react";
import { useState } from "react";

function Login() {
  const [data,setData] = useState({
    username:'',
    password:''
  })
  const loginUser = (e) => {
    e.preventDefault();
  };
  return (
    <div className="border-2 border-red-400 rounded-lg flex justify-center w-80 item-center m-auto p-4">
      <form method="POST" onSubmit={loginUser}>
        <div>
          <div className="flex justify-center font-bold text-red-700">User Login</div>
          <div className="text-red-700 font-bold mt-4">
            <label for="username">Username</label>
          </div>
          <input
            className="border-2"
            type="text"
            placeholder="alex@123"
            name="username"
            id="username"
            value={data.username}
            onChange={(e)=>setData({...data,username:e.target.value})}
          ></input>
        </div>
        <div>
          <div className="text-red-700 font-bold">
            <label for="password">Password</label>
          </div>
          <input
            className="border-2"
            type="password"
            placeholder="XXXXXXXX"
            name="password"
            id="password"
            value={data.password}
            onChange={(e)=>setData({...data,password:e.target.value})}
          ></input>
        </div>
        <div>
          <input className="text-red-100 w-[184px] bg-red-400 flex justify-center font-bold  mt-2 rounded-lg hover:bg-red-200 hover:text-red-700" type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}

export default Login;