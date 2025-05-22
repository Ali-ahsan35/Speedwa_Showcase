import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CarCard = ({ car }) => {
  const {
    Brand,
    Type,
    Car_Name,
    Price,
    Model,
    Photo,
    rating,
    _id,
  } = car;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
      <img
        src={Photo}
        alt={Car_Name}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{Car_Name}</h3>
        <p className="text-sm text-gray-500">
          Brand: <span className="font-medium text-gray-700">{Brand}</span>
        </p>
        <p className="text-sm text-gray-500">
          Type: <span className="font-medium text-gray-700">{Type}</span>
        </p>
        <p className="text-sm text-gray-500">
          Model: <span className="font-medium text-gray-700">{Model}</span>
        </p>
        <p className="text-sm text-gray-500">
          Rating:{" "}
          <span className="font-medium text-yellow-500">{rating} ★</span>
        </p>
        <p className="text-lg font-semibold text-gray-800">Price: {Price} ৳</p>

        <div className="flex justify-between pt-4">
          <Link to={`/singlecardetails/${_id}`}>
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-200">
              View Details
            </button>
          </Link>
          <Link to={`/updatecar/${_id}`}>
            <button className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition duration-200">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    Brand: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Car_Name: PropTypes.string.isRequired,
    Price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    Model: PropTypes.string.isRequired,
    Photo: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarCard;
