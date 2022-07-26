import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Container } from 'semantic-ui-react';
import Home from './pages/Home';
import Login from './pages/Login';
import SinglePost from './pages/SinglePost';
import Register from './pages/Register';
import MenuBar from './components/MenuBar';
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<AuthRoute />}>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Route>
            <Route exat path="/posts/:postId" element={<SinglePost />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
