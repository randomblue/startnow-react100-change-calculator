import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      amountReceived:0,
      amountDue:0,
      totalChange:0,
      twenties:0,
      tens:0,
      fives:0,
      ones:0,
      quarters:0,
      dimes:0,
      nickels:0,
      pennies:0,
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.clickToCalculate = this.clickToCalculate.bind(this)
    
    
  }

clickToCalculate(i){
  // const amountDue = parseFloat(document.getElementById('amount-due').value);
  // const amountReceived = parseFloat(document.getElementById('amount-received').value);
  var totalChange =  Math.round((this.state.amountReceived - this.state.amountDue) * 100) / 100
  var cashBack = (this.state.amountReceived - this.state.amountDue) * 100.0;
  const twenties =  parseInt(cashBack/2000);                    cashBack %= 2000;
  const tens =      parseInt(cashBack/1000);                    cashBack %= 1000;
  const fives =     parseInt(cashBack/500);                     cashBack %= 500;
  const ones =      parseInt(cashBack/100);                     cashBack %= 100;
  const quarters =  parseInt(cashBack/25);                      cashBack %= 25;
  const dimes =     parseInt(cashBack/10);                      cashBack %= 10;
  const nickels  =  parseInt(cashBack/5);                       cashBack %= 5;
  const pennies =   Math.round(cashBack);                       

  // console.log(twenties);
  // console.log(ones);
  // console.log(quarters);
  // console.log(dimes);
  // console.log('pennies' + pennies);
  // console.log(cashBack)
  
  this.setState({
    totalChange,
    twenties,
    tens,
    fives,
    ones,
    quarters,
    dimes,
    nickels,
    pennies
  }, () => console.log(this.state) 
)
}

changeHandler(e) {
  this.setState({
    [e.target.name]: e.target.value
  }, () => console.log(this.state))

}

  render() {
    return (
      <div className="container">
        <h1 className="text-white">Change Calculator</h1>
        <hr />
        <div className="row">
          <div className="col-md-4" id="enterInfo">
            <div className="card">
              <p className="card-header">
                Enter Information
                </p>

              <div className="card-body">
              
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">$</span>
                  </div>
                  <input id='amount-due' type='number' name='amountDue' onChange={this.changeHandler} placeholder="Amount Due" />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon2">$</span>
                  </div>
                  <input id='amount-received' type='number' name='amountReceived' onChange={this.changeHandler} placeholder="Amount Received" />
                </div>


                <button className="btn btn-success btn-primary" id='calculate-change' onClick={this.clickToCalculate}>Calculate!!</button>

              </div>
            </div>
          </div>


          <div className="col">
            <div className="card p-2">
            
            <div className="row">
            <div className="col">
            <div className="card mb-2 text-center" >
            <div className='alert alert-success' name="changeDue">The total change due is ${this.state.totalChange}</div>
            </div>
            </div>
            </div>


            <div className="row">
              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>TWENTIES</label>
                <p className='lead' id='twenties-output' name='twenties' >{this.state.twenties}</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>TENS</label>
                <p  className='lead' id='tens-output' name='tens'>{this.state.tens}</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>FIVES</label>
                <p className='lead' id='fives-output' name='fives'>{this.state.fives}</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>ONES</label>
                <p className='lead' id='ones-output' name='ones'>{this.state.ones}</p>
              </div>
              </div>
              </div>

            <div className="row">
            <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>QUARTERS</label>
                <p className='lead' id='quarters-output' name='quarters'>{this.state.quarters}</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>DIMES</label>
                <p className='lead' id='dimes-output' name='dimes'>{this.state.dimes}</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>NICKELS</label>
                <p className='lead' id='nickels-output' name='nickels'>{this.state.nickels}</p>
              </div>
              </div>

              <div className="col">  
              <div className="card text-center p-3 mb-2">
                <label>PENNIES</label>
                <p className='lead' id='pennies-output' name='pennies'>{this.state.pennies}</p>
              </div>
              </div>
            </div>

            </div>
          </div>
        </div>
        <div>

          
        </div>
      </div>
    )
  }
}
export default App;
