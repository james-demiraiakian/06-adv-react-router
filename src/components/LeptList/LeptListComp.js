import React from 'react';

export default function LeptListComp({ lept }) {
  return (
    <div className="lept-card">
      <img src={lept.taxon.default_photo.square_url} />
      <div>{lept.taxon.english_common_name}</div>
    </div>
  );
}
