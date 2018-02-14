import Card from './Card';
import React, { Component } from 'react';


const CardList = (props) =>
{

    return(
        <div>
          {props.cards.map(card => <Card  key={card.id} {...card} />)}  
        </div>
    );
}

export default CardList;