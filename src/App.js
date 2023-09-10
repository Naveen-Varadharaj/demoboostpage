import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from'./components/Introduction';
import Banner from './components/Banner'
import Results from './components/Results'
import './index.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Introduction />
    <Results />
    <Banner />
    <Footer />
    </div>
  );
}

export default App;
