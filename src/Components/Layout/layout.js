import React from "react";
import Aux from "../../hoc/Auxy";
import classes from './layout.module.css'

const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar,SideBar,Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>)
};
export default layout;
