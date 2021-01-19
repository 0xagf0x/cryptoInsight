import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Map from './components/Map'
var NumberFormat = require('react-number-format').default;


const values = document.querySelectorAll('.value');
let sum = 0;




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    // axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ADA,ETH,BNT,LOOM,DASH,XTZ&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos.ADA.USD);
        this.setState({ cryptos: cryptos });
      })
    
    for (var i = 0; i < values.length; i++) {
      console.log('test')
      sum += parseInt(values[i]);
    }
    //console.log(sum)
  }

  render() {
    return (
      <div className="App">
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>

            
            <NumberFormat 
            className="value"
            value={this.state.cryptos[key].USD} 
            displayType={'text'} 
            decimalPrecision={2} 
            thousandSeparator={true} 
            prefix={'$'} 
            />
          </div>
        ))}
        <div id="crypto-container">
          <span className="left">Total</span>


          <span className="right">{this.sums}</span>
        </div>
        <Map />
      </div>
    )
  }
}

export default App;
