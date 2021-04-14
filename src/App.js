import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterApp from './routes';

function App() {
  return (
    <div>
      <Router>
        <RouterApp />
      </Router>
    </div>
  );
}

export default App;
