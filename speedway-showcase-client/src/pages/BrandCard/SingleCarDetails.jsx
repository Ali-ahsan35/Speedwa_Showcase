import { useLoaderData } from "react-router-dom";
import { useCart } from "../../Providers/CartContext";
import Swal from "sweetalert2";

const SingleCarDetails = () => {
  const car = useLoaderData();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(car); // Add car to cart context

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${car.Car_Name} has been added to your cart.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-20 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <img
          src={car.Photo}
          alt={car.Car_Name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">
          {car.Brand} - {car.Car_Name}
        </h1>
        <p className="text-lg mb-2">
          <strong>Type:</strong> {car.Type}
        </p>
        <p className="text-lg mb-2">
          <strong>Model:</strong> {car.Model}
        </p>
        <p className="text-lg mb-2">
          <strong>Price:</strong> {car.Price} tk
        </p>
        <p className="text-lg mb-6">
          <strong>Rating:</strong> {car.rating}
        </p>
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="mb-8">{car.description}</p>

        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleCarDetails;
