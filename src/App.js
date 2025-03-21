import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks.js';
import './App.css';

const App = () => (
  <>
    <MyNav />
    <div className="container mt-4">
      <Welcome />
      <AllTheBooks />
    </div>
    <MyFooter />
  </>
);

export default App;