import React, { Component } from 'react';

const Card = (props) =>{

  return (
      <div>
        <img  width="500" src={props.avatar_url}/>
        <div>{props.login}</div>
        </div>    
  );
};
export default Card;