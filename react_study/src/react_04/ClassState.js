import React, { Component } from "react"

class ClassState extends Component {
    constructor(props) {
        super(props);
        // 초기상태 설정
        this.state = {
            count : 0,
        }
    }

    plus = () => {
        if(this.state.count < 10) {
            this.setState({count: this.state.count + 1}) 
        }

        // this.setState((p)=> ({
        //     count : p.count < 10 ? p.count + 1 : p.count
        // }));
    }

    minus = () => {
        // if(this.state.count > 0) {
        //     this.setState({count: this.state.count - 1})
        // }

        this.setState((p)=> ({
            count : p.count > 0 ? p.count + 1 : p.count
        }));
    }

    render() {
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button type="button" onClick={this.plus}>증가</button>
                <button type="button" onClick={this.minus}>감소</button>
            </div>
        )
    }
}

export default ClassState
