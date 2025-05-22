import { useEffect, useState } from "react";

const VideoTour = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/videos.json")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <section className="w-full bg-slate-300 py-16 my-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-poppins font-bold text-center">
            Virtual Walkaround
          </h2>
          <p className="text-gray-600 mt-2">
            Watch detailed walkthroughs to get a real feel of our vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-cyan-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-64 md:h-96 rounded-t-lg border-0"
                  src={video.videoUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {video.title}
                </h3>
                <p className="text-sm font-bold text-gray-500 dark:text-gray-300 mt-1">
                  Model: {video.car}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTour;
