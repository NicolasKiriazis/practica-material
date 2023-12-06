import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Navbar from './components/navbar/index'
import { Container } from '@mui/material';

function App() {
  return (
    <>

    <Navbar/>
    <Container sx={{mt:5}}></Container>
    </>
  );
}

export default App;
