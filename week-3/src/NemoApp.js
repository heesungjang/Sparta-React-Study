import React, { useState } from "react";
import Nemo from "./Nemo";

const NemoApp = () => {
    const [count, setCount] = useState(0);

    const onAdd = () => {
        setCount(count + 1);
    };

    const onRemove = () => {
        setCount(count > 0 ? count - 1 : alert("네모가 없어요..."));
    };

    return (
        <div className="NemoApp">
            <Nemo count={count} onAdd={onAdd} onRemove={onRemove} />
        </div>
    );
};

export default NemoApp;
