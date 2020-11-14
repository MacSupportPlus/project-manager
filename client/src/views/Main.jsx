import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [Products,setProduct] = useState([]);
    const [bounce,setBounce] = useState(false);
    
    useEffect(() => {
        Axios.get('http://localhost:8000/api/products')
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err));
    },[bounce])
    const bounceProduct = (id,name) => {
        Axios.delete(`http://localhost:8000/api/products/destroy/${id}`)
            .then(res => {
                if(res.data.results){
                    alert(`You removed ${name} from the list, you Monster!!!`)
                    // creates state variable to re-render DOM
                    setBounce(!bounce);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Link to="/products/create" >Add Product</Link>
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map((product,i) => <tr key={i}>
                                                <td>
                                                <Link className="btn btn-primary" to={`/products/show/${product._id}`} >{product.title}</Link>
                                                    
                                                    
                                                </td>
                                                <td>
                                                    <Link to={`/products/destroy/${product._id}`} ></Link>
                                                    <button 
                                                        onClick={() => bounceProduct(product._id,product.title)}
                                                        className="btn btn-danger"
                                                    >Remove</button>
                                                </td>

                                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Main;