import PropTypes from 'prop-types';
const imgUrl = process.env.PUBLIC_URL + '/images/loc.png';

export default function Card({ item }) {
  return (
    <div className="card">
      <img src={item.coverImg} alt={item.locationName} className="card--image" />
      <div className="card--infoArea">
        <div className="card--location">
          <img src={imgUrl} alt="Location icon" className="card--locationImg" /> 
          <p className="country">{item.country}</p>
          <a href={item.gLink} className="card--gLink" target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a> 
        </div>
        <div className="card--info">
          <p className="locName">{item.locationName}</p>
          <p className="travelDates">{item.travelDates}</p>
          <p className="desc">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    coverImg: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    gLink: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired,
    travelDates: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};