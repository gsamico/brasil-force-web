import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  constructor ()
  {
      super();
      this.state = {
        accounts : {}
      };
  }

  componentDidMount ()
  {
    const accounts = firebase.database().ref().child('accounts');
    const __this = this;

    accounts.on ( 'value', function ( snap )
    {
      console.log('Dados recebidos', snap.val());
      __this.setState({
        accounts: snap.val()
      });
    });
  }

  render()
  {
    const __this = this;
    let accountsList = Object.keys(this.state.accounts).map ( function ( key )
    {
        return <p key={key}>{__this.state.accounts[key].name}, {__this.state.accounts[key].cnpj}</p>;
    });

    return (
      <div className="App" key="main">
        {accountsList}
      </div>
    );
  }
}

export default App;
