import { createTheme, TextField, ThemeProvider, MenuItem } from '@material-ui/core'
import React from 'react'
import categories from '../../data/Category'
import './Header.css'

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    type: "dark"
  },
})

const Header = ({ word, setWord, setLanguage, Language }) => {
  const handleChange = (lang) => {
    setLanguage(lang)
    setWord('')
  }
  return (
    <div className='header'>
      <span className='title'>
        {word ? word : 'Word Hunt'}
      </span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField 
            label='Search a word' 
            className='search'
            value={word}
            onChange={(e) => {setWord(e.target.value)}}
          />
          <TextField
            id="select-language"
            label='Language'
            className='select'
            value={Language}
            onChange={(e) => {handleChange(e.target.value)}}
            select
          >
            {categories.map((option) => {
              return <MenuItem value={option.label} key={option.label}>{option.value}</MenuItem>
            })}
          </TextField>

        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
