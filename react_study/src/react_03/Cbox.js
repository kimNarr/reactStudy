import { Component } from "react";

class Cbox extends Component {
    render() {
        let {name, age, children} = this.props; //비구조화 할당으로 props 추출

        return(
            <div>
                {/* <h1>{this.props.name}</h1>
                <p>{this.props.age}</p> */}
                <h1>{name}</h1>
                <p>{age}</p>
                <span>{children}</span>
            </div>
        )
    }
}

Cbox.defaultProps = {
    name : "이름",
    age : "나이"
}

export default Cbox;