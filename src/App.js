import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './Card';
import CardList from './CardList';
import Form from './Form';
import Button from './Button';


let data =[{login:"mojombo", avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4"},
{login:"defunkt", avatar_url:"https://avatars0.githubusercontent.com/u/2?v=4"}];


class App extends Component {
 
  
  state = {
    cards:[]
  };  

  addNewCard = (cardInfo) =>{
      this.setState(prevState =>({
        cards: prevState.cards.concat(cardInfo)
      }))
  };

  addAddAll = (allcards) =>
  {
    console.log(allcards);
    this.setState({cards : allcards});
  }
  render() {
    return (
      <div className="App">
        <Form  onSubmit = {this.addNewCard}/>
        <CardList cards={this.state.cards} />
        {/* <Button /> */}
      </div>
    );
  }
}

export default App;
