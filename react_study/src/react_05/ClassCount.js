import React, {Component} from "react";
import BoxClass from "./BoxClass";

class ClassCount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            value : 2,
        }
        console.log("constructor")
    }
    plus = () => {
        console.log("button click :", this.state)
        this.setState({
            count : this.state.count + 1,
            value : this.state.value + 2,
        })
    }

    componentDidMount() {
        console.log("componentDidMount")
        // componentDidMount
        // ui렌더가 끝난후 api호출이나 data를 덮어 씌울 위치
    }

    componentDidUpdate() {
        console.log("componentDidUpdate : ", this.state)
        // state가 최신 업데이트 한 값을 출력 시
        // 최신업데이트값을 가지고 작업할때 확인하고 작업
        // state가 업데이트 된 후에 해야하는 작업을 현 위치에서 작업
    }

    render() {
        console.log("render")
        return(
            <div>
                {/* 버튼 클릭시 1씩 증가 수의 값은 props로 전달받기 */}
                <h1>state : {this.state.count}</h1>
                <button type="button" onClick={this.plus}>클릭</button>
                {
                    this.state.value < 7 && <BoxClass num = {this.state.value}/>
                }
                
            </div>
        )
    }
}

export default ClassCount