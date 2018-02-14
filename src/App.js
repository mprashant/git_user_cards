import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './Card';
import CardList from './CardList';
import Form from './Form';


let data =[{id:1,login:"mojombo", avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4"},
{id:2,login:"defunkt", avatar_url:"https://avatars0.githubusercontent.com/u/2?v=4"}];

class App extends Component {
  state = {
    cards:[]
  };  

  addNewCard = (cardInfo) =>{
      this.setState(prevState =>({
        cards: prevState.cards.concat(0,cardInfo)
      }))
  };

  clearAllCards = () =>{
    this.setState(prevState =>({
      cards :[]
    }))

  };

 
  render() {
    return (
      <div className="App">
        <Form  addNewCardFunc = {this.addNewCard} clearAllCardsFunc={this.clearAllCards}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;