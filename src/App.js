import './App.css';
import { RenderProdactCard } from './components/RenderProdactCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
       <div class="row">
          <h1> All Products Card</h1>
          <RenderProdactCard/>
        </div>
    </div>
  );
}

export default App;
