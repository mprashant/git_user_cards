import React, { Component } from 'react';

class Button extends React.Component{

    state = {counter:0};

    
handleOnClick = () =>{
        this.setState((prevState) =>({
            counter : prevState.counter+1 
        }));
};
    render()
    {
        return(
                <button onClick={this.handleOnClick}>
                    {this.state.counter}
                </button>
        );
    }
}

export default Button;