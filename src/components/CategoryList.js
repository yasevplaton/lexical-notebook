import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "categoryName",
    dataIndex: "categoryName",
    key: "categoryName",
  },
];

const data = [
  {
    key: "1",
    categoryName: "all",
  },
  {
    key: "2",
    categoryName: "unsorted",
  },
  {
    key: "3",
    categoryName: "category1",
  },
  {
    key: "4",
    categoryName: "category2",
  },
];

const CategoryList = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered={false}
      pagination={false}
      showHeader={false}
    />
  );
};

export default CategoryList;
