import Button from "./components/Button";
import Greet from "./components/Greet";
import Hedar from "./components/Hedar";
import Navbar from "./components/Navbar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { FancyButton, SubmitButton } from './components/Button/Button'
export default function App() {
  const parsonName = {
    first: "Osama",
    last: "Husama",
  };

  const nameList = [
    {
      first: "Husam",
      last: "Osama",
    },
    {
      first: "Ali",
      last: "Ahmed",
    },
  ];
  return (
    <div className="App">
      {/* <Button>Styled Button</Button> */}
        <div>
          <br />
        </div>
        
        <FancyButton>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit</SubmitButton>
        <div>
          <br />
        </div>
      <Greet name="Osama" age={20} />
      <Greet name="Ali" age={18} />

      <Person name={parsonName} />

      <PersonList names={nameList} />

      <Status status="error" />

      <Navbar>Osama</Navbar>

      <Hedar>
        <Navbar>Husam2</Navbar>
      </Hedar>

      <Button handleClick={(event,i)=>{
        console.log("Clickd",event,i);
        
      }}/>
    </div>
  );
}
