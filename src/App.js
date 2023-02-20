import logo from './logo.svg';
import './App.css';
import ProductList from './Components/ProductList';

function App() {
  const data =[
    {
      id:Math.random(),name:"Chaussure super flash Vert claire",price:479,pic:"https://www.peaksports.tn/29441-large_default/chaussure-super-flash-vert-claire.jpg"
    },
    {
      id:Math.random(),name:"Chaussure up 30 Blanc bleu vert",price:279,pic:"https://www.peaksports.tn/28460-large_default/chaussure-up-30-blanc-bleu-vert.jpg"
    },
    {
      id:Math.random(),name:"Chaussure up 30 Orange",price:279,pic:"https://www.peaksports.tn/28393-large_default/chaussure-up-30-orange.jpg"
    },
  ]
  return (
    <div className="App">
    <ProductList list={data}/>
    </div>
  );
}

export default App;
