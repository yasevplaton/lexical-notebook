import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const ExpressionItem = ({ item }) => {
  if (item.selected) {
    return <Text className="selected-item">{item.expression}</Text>;
  } else {
    return <Text type='secondary'>{item.expression}</Text>;
  };
};

export default ExpressionItem;
