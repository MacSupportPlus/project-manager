import Axios from 'axios';
import {useState} from 'react';
import {navigate} from '@reach/router';
import ProductForm from '../components/ProductForm';

const Create = props => {
    

    const [ProductFormData,setProductForm] = useState({
        title:"",
        price:0,
        description: ""
    });
    const [errors,setErrors] = useState({
        title:"",
        price:"",
        description:""
    });

    const handleInputChange = e => {
        setProductForm({
            ...ProductFormData,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/products/create',ProductFormData)
            .then(res => {
                if(res.data.results){
                    navigate('/products');
                }
                else{
                    setErrors(res.data);
                }
            })
        }
    

    return (
        <div>
            <h2 className="text-center"> Add A Product</h2>
            <ProductForm 
                form={ProductFormData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="add a product"
                
            />

        </div>
    
    );
    }
    
export default Create;