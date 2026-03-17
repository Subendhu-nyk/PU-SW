import { Play } from "lucide-react";
import Odisha_People from "@/assets/images/Odisha_People.jpg";
import Care_Education from "@/assets/images/Care_Education.png";

const AnniversaryHero = () => {
  return (
    <section className="w-full bg-[#f5f6f7] py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* EXACT reference style layout */}
        <div className="flex flex-col lg:flex-row items-center gap-24">

          {/* ================= LEFT ================= */}
          <div className="flex flex-col items-start max-w-lg">

            {/* 12 YEARS graphic (image inside number style) */}
            <div
              className="
                text-[240px]
                font-extrabold
                leading-none
                bg-cover
                bg-center
                bg-clip-text
                text-transparent
                m-auto
              "
              style={{ backgroundImage: `url(${Care_Education})` }}
            >
              12
            </div>

            <p className="m-auto text-3xl tracking-widest text-gray-600 -mt-4 font-serifNoto font-normal italic">
              Years Of
            </p>

            <h2 className="m-auto text-6xl font-serif text-5xl font-extrabold text-gray-900 mt-1 ps-10">
              BELIEF
            </h2>

            {/* description */}
            <p className="font-merriweather font-light text-slate-700 mt-4 text-lg leading-relaxed">
              We’re celebrating <span className="font-semibold">12 years</span> of dedication
              and trusting our mission with a worldwide vision:
              <span className="font-bold">
                {" "}ending extreme poverty for children everywhere.
              </span>
            </p>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative w-full lg:w-[55%]">

            <img
              src={Odisha_People}
              alt="children"
              className="w-full h-[520px] object-cover rounded-[40px]"
            />

            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[40px]"></div>

            {/* play button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-orange-500 hover:bg-orange-600 p-7 rounded-full shadow-xl">
                <Play className="w-9 h-9 text-white fill-white" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnniversaryHero;
