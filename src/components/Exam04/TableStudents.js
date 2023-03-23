import {  Button } from "antd";
import { useState } from "react";
import Tables from './Table';
import ModalFormStudent from './ModalFormStudent'
const DEFAULT_STUDENT = {ten: "", ho: "", fullname: ""};
const TableStudents = (props) => {
  const [formData,setFormData]=useState(DEFAULT_STUDENT)
  const [dataSource,setDataSource]=useState([])
  const [open,setOpen]=useState(false)
  const onCreate=()=>{
    setFormData(DEFAULT_STUDENT)
     setOpen(true)
  }
  const onEdit=(student)=>
  {
     setFormData(student)
     setOpen(true)
  }
  const onDelete=(item)=>{
const newStudent=dataSource.filter((student)=>
{
  return student.id !== item.id
})
setDataSource(newStudent);
  }
  const onChange=(e)=>
  {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,[name]:value
    })
  }

  const onSubmit=(id,data)=>
  {
    if(id)
    {
      const newDataSource = dataSource.map((item) => {
        return item.id===id ? {id:id,...data}:item;
        

        
      });

      setDataSource(newDataSource);
    }else
    {
      setDataSource([
        ...dataSource,
        {
      id:Math.random(),
      ...data
        }
      ])
    }

    setFormData(DEFAULT_STUDENT)
    setOpen(false)
  }
  

 
  return (
   <div>
    <div>
   <ModalFormStudent
   open={open}
   setOpen={setOpen}
   onSubmit={onSubmit}
   formData={formData}
   onChange={onChange}

   ></ModalFormStudent>
    <Button onClick={onCreate}>New student</Button>
    </div>
     <Tables dataSource={dataSource} onEdit={onEdit} onDelete={onDelete} /> 
  </div>
  )
};

export default TableStudents;