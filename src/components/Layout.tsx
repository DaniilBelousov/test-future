import React from "react";
import "./Layout.css";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
};

const Layout = (props: Props): JSX.Element => {
  return (
    <>
      <Header  />
      <div className="app-layout">
        {props.children}
      </div>
    </>
  );
}

export default Layout;