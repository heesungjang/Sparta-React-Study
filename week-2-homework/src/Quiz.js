import React from "react";
import styled from "styled-components";
import img from "./quiz_image.png";
const Quiz = (props) => {
    return (
        <QuizContainer>
            <p>
                <span>5번입니다!</span>
            </p>
            <Question>문제입니다!</Question>
            <AnswerZone>
                <Answer>O</Answer>
                <Answer>X</Answer>
            </AnswerZone>
            <div>
                <img src={img} />
            </div>
        </QuizContainer>
    );
};

const QuizContainer = styled.div`
    & > p > span {
        padding: 8px 16px;
        background-color: #fef5d4;
        border-radius: 30px;
    }
`;
const Question = styled.h1`
    font-size: 1.5em;
`;

const AnswerZone = styled.div`
    background-color: red;
    width: 100vw;
    height: 100vw;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Answer = styled.div`
    font-size: 12em;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default Quiz;
