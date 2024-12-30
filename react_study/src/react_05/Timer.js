import React, { Component } from 'react'

export default class Timer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count : 0,
    //         click : "off"
    //     }
    //     this.timer = null;
    // }
    
    // start = () => {
    //     console.log("시작")
    //     if(this.state.click === "off") {
    //         this.setState({click : "on"})
    //         this.timer = setInterval(()=>{
    //             this.setState({count : this.state.count+1}) 
    //         }, 1000)
    //     }
    // }

    // stop = () => {
    //     console.log("정지")
    //     this.setState({click : "off"})
    //     clearInterval(this.timer)
    // }
    // reset = () => {
    //     console.log("초기화")
    //     this.stop();
    //     this.setState({count : 0})
    // }
    



    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count : 0, // 타이머 값
    //         running : false // 타이머 실행여부
    //     }
    //     this.interval = null; // setinterval 지정할 변수
    // }

    // start = () => {
    //     if(!this.state.running) {
    //         this.setState({running : true});
    //         this.interval = setInterval(()=>{
    //             this.setState((Pstate)=>({count : Pstate.count + 1}))
    //         }, 1000)
    //     }
    // }


    // stop = () => {
    //     this.setState({running : false});
    //     clearInterval(this.interval);
    // }

    // reset = () => {
    //     this.setState({count : 0, running : false})
    //     clearInterval(this.interval)
    // }

    // componentDidUpdate() {
    //     console.log(this.interval)
    //     console.log(this.state.running, this.state.count);
    // }

    // 컴포넌트가 종료될 때 interal 정리,  메모리 누수를 방지
    // componentWillUnmount() {
    //     console.log("종료")
    //     clearInterval(this.interval)
    // }


    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    start = () => {
        if(!this.time) {
            this.time = setInterval(() => {
                this.setState((time) => ({count : time.count + 1}))
            }, 1000);
        }
    }

    stop = () => {
        clearInterval(this.time);
        this.time = null;
    }

    reset = () => {
        clearInterval(this.time);
        this.setState({count : 0})
        this.time = null;
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <h2>Timer: {count} seconds</h2>
        <button type='button' onClick={this.start}>시작</button>
        <button type='button' onClick={this.stop}>정지</button>
        <button type='button' onClick={this.reset}>초기화</button>
      </div>
    )
  }
}
