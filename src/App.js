import React from "react";
import { connect } from "react-redux";

//For selecting the part of data from store
const mapState = (state) => {
    return {
        arr: state,
    };
};

const App = (props) => {
    const run = () => {
        props.dispatch({ type: "TEST1", data: Math.floor(Math.random() * 10) });
    };
    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={run}>Run!</button>
            {console.log(props.arr)}
        </div>
    );
};
export default connect(mapState)(App);
