import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Catagories from './Components/Catagories/Catagories';

function App() {
  return (
    <div className="main-div">
      <Header></Header>
      <Banner></Banner>
      <Catagories></Catagories>
    </div>
  );
}

export default App;
