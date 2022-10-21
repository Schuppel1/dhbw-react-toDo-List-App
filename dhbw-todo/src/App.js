import logo from './hero_image.svg';
import './App.css';
import {WelcomeComponent} from './components/welcomeComponent/welcomeComponent'
import {ToDoElementComponent} from './components/toDoElementComponent/toDoElementComponent'
import {StartPageComponent} from './components/StartPageComponent/startPageComponent'

function App() {
  //<ToDoElementComponent Aufgabe={"testadafafga"}/>

  //<ToDoElementComponent Aufgabe={"testadafafga"}/>
  return (
    <div>
      <WelcomeComponent src={logo} alt={"Person with a List"} team={"Philipp, Arthur, Chris, Sven und Paul"} toDoPage={<StartPageComponent/>}/>
     
    </div>
  );
}

export default App;
