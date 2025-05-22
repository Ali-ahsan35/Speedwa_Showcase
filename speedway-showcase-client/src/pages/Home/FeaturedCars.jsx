import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/featuredCars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <section className="py-16 my-10 bg-gradient-to-br from-sky-300 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-poppins font-bold text-center">
          Featured Vehicles
        </h2>
        <p className="text-gray-600 mb-10">
          Explore our top trending, most-viewed cars!
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-52 w-full object-cover rounded-t-md"
              />
              <div className="p-4 text-left space-y-2">
                <h3 className="text-lg font-semibold text-primary">
                  {car.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {car.year} • {car.type}
                </p>
                <p className="text-sm text-gray-600">
                  Mileage: {car.mileage}
                </p>
                <p className="font-bold text-primary text-lg">{car.price}</p>
                <Link
                  to={`/car/${car.id}`}
                  className="inline-block mt-2 bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-10">
          <Link
            to="/all-cars"
            className="inline-block bg-slate-700 hover:bg-slate-900 text-white py-3 px-6 rounded-lg font-medium transition"
          >
            View All Listings
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedCars;
