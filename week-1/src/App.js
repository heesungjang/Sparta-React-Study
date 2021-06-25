import React from "react";
import Screen from "./Screen";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "짱구",
            imageUrl:
                "https://lh3.googleusercontent.com/proxy/DAKqp5o7U9HKi094u1clCH9bUX50YQOfMf34VHhSoCFsxAAswHs2kjhz4VRhKzwGXpKDMogx0YV9hTsYbq5NArewa42s2sxtMxE8rtFGyj_LTidPHVA",
        };
    }

    render() {
        const { name, imageUrl } = this.state;
        return (
            <>
                <Screen name={name} imageUrl={imageUrl} />
            </>
        );
    }
}

export default App;
