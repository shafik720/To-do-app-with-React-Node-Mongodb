import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Catagories from './Components/Catagories/Catagories';
import Tasks from './Components/Tasks/Tasks';
import BottomSection from './Components/BottomSection/BottomSection';

function App() {
  return (
    <div className="main-div">
      <Header></Header>
      <Banner></Banner>
      <Catagories></Catagories>
      <Tasks></Tasks>
      <BottomSection></BottomSection>
    </div>
  );
}

export default App;
