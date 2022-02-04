import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeptListComp from '../../components/LeptList/LeptListComp';
import { fetchLept } from '../../services/fetch';
import './LeptListView.css';

export default function LeptListView() {
  const [leptList, setLeptList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => --prevState);
      setLoading(true);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchLept(currentPage, search);
      setLeptList(resp);
      setLoading(false);
    };
    fetchData();
  }, [currentPage, search]);

  if (loading) return <h1>LOADING...</h1>;

  return (
    <div>
      <div className="pages">
        <button disabled={currentPage === 1} onClick={previousPage}>
          Back
        </button>
        <div className="page-disp">Page {currentPage}</div>
        <button disabled={leptList.length < 500} onClick={nextPage}>
          Next
        </button>
      </div>
      <div className="search">
        Search returns results that match the input AND related results, as determined by the API.
      </div>
      <div className="search">
        <input
          placeholder="Search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="buttermoth-box">
        {leptList.results.map((lept) => {
          return (
            <Link key={lept.taxon.id} to={`/lept/${lept.taxon.id}`}>
              <LeptListComp lept={lept} />
            </Link>
          );
        })}
      </div>
      <div className="pages">
        <button disabled={currentPage === 1} onClick={previousPage}>
          Back
        </button>
        <div className="page-disp">Page {currentPage}</div>
        <button disabled={leptList.length === 500} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}
