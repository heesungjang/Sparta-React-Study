import React, { setState } from "react";

import LifecycleEx from "./LifecycleEx";

class App extends React.Component {
    state = { isWillUnMount: true };
    remove = () => {
        this.setState({ isWillUnMount: false });
    };
    render() {
        const { isWillUnMount } = this.state;
        return (
            <>
                <div className="App">
                    {isWillUnMount ? <LifecycleEx /> : null}
                </div>
                <button onClick={this.remove}>지워죠!!!</button>
            </>
        );
    }
}

export default App;
