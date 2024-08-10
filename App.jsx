import React, { useState } from 'react'
import './Apps.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'

const App = () => {
  const[query , setQuery] = useState("")
  return (
    <div>
        <Header/>
         <main>
            <div className='search-filter-container'>
            <SearchBar setQuery={setQuery}/>
            <SelectMenu/>
            </div>
            <CountriesList query={query}/>
         </main>
    </div>
  )
}

export default App