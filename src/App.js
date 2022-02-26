import logo from './logo.svg';
import './App.css';

import { ContactUs } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';



function App() {

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const contacotusoverrides = {
    "Flex.TextField[0]": {
      onChange: (event) => { setfirstname(event.target.value) }
    },
     "Flex.Flex[0].Flex[2].TextField[1]": {
      onChange: (event) => { setLocation(event.target.value) }
    },
    "Flex.Flex[0].Flex[2].TextField[2]": {
      onChange: (event) => { setEmail(event.target.value) }
    }, */
    "Flex.Button[0]": {
      onClick: () => alert(`Saving form data ${firstname}`) 
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      <ContactUs overrides={contacotusoverrides}/>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
