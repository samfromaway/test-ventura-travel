import React, { useState, useEffect } from 'react';
import './App.css';
import Trips from './components/Trips';

function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // For better error handling I would use AXIOS
    fetch('http://localhost:3000/api/v1').then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          setTrips(data);
        });
      } else throw new Error('Error in fetch');
    });
  }, []);

  return (
    <>
      {trips.length === 0 && (
        <h1>
          Nothing found{' '}
          <span role="img" aria-label="sad">
            😥
          </span>
        </h1>
      )}
      {trips.map((trip) => (
        <Trips
          key={trip.id}
          title={trip.title}
          price={trip.price.toLocaleString()}
          desc={trip.desc}
          img={trip.img}
        />
      ))}
    </>
  );
}

export default App;
