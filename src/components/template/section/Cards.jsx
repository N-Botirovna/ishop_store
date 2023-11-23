import React from 'react'
import Card from '../../ui/Card'
import "./Cards.css"

const Cards = () => {

    return (
        <>
            {/* <ul>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.png}
            population={country.population}
            reg={country.region}
            cap={country.capital}
            darkMode={darkMode}
          />
        ))}
      </ul> */}

            <ul className='products'>
                {Array.from({ length: 8 }).map((_, index) => (
                    <Card key={index} />
                ))}
            </ul>
        </>

    )
}

export default Cards