import React from "react";

{
  /* tradional react component which renders 
 a component that is wrapped around this component
which is reffered to props.children (the child of this
component)*/
}
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "solid black 1px",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
