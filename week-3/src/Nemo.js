import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: grey;
    width: 50px;
    height: 50px;
    margin: 5px;
`;

const Nemo = ({ count, onRemove, onAdd }) => {
    const nemo_count = Array.from({ length: count }, (v, i) => i);

    return (
        <>
            {nemo_count.map((num, idx) => {
                return <Container key={idx} />;
            })}
            <button onClick={onAdd}>추가</button>
            <button onClick={onRemove}>제거</button>
        </>
    );
};

export default Nemo;
