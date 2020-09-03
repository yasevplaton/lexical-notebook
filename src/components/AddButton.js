import React from "react";
import { Button, Tooltip } from "antd";

const AddButton = ({ type }) => {
  return (
    <Tooltip
      title={`${type === 'category' ? "add category" : "add expression" }`}
    >
      <Button
        type="primary"
        shape="circle"
        className={`add-button ${
          type === 'category' ? "add-button--category" : "add-button--expression"
        } `}
      >
        <span className="icon-plus">+</span>
      </Button>
    </Tooltip>
  );
};

export default AddButton;
