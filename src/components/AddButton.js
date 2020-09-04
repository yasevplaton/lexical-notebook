import React from "react";
import { Tooltip, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddButton = ({ type }) => {
  return (
    <Tooltip
      title={`${type === "category" ? "add category" : "add expression"}`}
    >
      <Button
        type="primary"
        shape="circle"
        icon={
          <PlusOutlined
            className={`icon-plus ${
              type === "category"
                ? "icon-plus--category"
                : "icon-plus--expression"
            }`}
          />
        }
        size="large"
        className={`add-button ${
          type === "category"
            ? "add-button--category"
            : "add-button--expression"
        }`}
      ></Button>
    </Tooltip>
  );
};

export default AddButton;
