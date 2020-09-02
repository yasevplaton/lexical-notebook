import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const Category = ({ item }) => {
  if (item.selected) {
    return <Text className="selected-item">{item.title}</Text>;
  } else {
    return <Text type='secondary'>{item.title}</Text>;
  };
};

export default Category;
