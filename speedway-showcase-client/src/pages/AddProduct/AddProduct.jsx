import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const Brand = form.get("brand_name");
        const Type = form.get("car_type");
        const Car_Name = form.get("car_name");
        const Price = form.get("price");
        const Model = form.get("model");
        const Photo = form.get("photo");
        const rating = form.get("rating");
        const description = form.get("description");
        // console.log(Brand, Type, Car_Name, Price, Model, Photo);
        const newProduct = {Brand, Type, Car_Name, Price, Model, Photo, rating, description}

        // send data to the server
        fetch('http://localhost:5000/cars',{
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'success',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
  return (
    <div className="my-24 mx-auto max-w-5xl bg-gray-300 md:rounded-lg p-6">
      <h2 className="text-center text-5xl font-bold my-3">Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <div className=" md:flex mx-auto">
          <div className="mx-auto">
            <div className="my-3">
              <h2 className="text-lg font-semibold">Brand Name</h2>
              <input
                className="p-3 w-96 rounded"
                type="text"
                name="brand_name"
                id=""
              />
            </div>
            <div className="my-3">
              <h2 className="text-lg font-semibold">Car Type</h2>
              <input
                className="p-3 w-96 rounded"
                type="text"
                name="car_type"
                id=""
              />
            </div>
            <div className="my-3">
              <h2 className="text-lg font-semibold">Car Name</h2>
              <input
                className="p-3 w-96 rounded"
                type="text"
                name="car_name"
                id=""
              />
            </div>
            <div className="my-3">
              <h2 className="text-lg font-semibold">Description</h2>
              <input
                className="p-3 w-96 rounded"
                type="text"
                name="description"
                id=""
              />
            </div>
          </div>
          <div className="mx-auto">
            <div className="my-3">
              <h2 className="text-lg font-semibold">Price</h2>
              <input
                className="p-3 w-96 rounded"
                type="text"
                name="price"
                id=""
              />
            </div>
            <div className="my-3">
              <h2 className="text-lg font-semibold">Car Model</h2>
              <input
                className="p-3 w-96 rounded"
                type="text"
                name="model"
                id=""
              />
            </div>
            <div className="my-3">
              <h2 className="text-lg font-semibold">Photo URL</h2>
              <input
                className="p-3 w-96 rounded"
                type="text"
                name="photo"
                id=""
              />
            </div>
            <div className="my-3">
              <h2 className="text-lg font-semibold">Rating</h2>
              <input
                className="p-3 w-96 rounded"
                type="text"
                name="rating"
                id=""
              />
            </div>
          </div>
          
        </div> 
          <div className="md:max-w-[870px] sm:max-w-xl mx-auto my-6">
          <input className="btn btn-block btn-success" type="submit" value="ADD PRODUCT" />
          </div>
      </form>
    </div>
  );
};

export default AddProduct;
