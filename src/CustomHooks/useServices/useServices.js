import { useEffect, useState } from 'react';

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('serviceDetails.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return [services];
};

export default useServices;
