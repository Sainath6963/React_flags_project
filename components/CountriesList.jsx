import React from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard'

const CountriesList = ({query}) => {
  return (
    <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        )
      })}
    </div>
  )
}

export default CountriesList