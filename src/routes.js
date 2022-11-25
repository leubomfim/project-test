import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './constants/styles/global-styles';
import { UserProvider } from './contexts/context';
import { Home } from './Pages/Home/index';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Settings } from './Pages/Settings';

export const PagesRoutes = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <GlobalStyles />
      </UserProvider>
    </Router>
  );
};
