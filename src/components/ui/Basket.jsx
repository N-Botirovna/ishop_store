import React, { useState, useEffect } from 'react';
import { UilShoppingCart } from '@iconscout/react-unicons';

export default function BasketIcon({p}) {
  const [isBuy, setIsBuy] = useState(false);

  useEffect(() => {
    console.log("isBuy:", isBuy);
  }, [isBuy]);

  const handleClick = () => {
    setIsBuy(true);
    console.log("clicked");
  };

  return (
    <span onClick={handleClick}>
      <UilShoppingCart />
      {p}
    </span>
  );
}