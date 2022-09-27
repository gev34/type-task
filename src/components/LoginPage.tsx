import React, { useEffect, useState } from "react";
import { Forgot } from "./Forgot";
import { Other } from "./Other";
import { DataProps, getData } from "./GetData";

export const LoginPage = () => {
  const [data, setData] = useState([]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);
  };
  console.log(data)
  useEffect(()=>{
    getData(setData);
  },[])
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <input type="text" />
        <input type="password" />
        <input type="submit" value="OK" />
      </form>
      <Forgot handleSubmit={handleSubmit} text="asdf" />
      <Other />
      {data.map((user: DataProps, index: number)=>(
        <div key={user.id + index}>
          {user.username}
        </div>
      ))}
    </div>
  );
};
