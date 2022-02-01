import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

export default function LeptDetailView() {
  const [lept, setLept] = useState([]);
  const { pathname } = useLocation();
  const id = pathname.slice(6);
  console.log(id);

  useEffect(() => {});

  return (
    <div>
      <Route exact path="/">
        <Link to="/">Home</Link>
      </Route>
    </div>
  );
}
