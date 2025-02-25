import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedInput from './components/ValidatedInput';
import ValidatedEmail from './components/ValidatedEmail';
import ValidatedInfor from './components/ValidatedInfor';

function App() {
  return (
    <div className="App">
      <h1>Input</h1>
      <ValidatedInput />
      <h1>Email</h1>
      <ValidatedEmail />
      <h1>Infor</h1>
      <ValidatedInfor />
    </div>
  );
}

export default App;
