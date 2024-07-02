import LoginForm from './components/LoginForm/LoginForm';
import JoinForm from './components/JoinForm/JoinForm';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/join" element={<JoinForm />}></Route>

      </Routes>
    </Router>
  )
}

export default App;
