import React from 'react'
import Card from '../../ui/MyCard'
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

// import React, { useEffect, useState } from 'react';
// import Card from '../../ui/Card';
// import "./Cards.css";
// import axios from 'axios';

// const Cards = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('https://nazimjonovna.pythonanywhere.com/', {
//                 mode: 'cors'
//               });
//             setData(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <>
//             <ul className='products'>
//                 {data.slice(0, 8).map((product, index) => (
//                     <Card key={index} product={product} />
//                 ))}
//             </ul>
//         </>
//     );
// };

// export default Cards;