import { useEffect, useState } from "react";
import img from "../../assets/Questions.png";

const WhyChooseUs = () => {
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    fetch("/whyChooseUsData.json")
      .then((res) => res.json())
      .then((data) => setReasons(data));
  }, []);

  return (
    <div className="flex flex-wrap-reverse justify-center items-center gap-10 my-12 p-6 bg-gray-50 rounded-xl shadow-lg">
      {/* Text Content */}
      <div className="flex-grow space-y-6 max-w-xl">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl font-poppins font-semibold text-primary mb-2">
              {reason.title}:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="mx-auto">
        <img
          className="w-[500px] h-[300px] object-cover rounded-lg shadow-md"
          src={img}
          alt="Why Choose Us"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
