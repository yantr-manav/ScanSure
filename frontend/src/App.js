import logo from './logo.svg';
import './App.css';

import Dashboard from './pages/Dashboard';
/*
  NOTE: On Windows, file imports are case-insensitive, but on other systems (like Linux), they are case-sensitive.
  Your file is named 'Dashboard.js', but you are importing './pages/dashboard'.
  Change the import to match the actual file name:
*/
function App() {
  return (
    <div>
      <Dashboard />
      Hello, ScanSure!
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;



