import React from "react";
import { connect } from "react-redux";

//For selecting the part of data from store
const mapState = (state) => {
    return {
        test: state,
    };
};

const App = (props) => {
    const run = () => {
        props.dispatch({ type: "TEST1" });
    };
    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={run}>Run!</button>
            {props.test}
        </div>
    );
};
export default connect(mapState)(App);
