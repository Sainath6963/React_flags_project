import React from 'react'
import './Apps.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'

const App = () => {
  return (
    <div>
        <Header/>
         <main>
            <div className='search-filter-container'>
            <SearchBar/>
            <SelectMenu/>
            </div>
         </main>
    </div>
  )
}

export default App