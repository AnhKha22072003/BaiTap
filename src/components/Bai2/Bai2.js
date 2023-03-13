import {useState} from "react";
import { Input,Button,Modal } from 'antd';
const Login=()=>
{
const [user,setUser]=useState([{email:"anhkha",pass:"kha123"},{email:"khakha",pass:"kha11"}])
const [open,setOpen]=useState(false)
const onChange=(e)=>
  {
    const name = e.target.name
    const value = e.target.value
   
  }
const onSubmit=()=>
{

}


    return(
        <div>
            <div>
                <Input name="email" value={user.email} onChange={onChange}></Input>
                <Input name="pass" value={user.pass} onChange={onChange}></Input>
                <Button onClick={onSubmit}></Button>
                <Modal>
                    <div>
                        ddang nhap thanh cong
                    </div>
                </Modal>
            </div>
        </div>
    )
}
export default Login;