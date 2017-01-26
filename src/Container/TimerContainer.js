import React, {Component} from 'react'
import TimerComponent from '../Component/TimerComponent'
import isValidDate from '../Module/isValidDate'

import getRemainingTime from '../Module/getRemainingTime';
import checkAndRunCallback from '../Module/checkAndRunCallback'

let defaultStateTimeRemaining = {
  total:'',
  days:'',
  hours:'',
  minutes:'',
  seconds:''
}

class TimerContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id?this.props.id:'',
      defaultStartTime:'01/13/2016 00:00:00',
      defaultOffsetGMT:'GMT+0530',
      offsetGMT: this.props.offsetGMT?this.props.offsetGMT:'',
      startTime: this.props.startTime?this.props.startTime:'',
      endTime: this.props.endTime?this.props.endTime:'',
      callback: this.props.callback?this.props.callback:'',
      showTimer: false,
      timeRemaining: defaultStateTimeRemaining
    }
    this.init = this.init.bind(this)
  }
  init(){
    const callback = this.state.callback
    const offsetGMT = this.state.offsetGMT?this.state.offsetGMT: this.state.defaultOffsetGMT
    let endTime = this.state.endTime
    let startTime = this.state.startTime?this.state.startTime: this.state.defaultStartTime

    //validation
    if(!isValidDate(endTime)){
      console.error(`invalid endTime date format, must be MM/DD/YYYY HH:MM:SS for ${this.state.id}`)
      return;
    }
    if(!isValidDate(startTime)){
      console.error(`invalid startTime date format, must be MM/DD/YYYY HH:MM:SS for ${this.state.id}`)
      return;
    }
    //some mutations ~ converting time formats -_-"
    endTime = this.state.endTime + ` ${offsetGMT}`;
    startTime = this.state.startTime + ` ${offsetGMT}`;

    const startTimeMs = new Date(startTime);
    const endTimeMs = new Date(endTime);
    const currentTimeMs = new Date();


    if(endTimeMs > currentTimeMs && currentTimeMs >= startTimeMs){
      //  +++++ start the timer +++++
      const updateTimer = (endTime) => {
        const t = getRemainingTime(endTime)
        //updating state
        const totalTimeRemaining = t.total
        const daysRemaining = ('0' + t.days).slice(-2)
        const hoursRemaining = ('0' + t.hours).slice(-2)
        const minutesRemaining = ('0' + t.minutes).slice(-2);
        const secondsRemaining = ('0' + t.seconds).slice(-2);
        this.setState({
          showTimer: true,
          timeRemaining: {
            total: totalTimeRemaining,
            days: daysRemaining,
            hours: hoursRemaining,
            minutes: minutesRemaining,
            seconds: secondsRemaining
          }
        })
        //terminate timer
        if(!(t.total > 0)){
          console.error(`terminate timer ${this.state.id}`);
          clearInterval(timerInterval);
          this.setState({
            timeRemaining: defaultStateTimeRemaining,
            showTimer: false
          })
          window.location.reload(true)
        }
      }
      updateTimer(endTime)
      const timerInterval = setInterval(function () {
        updateTimer(endTime)
        //console.info('setInterval running. . .')
      }, 1000)
      if(callback){
          checkAndRunCallback(callback)
      }
      //  +++++ / start the timer +++++
    }
    else {
      if(endTimeMs < currentTimeMs){
        //console.error(`endTime is less than currentTime for ${this.state.id}`)
      }
      if(startTimeMs > endTimeMs){
        //console.error(`startTime is greater than endTime for ${this.state.id}`)
      }
      console.error(`endTime has expired for ${this.state.id}, so disabled. . .`);
      return;
    }
  }
  componentDidMount(){
    this.init();
  }
  render(){
    return(<div className='timerWrapper'>{this.state.showTimer && <TimerComponent timerState={this.state}/>}
    </div>)
  }
}

export default TimerContainer
