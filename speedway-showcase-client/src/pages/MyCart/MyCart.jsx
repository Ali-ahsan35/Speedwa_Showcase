import emptyCartImg from "../../assets/empty-cart.png";
import { useCart } from "../../Providers/CartContext"; // adjust path

const MyCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 bg-gradient-to-br dark:from-[#1f2937] dark:to-[#111827] py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        My Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src={emptyCartImg}
            alt="Empty Cart"
            className="w-[300px] h-auto object-contain mb-6"
          />
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((car) => (
              <div
                key={car._id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col"
              >
                <img
                  src={car.Photo}
                  alt={car.Car_Name}
                  className="h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {car.Brand} - {car.Car_Name}
                </h3>
                <p className="mb-2">
                  <strong>Price:</strong> {car.Price} tk
                </p>
                <button
                  onClick={() => removeFromCart(car._id)}
                  className="mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <button
              onClick={clearCart}
              className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;
