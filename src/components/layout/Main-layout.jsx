import React from "react";
import { Header } from "../header/header";

const Mainlayout = ({children}) => {
    return(
        <>
        <Header />
        <main>{children}</main>
        </>
    );

};

export default Mainlayout;