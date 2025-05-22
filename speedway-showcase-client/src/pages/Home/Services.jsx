import img1 from "../../assets/car-trade.png";
import img2 from "../../assets/maintenance.png";
import img3 from "../../assets/repair-man.png";
import img4 from "../../assets/car_paint.png";

const Services = () => {
  return (
    <div className="my-7 flex flex-wrap justify-center gap-4">
      <div className="card bg-base-300 dark:bg-slate-50 dark:text-black w-72 shadow-xl rounded">
        <figure className="px-10 pt-10">
          <img src={img1} className="rounded-xl h-28 w-32" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Car Trade</h2>
          <p>
            Rev up your options with our premier car trade service, where we
            make buying and selling vehicles a seamless and rewarding experience
          </p>
        </div>
      </div>
      <div className="card bg-base-300 dark:bg-slate-50 dark:text-black w-72 shadow-xl rounded">
        <figure className="px-10 pt-10">
          <img src={img2} className="rounded-xl h-28 w-32" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Parts Repairing</h2>
          <p>
            Rev up your options with our premier car trade service, where we
            make buying and selling vehicles a seamless and rewarding experience
          </p>
        </div>
      </div>
      <div className="card bg-base-300 dark:bg-slate-50 dark:text-black w-72 shadow-xl rounded">
        <figure className="px-10 pt-10">
          <img src={img3} className="rounded-xl h-28 w-32" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Expert Certified Mechanics</h2>
          <p>
            Rev up your options with our premier car trade service, where we
            make buying and selling vehicles a seamless and rewarding experience
          </p>
        </div>
      </div>
      <div className="card bg-base-300 dark:bg-slate-50 dark:text-black w-72 shadow-xl rounded">
        <figure className="px-10 pt-10">
          <img src={img4} className="rounded-xl h-28 w-32" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Genuine Spares Parts</h2>
          <p>
            Rev up your options with our premier car trade service, where we
            make buying and selling vehicles a seamless and rewarding experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
