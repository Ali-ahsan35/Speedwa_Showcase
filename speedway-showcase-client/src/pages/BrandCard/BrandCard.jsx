import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  const { name, image } = brand;
  return (
    <Link to={`/branddetails/${name}`}>
      <>
        <div className="card rounded bg-white shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl h-[300px] w-[400px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title bg-slate-500 w-72 text-center py-3 border-2 justify-center border-black rounded-lg text-white">
              {name}
            </h2>
          </div>
        </div>
      </>
    </Link>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BrandCard;
