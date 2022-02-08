import React from 'react';
import LeptDetailComp from '../../components/LeptDetail/LeptDetailComp';
import useDetailView from '../../hooks/useDetailView';

export default function LeptDetailView() {
  const [leptDetail, loading] = useDetailView();
  // const [leptDetail, setLeptDetail] = useState({});
  // const [loading, setLoading] = useState(true);

  // const { pathname } = useLocation();
  // const id = pathname.slice(6);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resp = await fetchLeptDetail(id);
  //     setLeptDetail(resp);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [id]);

  if (loading) return <h1>LOADING...</h1>;

  return (
    <div>
      <LeptDetailComp leptDetail={leptDetail} />
    </div>
  );
}
