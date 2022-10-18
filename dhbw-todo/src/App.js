import dhbwlogo from '../src/Logo_DHBWMosbach.jpg';
import './App.css';
import {WelcomeComponent} from './components/welcomeComponent/welcomeComponent'

function App() {
  return (
    <div>
      <WelcomeComponent src={dhbwlogo} alt={"Logo DHBW Mosbach"} team={"Philipp, Arthur, Chris, Sven und Paul"}/>
    </div>
  );
}

export default App;
