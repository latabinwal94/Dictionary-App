import './App.css';
import axios from 'axios'
import React, { useState } from 'react'
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import Definition from './components/Definitions/Definition';

function App() {
  const [meanings, setMeanings] = useState([])
  const [ word, setWord] = useState('')
  const [Language, setLanguage] = useState('en')

  const dictionaryApi = async() => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${Language}/${word}`)
      setMeanings(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
    dictionaryApi()
  // eslint-disable-next-line
  },[word, Language])

  return (
    <div className="App" style={{height: '100vh', backgroundColor: '#282c34', color: 'white'}}>
      <Container
        maxWidth="md"
        style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
      >
        <Header
          word={word}
          setWord={setWord}
          Language={Language}
          setLanguage={setLanguage}
        />
        {meanings && 
          <Definition
            word={word}
            meanings={meanings}
            Language={Language}
          />
        }
      </Container>
    </div>
  );
}

export default App;
