import { makeRequest } from 'core/utils/Request';
import React, { useState } from'react';
import BaseForm from '../BaseForm';
import'./styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}
type eventForm = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>

const Form = () =>{
    const[formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '1',
        description:'',
    });
    const handleOnChange = (event: eventForm)  => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({...data, [name]:value}));
}
const onChangeSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  const payload = {
   ...formData,
   imgUrl:'https://cdn.awsli.com.br/600x450/138/138431/produto/16642526/ca1938b543.jpg',
   //imgUrl:'https://img.kr.news.samsung.com/kr/wp-content/uploads/2017/04/%EC%82%BC%EC%84%B1tv_%EC%9D%B8%ED%8F%AC%EA%B7%B8%EB%9E%98%ED%94%BD_%EC%8D%B8%EB%84%A4%EC%9D%BC_2.jpg',
   //imgUrl:'http://images7.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5-midia-fisica_1598984720_g.jpg',
   categories: [{ id: formData.category }]
}

makeRequest({url:'/products', method:'POST', data:payload})
.then(() => {setFormData({name:' ', price:' ', category:' ', description:' '})});

}
   
    return(
     <form onSubmit={onChangeSubmit}>
     <BaseForm text="Cadastrar um Produto">
         <div className="row mt-3">
             <div className="col-6">
                <input type="text"
                className="form-control mb-5"
                onChange={handleOnChange}
                placeholder="Nome completo"
                name="name" value={formData.name}
                />
                <select className="form-control mb-5" onChange = {handleOnChange}
                  name="category" value={formData.category}
                >
                    <option value="1">Livros</option>
                    <option value="3">Computadores</option>
                    <option value="2">Eletronicos</option>
                </select>
                <input type="text" 
                className="form-control mb-5"
                onChange={handleOnChange}
                placeholder="preço"
                name="price" value={formData.price}
                />
             </div>
             <div className="col-6">
                 <textarea
                 name="description"
                 value={formData.description}
                 onChange = {handleOnChange}
                 cols = {30}
                 rows = {10}
                 className="form-control"
                 />
             </div>
         </div>
     </BaseForm>
    </form>
   )
}
export default Form;