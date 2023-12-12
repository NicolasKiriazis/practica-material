import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Navbar from './components/navbar/index'
import Banner from './components/banner';
import MyForm from './components/form';
import ImageGrid from './components/ImageGrid';
import Footer from './components/footer/index'



function App() {
  return (
    <>

    <Navbar/>
    <Banner/>
    <ImageGrid/>
    <MyForm/>
    <Footer/>
    </>
  );
}

export default App;
