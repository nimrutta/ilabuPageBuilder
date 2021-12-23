import React from "react";

export default function Text() {
  return <div>
      <textarea id="w3review" name="w3review" rows="7" cols="60" autoFocus 
      style={{
          padding: '0.3rem 0 0.3rem 0.6rem', 
          border: '1px solid grey',
        //   width: '100%',
        //   fontSize: '28px',
          textAlign: 'left'
      }}/>
  </div>;
}
