import React, { useEffect, useState } from 'react';
import { UilHeart } from '@iconscout/react-unicons';

export default function Heart({ p }) {
  const [is_like, setIs_like] = useState(false);

  useEffect(() => {
    console.log("is_like:", is_like);
  }, [is_like]);

  const handleClick = () => {
    setIs_like(prevState => !prevState);
    console.log("clicked like");
  };

  return (
    <span onClick={handleClick}>
      <UilHeart style={{ fill: is_like ? "red" : "" }} />
      {p}
    </span>
  );
}
