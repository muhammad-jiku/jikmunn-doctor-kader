import { useEffect, useState } from 'react';

const useFeedBack = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('patientsFeedback.json')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.log(err));
  }, []);

  return [feedbacks];
};

export default useFeedBack;
