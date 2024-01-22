import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SinglePage.css';

function SinglePage() {
  const { id } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: {},
    error: false,
  });

  useEffect(() => {
    axios
      .get(`http://164.92.99.180:8000/pro/one/${id}`)
      .then((res) => {
        setState({
          isFetched: true,
          data: res.data,
          error: false,
        });
      })
      .catch((err) => {
        setState({
          isFetched: true,
          data: {},
          error: true,
        });
      });
  }, [id]);

  const { isFetched, data, error } = state;

  if (!isFetched) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching data.</p>;
  }

  console.log(data);
  return (
    <div className="single-page">
      <h2 className="single-page-title">Product Title</h2>
      <p>Quantity: {data.quantity}</p>
      <p>Cost: {data.cost}</p>
      <p>Time: {data.time}</p>
      <p>Prosent: {data.prosent}</p>
      <p>Admin: {data.admin}</p>
    </div>
  );
}

export default SinglePage;