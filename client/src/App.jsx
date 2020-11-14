import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from '@reach/router';
import Create from './views/Create';
import Main from './views/Main';
import Show from './views/Show';
import Edit from './views/Edit';



function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center flex-column">

        <Link to="/">Home</Link>
      </div>
      <Router>
        <Main path = "/products" />
        <Create path="/products/create" />
        <Show path="/products/show/:id" />
        <Edit path="/products/edit/:id" />
        
      
      </Router>
      
    </div>
  );
}

export default App;
