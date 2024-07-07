import LoginForm from './components/LoginForm/LoginForm';
import JoinForm from './components/JoinForm/JoinForm';
import MainPage from './components/MainPage/MainPage';
import MyPage from './components/MyPage/MyPage';
import MyPet from './components/MyPet/MyPet';
import PetSetting from './components/PetSetting/PetSetting';
import CheckPage from './components/CheckPage/CheckPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/join" element={<JoinForm />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypet" element={<MyPet />}></Route>
        <Route path="/petsetting" element={<PetSetting />}></Route>
        <Route path="/checkpage" element={<CheckPage />}></Route>
      </Routes>
    </Router>
  )

}

export default App;
