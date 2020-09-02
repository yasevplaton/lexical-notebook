import React from "react";
import { Descriptions } from "antd";

const data = [
  {
    id: 0,
    categoryId: [1, 4],
    expression: `expression`,
    meaning: `meaning`,
    synonyms: `synonyms`,
    antonyms: `antonyms`,
    examples: `examples`,
    notes: `notes`,
    tags: ["tag1", "tag2"],
  },
];

const item = data[0];
console.log(item);

const ExpressionCard = () => {
  return (
    <Descriptions title="Expression Card" className="ExpressionCard">
      <Descriptions.Item label="expression">{item.expression}</Descriptions.Item>
      <Descriptions.Item label="meaning">{item.meaning}</Descriptions.Item>
      <Descriptions.Item label="synonyms">{item.synonyms}</Descriptions.Item>
      <Descriptions.Item label="antonyms">{item.antonyms}</Descriptions.Item>
      <Descriptions.Item label="examples">{item.examples}</Descriptions.Item>
      <Descriptions.Item label="notes">{item.notes}</Descriptions.Item>
    </Descriptions>
  );
};

export default ExpressionCard;
