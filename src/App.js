
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Question from './Components/Questions/Question';
import Fotter from './Components/footer/Fotter';







function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
