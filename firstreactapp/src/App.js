// import logo from './logo.svg';
import Test from './components/Test';
import './App.css';
import Header from './components/Header/Header'
import Count from './components/Count';
import Example from './components/Example'
function App() {
  const varName = {
    namer: "Deepanshu Kant",
    work: "Full Stack Web Dev"
  }
  return (
    <div>
      <Header />

      <Test name={varName} title="I Love React" />
      <Count />
      <Example />
    </div>
  );
}

export default App;
