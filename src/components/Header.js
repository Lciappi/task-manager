//import is no longer needed import React from 'react'
//rafc created this

import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ onClicker, showAdd }) => {  
  return (
    <header className ='header'>
        <h1>Task Tracker</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'add'} onClick={onClicker} />

    </header>
  ) 
}


export default Header