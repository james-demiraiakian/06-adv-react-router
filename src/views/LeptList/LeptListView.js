import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import LeptListComp from '../../components/LeptList/LeptListComp';
import { fetchLept } from '../../services/fetch';
import LeptDetailView from '../LeptDetail/LeptDetailView';

export default function LeptListView() {
  const [leptList, setLeptList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = async () => {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => --prevState);
      setLoading(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchLept();
      setLeptList(resp);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>LOADING...</h1>;

  return (
    <div>
      {console.log(leptList.results)}
      {leptList.results.map((lept) => {
        return (
          <Link key={lept.taxon.id} to={`/lept/${lept.taxon.id}`}>
            <LeptListComp lept={lept} />
          </Link>
        );
      })}
      <Route to={`/lept/:leptID`}>
        <LeptDetailView />
      </Route>
    </div>
  );
}
