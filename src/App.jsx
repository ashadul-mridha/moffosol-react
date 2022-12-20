// Import  styles
import './styles/style.css'
import 'swiper/css';
import 'lightgallery/css/lightgallery.css';
import Home from './pages/Home';
import AppThemeProvider from './themes/AppThemeProvider';

function App() {

  return (
    <>
    <AppThemeProvider>
      <Home />
    </AppThemeProvider>
    </>
  )
}

export default App
