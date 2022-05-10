import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage/HomePage.jsx';
import { DefaultPage } from './Components/DefaultPage/DefaultPage.jsx';
import { Counter } from './Components/Counter/Counter.jsx';
import { UserList } from './Components/UserList/UserList.jsx';
import { UserProfile } from './Components/UserProfile/UserProfile.jsx';
import { NotFound } from './Components/NotFound/NotFound.jsx';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}>
          <Route index element={<DefaultPage/>}/>
          <Route path='counter' element={<Counter/>}/>
          <Route path='userList' element={<UserList/>}/>
          <Route path='userList/:id' element={<UserProfile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
};