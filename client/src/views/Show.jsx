import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
const Show = props => {
    const [product,setProduct] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err))
    },[props])

    return (
        product ?
        <div className="card col-6 mx-auto">
            <Link to={`/products/edit/${props.id}`} >Edit</Link>
            <div className="card-body">
                <div className="card-title">{product.title}</div>
                <h4 className="card-subtitle text-muted">Price: {product.price} $</h4>
                <p className="card-text">Description: {product.description}</p>
            </div>
        </div> : <p>Loading . . .</p> 
        
    );
}

export default Show;
