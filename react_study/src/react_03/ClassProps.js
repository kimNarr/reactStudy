import { Component } from "react";
import Cbox from "./Cbox";

class ClassProps extends Component {
    render() {
        return(
            <div>
                <Cbox name="김태완" age={23} />
                <Cbox name="김투환" age={40} />
                <Cbox>자식</Cbox>
            </div>
        )
    }
}

export default ClassProps;