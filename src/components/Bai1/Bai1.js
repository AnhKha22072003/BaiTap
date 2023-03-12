import {useState} from "react";

const Bai1 =()=>
{
const [products,setProducts] =useState([{name:'banh mi',code:'1',price:'12$'},
{name:'xoi',code:'2',price:'15$'}])



return (
    <div>
      

      {products.map((item) => {
        return (
          <div>
            <div>ten san pham: {item.name}</div>
            <div>Ma: {item.code}</div>
            <div>gia: {item.price}</div>
          </div>
        );
      })}
      
    </div>
  );
}
export default Bai1;