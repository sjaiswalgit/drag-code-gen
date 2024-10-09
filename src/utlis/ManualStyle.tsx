import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { produce } from "immer";

const { Text, Title } = Typography

interface ManualStyleProps {
  styleOptions: any;
  changeStyle: any;
}


const ManualStyle: React.FC<ManualStyleProps> = ({ styleOptions, changeStyle }) => {


  // Function to handle adding a new key-value pair
  const handleAdd = () => {
    // Initial empty object for new pair
    changeStyle({ ...styleOptions, test: '' });
  };

  // Function to handle removal of a key-value pair by index
  const handleRemove = (stylekey: any) => {
    const updatedList = { ...styleOptions }
    delete updatedList[stylekey]
    changeStyle(updatedList);
  };

  const handleModify = (type: string, stylekey: any, stylevalue: any) => {
    const updatedList = { ...styleOptions }
    if (type === 'value') {
      updatedList[stylekey] = stylevalue
    }
    if(type==='key'){
      delete updatedList[stylekey]
      updatedList[stylevalue]=""
    }
    changeStyle(updatedList);

  }

  console.log(styleOptions)

  return (
    <>
      {Object.entries(styleOptions).map(([stylekey, stylevalue], index: number) => {
        const typedValue = stylevalue as string | number; // Type assertion
        console.log(stylekey, stylevalue)
        return (
          <Row key={index} gutter={16} align="middle" wrap={false}>
            <Col span={10}>
              <Form.Item
                rules={[{ required: true, message: "Missing key" }]}
              >
                <Input
                  placeholder="Style Param"
                  value={stylekey}
                  onChange={(e) => {
                    handleModify("key", stylekey, e.currentTarget.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                rules={[{ required: true, message: "Missing value" }]}
              >
                <Input
                  placeholder="Style Value"
                  value={typedValue}
                  onChange={(e) => {
                    handleModify("value", stylekey, e.currentTarget.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={4} style={{ display: "flex", alignItems: "center" }}>
              <MinusCircleOutlined
                onClick={() => handleRemove(stylekey)}
                style={{ fontSize: "20px", color: "red", cursor: "pointer", paddingBottom: '24px' }}
              />
            </Col>
          </Row>
        );
      })}


      <Form.Item>
        <Button
          type="dashed"
          onClick={handleAdd}
          block
          icon={<PlusOutlined />}
        >
          Add Items
        </Button>
      </Form.Item>
    </>
  );
};

export default ManualStyle;
