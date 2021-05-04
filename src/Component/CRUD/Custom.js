import React from 'react';

const Custom = (props) => {
    return (
        <div className="container">
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChangeHandle}
                />
            </div>
        </div>
    );
};

export default Custom;