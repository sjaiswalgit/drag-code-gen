import React, { useState } from "react";
import { Form, Input, Button, Row, Col,Typography } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { produce } from "immer";

const {Text,Title}=Typography

interface KeyValueFormProps {
    objectList: any;
    setObjectList: any;
    paramList:any;
  }
  

const KeyValueForm: React.FC <KeyValueFormProps>= ({objectList, setObjectList,paramList}) => {
  

  // Function to handle adding a new key-value pair
  const handleAdd = () => {
    const newPair = { key: "", value: "" }; // Initial empty object for new pair
    setObjectList([...objectList, newPair]);
  };

  // Function to handle removal of a key-value pair by index
  const handleRemove = (index: number) => {
    const updatedList = objectList.filter((_:any, i:number) => i !== index);
    setObjectList(updatedList);
  };

  const handleModify=(key:any,value:any,index:number)=>{
   console.log(key,value,index)
    const newDraft = produce(objectList, (draft:any) => {
        draft[index][key] = value;
    });
    setObjectList(newDraft);
    

  }

  return (
    <>
    <Text>Options Items:</Text>
    <hr/>
        {objectList.map((pair:any, index:number) => (
          <Row key={index} gutter={16} align="middle" wrap={false}>
             {paramList.map((param:any,ind:number)=>{
                return(
                 <Col span={10} key={ind} >
                 <Form.Item
                   rules={[{ required: true, message: "Missing key" }]}
                 >
                   <Input
                     placeholder={param}
                     value={pair[param]}
                     onChange={(e) => {
                       handleModify(param,e.currentTarget.value,index)
                     }}
                   />
                 </Form.Item>
               </Col>)
            })      
            }
            <Col span={4} style={{ display: "flex", alignItems: "center" }}>
              <MinusCircleOutlined
                onClick={() => handleRemove(index)}
                style={{ fontSize: "20px", color: "red", cursor: "pointer" , paddingBottom:'24px'}}
              />
            </Col>
          </Row>
        ))}

        <Form.Item>
          <Button
            type="dashed"
            onClick={handleAdd}
            block
            icon={<PlusOutlined />}
          >
            Add Key-Value Pair
          </Button>
        </Form.Item>
        </>
  );
};

export default KeyValueForm;
