import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
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
                  <input id='amount-due' type='numbers' placeholder="Amount Due" />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon2">$</span>
                  </div>
                  <input id='amount-received' type='numbers' placeholder="Amount Received" />
                </div>


                <button className="btn btn-primary" id='calculate-change' onclick="clickToCalculate()">Calculate</button>

              </div>
            </div>
          </div>


          <div className="col">
            <div className="card p-2">
            
            <div className="row">
            <div className="col">
            <div className="card mb-2 text-center">
            <label>The total change due is $$</label>
            </div>
            </div>
            </div>


            <div className="row">
              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>TWENTIES</label>
                <p id='twenties-output'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>TENS</label>
                <p id='tens-output'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>FIVES</label>
                <p id='fives-output'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>ONES</label>
                <p id='ones-output'>0</p>
              </div>
              </div>
              </div>

            <div className="row">
            <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>QUARTERS</label>
                <p id='quarters-output'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>DIMES</label>
                <p id='dimes-output'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>NICKELS</label>
                <p id='nickels-output'>0</p>
              </div>
              </div>

              <div className="col">  
              <div className="card text-center p-3 mb-2">
                <label>PENNIES</label>
                <p id='pennies-output'>0</p>
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
