import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchLeptDetail } from '../services/fetch';

export default function useDetailView() {
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

  return [leptDetail, loading];
}
