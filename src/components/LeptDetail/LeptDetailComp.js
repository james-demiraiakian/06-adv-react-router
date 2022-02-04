import React from 'react';
import { useHistory } from 'react-router-dom';
import './LeptDetailComp.css';

export default function LeptDetailComp({ leptDetail }) {
  const { english_common_name, name, wikipedia_url, extinct } = leptDetail.results[0].taxon;
  const medium_url = leptDetail.results[0].taxon.default_photo?.medium_url;
  const history = useHistory();

  function goHome() {
    history.push('/');
  }

  return (
    <div className="buttermoth-details">
      <button onClick={goHome}>Home</button>
      <h1>{english_common_name}</h1>
      <img src={medium_url} />
      <div>{name}</div>
      <a className="buttermoth-link" href={wikipedia_url}>
        {wikipedia_url}
      </a>
      {extinct ? <div>Extinct</div> : <div>Not Extinct</div>}
    </div>
  );
}
