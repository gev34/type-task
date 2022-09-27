import React from "react";
export interface DataProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string
  }
}
interface Props {
  setData: (params: any) => void;
}

export const getData = (setData: React.Dispatch<React.SetStateAction<never[]>>) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => setData(res));
};
