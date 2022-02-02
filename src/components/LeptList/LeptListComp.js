import React from 'react';
import './LeptListComp.css';

export default function LeptListComp({ lept }) {
  return (
    <div className="buttermoth-stick">
      <img src={lept.taxon.default_photo.square_url} />
      <div>{lept.taxon.english_common_name}</div>
    </div>
  );
}
