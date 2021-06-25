import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubContainer = styled.div`
    width: 130px;
    padding: 20px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Text = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Word = styled.span`
    padding: 2px 3px 0 3px;
    /* font-size: 1px; */
    color: #ffffff;
    border: none;
    border-radius: 2em;
    background-color: #4eb5f1;
`;
const Input = styled.input`
    padding: 5px;
    margin: 35px 0;
    border-radius: 2em;
    border: 1px solid;
    background-color: none;
    font-size: 10px;
    &:focus {
        outline: none;
    }
`;
const Button = styled.button`
    padding: 0.3em 1.2em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    color: #ffffff;
    background-color: #4eb5f1;
    text-align: center;
    transition: all 0.2s;
    border: none;
`;

const Logo = styled.div`
    height: 100px;
    width: 100px;
    background-size: cover;
    margin: auto;
    background-image: url(${(props) => props.imageUrl});
`;

const Screen = ({ name, imageUrl }) => {
    return (
        <MainContainer>
            <SubContainer>
                <Logo imageUrl={imageUrl} />
                <Text>
                    나는 <Word>{name}</Word>에 대해서 얼마나 알고 있을까?
                </Text>
                <Input placeholder="내 이름" />
                <Button>시작하기</Button>
            </SubContainer>
        </MainContainer>
    );
};

Screen.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};
export default Screen;
