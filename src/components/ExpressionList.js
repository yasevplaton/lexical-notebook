import React from "react";
import { List } from "antd";
import ExpressionItem from './ExpressionItem';

const data = [
  {
    id: 0,
    expression: 'any expression1',
    categoryId: 3,
    selected: true,
  },
  {
    id: 1,
    expression: 'any expression2',
    categoryId: 4,
    selected: false,
  },
];

const ExpressionList = () => {
  return (
    <List
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <ExpressionItem item={item}></ExpressionItem>
        </List.Item>
      )}
    />
  )
};

export default ExpressionList;
