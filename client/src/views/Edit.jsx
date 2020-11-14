import {useState,useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Edit = props => {
    const [productForm,setProductForm] = useState({
        title:"",
        price:0,
        age: 0,
       
    });
    const [errors,setErrors] = useState({
        title:"",
        price:"",
        description:""
    });

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProductForm(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const handleInputChange = e => {
        setProductForm({
            ...productForm,
            [e.target.name]:e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/products/update/${props.id}`,productForm)
            .then(res => navigate(`/products/show/${props.id}`))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2 className="text-center">Edit Product:</h2>
            <ProductForm 
                form={productForm}
                errors={errors}
                handleInputChange={handleInputChange}
                submitValue="Edit"
                handleSubmit={handleUpdate}
            />
        </div>
    );



}

export default Edit;
