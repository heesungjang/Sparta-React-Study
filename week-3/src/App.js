import React from "react";
import styled from "styled-components";
import BucketList from "./BucketList";

import Detail from "./Detail";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import { loadBucket, createBucket } from "./redux/modules/bucket";
import { Route, withRouter, Switch } from "react-router-dom";

const mapStateToProps = (state) => {
    return { bucket_list: state.bucket.list };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(loadBucket());
        },
        create: (bucket) => {
            dispatch(createBucket(bucket));
        },
    };
};
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.text = React.createRef();
    }

    componentDidMount() {
        console.log(this.props);
    }

    addBucketList = () => {
        let list = this.state.list;
        const new_item = this.text.current.value;

        this.setState({ list: [...list, new_item] });
    };

    render() {
        return (
            <div className="App">
                <Container>
                    <Title>내 버킷리스트</Title>
                    <Line />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(props) => (
                                <BucketList
                                    history={this.props.history}
                                    list={this.props.bucket_list}
                                />
                            )}
                        />
                        <Route path="/detail" component={Detail} />
                        <Route
                            render={(props) => (
                                <NotFound history={props.history} />
                            )}
                        />
                    </Switch>
                </Container>
                <Input>
                    <input type="text" ref={this.text} />
                    <button onClick={this.addBucketList}>추가하기</button>
                </Input>
            </div>
        );
    }
}

const Input = styled.div`
    max-width: 350px;
    min-height: 10vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Container = styled.div`
    max-width: 350px;
    min-height: 60vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Title = styled.h1`
    color: slateblue;
    text-align: center;
`;

const Line = styled.hr`
    margin: 16px 0px;
    border: 1px dotted #ddd;
`;

export default connect(mapDispatchToProps, mapDispatchToProps)(withRouter(App));
