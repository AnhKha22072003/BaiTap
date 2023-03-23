import { Table,Input, Button,Modal } from "antd";
import { useState } from "react";

const DEFAULT_STUDENT = { name: "", studentId: "", score: "", className: "" };
const Tables = (props) => {
  

  const columns = [
    {
      title: "Tên",
      dataIndex: "ten",
      key: "ten",
    },
    {
      title: "Họ",
      dataIndex: "ho",
      key: "ho",
    },
    {
      title: "fullname",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title:"",
      dataIndex:"actions",
      render:(text,item)=>
      {
        console.log(item)
        
        return(
          <div>
            <Button onClick={() =>{ props.onEdit(item)}}>edit {item.name}</Button>
            <Button  onClick={() =>{ props.onDelete(item)}}>Delete {item.name}</Button>
          </div>
        )
      }
    }
  ];

  return (
   <div>
     <Table dataSource={props.dataSource} columns={columns} /> 
  </div>
  )
};

export default Tables;