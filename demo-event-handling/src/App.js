import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventHandlingDemo from './components/EventHandlingDemo';
import MyAlert from './components/MyAlert';
import MyDropdown from './components/DropDown';
import MyModal from './components/MyModal';
import MyRadioButton from './components/MyRadioButton';

function App() {
  return (
    <div className="App">
      <EventHandlingDemo />
      <h2>Alert</h2>
      <MyAlert />
      <h2>Dropdown</h2>
      <MyDropdown />
      <h2>Modal</h2>
      <MyModal />
      <h2>Radio Button</h2>
      <MyRadioButton />
    </div>
  );
}

export default App;
