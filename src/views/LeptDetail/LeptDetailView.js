import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import LeptDetailComp from '../../components/LeptDetail/LeptDetailComp';
import { fetchLeptDetail } from '../../services/fetch';

export default function LeptDetailView() {
  const [leptDetail, setLeptDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();
  const id = pathname.slice(6);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchLeptDetail(id);
      setLeptDetail(resp);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1>LOADING...</h1>;

  return (
    <div>
      <LeptDetailComp leptDetail={leptDetail} />
    </div>
  );
}
