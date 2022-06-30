import './App.css';
import Button from './component/button';
import ContainerStyle from './component/container-style';
import { Greet } from './component/greet';
import Heading from './component/heading';
import Input from './component/input';
import Oscar from './component/oscar';
import Person from './component/person';
import { PersonList } from './component/person-list';
import LoggedIn from './component/states/logged-in';
import UserB from './component/states/userB';
import Status from './component/status';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ] 

  return (
    <div className="App">
      <Greet name ='imole'  isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status = 'loading'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
      <Button handleClick= {(event,id) => {
        console.log('button clicked',event,id)
      }} />
      <Input value='' handleChange={event => console.log(event)}/>
      <ContainerStyle styles={{border: '1px solid black', padding: '1rem'}}/>
      <LoggedIn/>
      <UserB/>
    </div>
  );
}

export default App;
