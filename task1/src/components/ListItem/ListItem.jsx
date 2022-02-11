import React from "react";
import "./ListItem.css";

const BucketIcon = require('../../assets/bucket.png');

export default function ListItem(props) {
  const {data, removeTask, markTodoDone} = props;
  
  return (
    <div className={`${data.done ? "item-wrapper" : "item-wrapper"} active`}>
      <input
        type="checkbox"
        checked={data.done}
        onChange={() => markTodoDone(data.id)}
      />
      <div className="item-text">{data.title}</div>
      <div onClick={() => removeTask(data.id)}>
        <img className="bucket-icon" src={BucketIcon} alt="bucket icon" />
      </div>
    </div>
  );
}
