import { useEffect } from "react";
import {Form,Input,InputNumber,Modal } from "antd";

const ModalFormStudent = (props) => {
    const [form] = Form.useForm()
useEffect(()=>
{
    if(!props.open)
    {
        form.resetFields()
    }
},[props.open])
useEffect(()=>
{
  if(props.open&&props.formData.id)
  {
    form.getFieldValue(props.formData)
  }
},[props.open,props.formData])
    const onSubmit = async () => {
      const value = await form.validateFields()
      props.onSubmit(props.formData.id,value)
    }
  
    const onCancel = () => {
      props.setOpen(false);
    };
  
    return (
      <Modal open={props.open} onOk={onSubmit} onCancel={onCancel}>
        <Form form={form} layout="vertical">
          <Form.Item name="ten" label="Tên họ" rules={[{required:true,message:'Tên họ la bat buoc'}]} >
            <Input />
          </Form.Item>
  
          <Form.Item name="ho" label="ho" rules={[{required:true,message:'họ khong dung'}]}>
            <Input />
          </Form.Item>
  
          <Form.Item name="fullname" label="họ tên" rules={[{required:true,message:''}]}>
            <Input/>
          </Form.Item>
  
        
        </Form>
      </Modal>
    );
  };

export default ModalFormStudent;