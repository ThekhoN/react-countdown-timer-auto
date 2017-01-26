import React, { Component } from 'react';
import './App.css';
import TimerContainer from './Container/TimerContainer'

//callbacks to run when the timer starts
function timer01Callback(){
  console.log(`Timer01 is running. . .`)
}
function timer02Callback(){
  console.log(`Timer02 is running. . .`)
}
function timer03Callback(){
  console.log(`Timer03 is running. . .`)
}

//date format ~ MM/DD/YYY 24 hrs
//offsetGMT ~ 'GMT+0530'
class App extends Component {
  render() {
    return (<div>
      <TimerContainer
          startTime=''
          endTime='01/29/2017 18:49:00'
          callback={timer01Callback}
          offsetGMT='GMT+0130'
          id='Timer01'/>
        <br/>
        <TimerContainer
            startTime='01/26/2017 02:43:00'
            endTime='01/26/2017 15:30:00'
            callback={timer02Callback}
            offsetGMT='GMT+0230'
            id='Timer02'/>
            <br/>
            <TimerContainer
                startTime='01/26/2017 15:02:00'
                endTime='02/24/2017 18:29:00'
                callback={timer03Callback}
                offsetGMT='GMT+0730'
                id='Timer03'/>
                </div>
    );
  }
}

export default App;
