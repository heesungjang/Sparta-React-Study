import React from "react";

const Cat = (props) => {
    const {
        match: {
            params: { cat_name },
        },
    } = props;

    return <div>내 고양이 이름은 {cat_name}이에요.</div>;
};

export default Cat;
