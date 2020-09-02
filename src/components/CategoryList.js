import React from "react";
import { List } from "antd";
import Category from './Category';

const data = [
  {
    id: 0,
    title: 'all',
    selected: true,
  },
  {
    id: 1,
    title: 'unsorted',
    selected: false,
  },
  {
    id: 2,
    title: 'category1',
    selected: false,
  },
  {
    id: 3,
    title: 'category2',
    selected: false,
  },
  {
    id: 4,
    title: 'category3',
    selected: false,
  },
];

const CategoryList = () => {
  return (
    <List
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Category item={item}></Category>
        </List.Item>
      )}
    />
  )
};

export default CategoryList;
