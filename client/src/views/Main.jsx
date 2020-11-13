import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [Products,setProduct] = useState([]);
    
    useEffect(() => {
        Axios.get('http://localhost:8000/api/products')
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err));
    },[])


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