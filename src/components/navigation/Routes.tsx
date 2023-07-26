import { useEffect } from 'react';
import PrivateLayout from '../layouts/Private.Layout';
import { useNavigate } from "react-router-dom";
import n from '../navigation/Route.Names'

function RoutesScreeen() {

  const navigate = useNavigate();

  useEffect(() => {
    //navigate(n.START)
  }, [])


  return (
    <div>
      <PrivateLayout />
    </div>
  );
}

export default RoutesScreeen
