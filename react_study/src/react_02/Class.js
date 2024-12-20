import { Component } from "react";

class Class extends Component {
    constructor(props){
        super(props);
        this.name = "김"
    }
    render() {
        return(
            <div>
                <h2>클래스형 컴포넌트 제작{this.name}</h2>
                <Box name="Kim"/>
            </div>
        )
    }
}

function Box(props) {
    return(
        <div>
            <h2>함수형 컴포넌트 제작 {props.name}</h2>
        </div>
    )
}

export default Class;