import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Task = ({text, done, onChange, id, onDelete}) => {
    let listItemClasses = classNames("list-item", {"list-item_done": done})
    return (
        <li className={listItemClasses}>
            <input 
                type="checkbox" 
                className="list-item__checkbox"
                defaultChecked={done}
                onChange={() => onChange(id)}
            />
            <span className="list-item__text">{text}</span>
            <button className="list-item__delete-btn"
                onClick={() => onDelete(id)}
            ></button>
        </li>
    )
    
}

Task.propTypes = {
    text: PropTypes.string,
    done: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
    done: false,
    text: ""
}

export default Task;
