import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { Button , Grid , Row , Col }  from 'react-bootstrap';

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
        return (
          <Col xs={6} md={4}  key={'row_'+key}>
            <div key={key} className="panel panel-blue padding-20">
              <h3 className="text-white  no-margin space10">{__this.state.accounts[key].name}</h3>
              <span className="text-light">{__this.state.accounts[key].cnpj}</span>
            </div>
          </Col>
        );
    });

    return (
      <div className="App" key="main">
        <Grid className="margin-top">
          <Row className="space20"/>
          <Row className="show-grid">
            {accountsList}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
