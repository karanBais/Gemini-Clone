import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/MainContent'

const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App