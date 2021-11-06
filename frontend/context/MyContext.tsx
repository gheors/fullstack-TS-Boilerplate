import React from "react";
import { License, MapboxStyle } from "../interface/global-interfaces";

export const MyContext = React.createContext({
  licenses: [] as License[],
  setLicenses: (value: License[]) => { },
});
