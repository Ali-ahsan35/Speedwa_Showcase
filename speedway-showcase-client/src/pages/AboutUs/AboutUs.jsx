import aboutUsImg from "../../assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-[#1f2937] dark:to-[#111827] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src={aboutUsImg}
            alt="About Us"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover ring-4 ring-white dark:ring-slate-700"
          />
        </div>

        {/* Text */}
        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-10 transition-all duration-300">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-cyan-400">Us</span>
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-5">
            At <span className="font-semibold text-blue-600 dark:text-cyan-400">Speedway Showcase</span>, we are driven by a passion for performance and style. Our mission is to connect you with vehicles that match your personality and lifestyle.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-5">
            Every car is handpicked and inspected to ensure top-tier quality and reliability. Whether you are a daily driver or a weekend warrior, we’ve got something special waiting for you.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
            Join our community of car lovers and experience a smoother, smarter way to find your perfect ride. The road ahead starts here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
