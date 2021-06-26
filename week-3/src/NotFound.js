import React from "react";

const NotFound = ({ history }) => {
    console.log(history);
    return (
        <>
            <h1>주소가 올바르지 않아요!</h1>
            <button onClick={() => history.goBack()}>돌아가기</button>
        </>
    );
};

export default NotFound;
