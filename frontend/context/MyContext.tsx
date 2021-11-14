import React from "react";
import { User } from "../interface/global-interfaces";

export const MyContext = React.createContext({
  user: { username: '', passowrd: '', _id: '' } as User,
  setUser: (value: User) => { },
});
