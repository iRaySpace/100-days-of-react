import React from 'react';

function CryptoCard(props) {
  const { header, name, marketCap, price, volume, circulating, change } = props;

  let className = header ? "App-crypto-card header" : "App-crypto-card";

  return (
    <div className={className}>
      <div className="__column text-bold text-left">{name}</div>
      <div className="__column text-right">{marketCap}</div>
      <div className="__column text-right">{price}</div>
      <div className="__column text-right">{volume}</div>
      <div className="__column text-right">{circulating}</div>
      <div className="__column text-right">{change}</div>
    </div>
  );
}

export default CryptoCard;
