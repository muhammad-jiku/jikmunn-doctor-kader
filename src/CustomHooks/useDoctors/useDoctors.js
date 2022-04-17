import { useEffect, useState } from 'react';

const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('doctorsDetails.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.log(err));
  }, []);

  return [doctors];
};

export default useDoctors;
