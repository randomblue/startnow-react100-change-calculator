import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      amountReceived:'',
      amountDue:'',
      changeDue:'',
      twenties:'',
      tens:'',
      fives:'',
      ones:'',
      quarters:'',
      dimes:'',
      nickels:'',
      pennies:'',
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.clickToCalculate = this.clickToCalculate.bind(this)
    
  }

clickToCalculate(i){

}

changeHandler(e) {
  this.setState({
    [e.target.name]: e.target.value
  }, () => console.log(this.state))

}

//   clickToCalculate(e) {
//     const amountDue = document.getElementById('amount-due').value
//     const amountReceived = document.getElementById('amount-received').value
//     const cashBack = parseFloat(amountReceived) - parseFloat(amountDue)
//     const ones = Math.floor(cashBack);
//         cashBack = cashBack%1;
//     const quarters = Math.floor(cashBack/0.25);
//         cashBack = cashBack%0.25;
//     const dimes = Math.floor(cashBack/0.1);
//         cashBack = cashBack%0.1;
//     const nickles = Math.floor(cashBack/0.05);
//         cashBack = (cashBack%0.05);
//     const pennies = Math.ceil(Math.round(cashBack/0.01));
//     console.log({cashBack, pennies, nickles})

//     document.getElementById('ones-output').innerHTML = ones;
//     document.getElementById('quarters-output').innerHTML = quarters;
//     document.getElementById('dimes-output').innerHTML = dimes;
//     document.getElementById('nickels-output').innerHTML = nickles;
//     document.getElementById('pennies-output').innerHTML = pennies;
// }


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
            <label name="changeDue" onChange={this.changeHandler}>The total change due is $$</label>
            </div>
            </div>
            </div>


            <div className="row">
              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>TWENTIES</label>
                <p id='twenties-output' name='twenties'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>TENS</label>
                <p id='tens-output' name='tens'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>FIVES</label>
                <p id='fives-output' name='fives'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>ONES</label>
                <p id='ones-output' name='ones'>0</p>
              </div>
              </div>
              </div>

            <div className="row">
            <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>QUARTERS</label>
                <p id='quarters-output' name='quarters'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>DIMES</label>
                <p id='dimes-output' name='dimes'>0</p>
              </div>
              </div>

              <div className="col">
              <div className="card text-center p-3 mb-2">
                <label>NICKELS</label>
                <p id='nickels-output' name='nickels'>0</p>
              </div>
              </div>

              <div className="col">  
              <div className="card text-center p-3 mb-2">
                <label>PENNIES</label>
                <p id='pennies-output' name='pennies'>0</p>
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
