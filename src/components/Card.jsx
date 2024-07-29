// Building out the structure of the card that will display on the page
import { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';

const TravelData = () => {
  const [travelData, setTravelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from('travelData')
        .select('*');
        
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setTravelData(data);
      }
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
              <p className="travelDates">{data.startDate}-{data.endDate}</p>
              <p className="desc">{data.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelData;















// import PropTypes from 'prop-types';

// export default function Card(props) {

// return (
//     <div className="card">
//         <img src={`./src/assets/${props.item.coverImg}`} className="card--image" />
//         <div className='card--infoArea'>
//             <div className='card--location'>
//                 <img src={`./src/assets/loc.png`} className="card--locationImg" />
//                 <p className='country'>{props.item.country}</p>
//                 <a href="${props.item.gLink}" className='card--gLink'>View on Google Maps</a>
//             </div>
//             <div className='card--info'>
//                 <p className='locName'>{props.item.locationName}</p>
//                 <p className='travelDates'>{props.item.travelDates}</p>
//                 <p className='desc'>{props.item.description}</p>
//             </div>
//         </div>
//     </div>
// );
// }





// Card.propTypes = {
//     item: PropTypes.shape({
//         coverImg: PropTypes.string.isRequired,
//         country: PropTypes.string.isRequired,
//         gLink: PropTypes.string.isRequired,
//         locationName: PropTypes.string.isRequired,
//         travelDates: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired
//     }).isRequired
// };