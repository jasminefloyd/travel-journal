// Building out the structure of the card that will display on the page
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";

const TravelData = () => {
  const [travelData, setTravelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "travelData"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTravelData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {travelData.map(data => (
        <div key={data.id} className="card">
          <img src={data.coverImg} alt={data.locationName} className="card--image" />
          <div className="card--infoArea">
            <div className="card--info">
              <h2 className="locName">{data.locationName}</h2>
              <p className="country">{data.country}</p>
              <p className="travelDates">{data.travelDates}</p>
              <p className="desc">{data.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelData;



