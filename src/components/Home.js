import React from "react";
import "boxicons";
import pix1 from "../images/imagesec1.png";
import pix2 from "../images/imagesec2.png";
import pix3 from "../images/Framesec3.png";
import listimg1 from "../images/Frame1.png";
import listimg2 from "../images/Frame2.png";
import listimg3 from "../images/Frame3.png";
import listimg4 from "../images/Frame4.png";
import SecondCard from "./SecondCard";
import Clients from "./Clients";
import ClienDetails from "./ClienDetails";
import Footer from "./Footer";

const list = [
  {
    image: listimg4,
    title: "User friendly",
    body: [
      "Upgrade user experience",
      " Retain happier cutomers",
      "Friendly user plans ",
    ],
  },
  {
    image: listimg2,
    title: "Trusted setup",
    body: [
      "High customer retention rate",
      "No downtimes using tools",
      "No bounce rate",
    ],
  },
  {
    image: listimg1,
    title: "Accountable",
    body: [
      "Make right decisions per time",
      "Track results in realtime",
      "Detailed account setup",
    ],
  },
  {
    image: listimg3,
    title: "Sweet rates",
    body: [
      "Get right value for money",
      "Track financial progress",
      "Fair pricing rates",
    ],
  },
];

const newList = list.map((item) => {
  return <SecondCard key={item.title} item={item} />;
});

const client = ClienDetails.map((detail) => detail);

const Home = () => {
  return (
    <>
      <section>
        <div className="md:flex px-8 lg:px-14 py-10 lg:py-10 gap-10 items-center">
          <div className="md:w-10/12">
            <h1 className=" text-center md:text-left md:w-5/6">
              Work more{" "}
              <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-will1 to-will2">
                Structured
              </span>{" "}
              and stay{" "}
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-will1 to-will2">
                Organized
              </span>{" "}
            </h1>
            <p className="text-center md:text-left md:w-5/6 mt-8 leading-7">
              With this platform you can prioritize your daily tasks so that
              your activites become efficient, well kept and on track while also
              managing teams better.
            </p>
            <div className="flex items-center md:gap-3 mt-6">
              <box-icon name="envelope"></box-icon>
              <input
                type="email"
                className="bg-gray-100 mx-1 md:text-lg indent-2 p-1 rounded-md"
                placeholder="Enter email address"
              />
              <button className="bg-gradient-to-r from-will1 to-will2 px-1 md:px-3 md:py-2 rounded-lg text-sm text-white">
                Start Free Trial
              </button>
            </div>
          </div>
          <div className="mt-4 md:mt-0 w-11/12">
            <img src={pix1} alt="will" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-green-50 to-green-100 flex flex-col md:flex-row items-center justify-between w-full px-8 lg:px-14 py-8 lg:py-20">
        {newList}
      </section>

      <section className="md:flex px-8 lg:px-14 py-8 lg:py-20 md:items-center">
        <div className="w-full">
          <h1 className="md:leading-10 text-stone-800 text-lg md:text-4xl">
            Features that make user experienes to make more meaning.
          </h1>
          <p className="md:w-3/4 text-gray-500 leading-7 mt-7">
            Has collaborative features that bring team experience to life and
            bring out the most through daily tracking and perfomance checks and
            daily progress reports
          </p>
          <button className="bg-gradient-to-r from-will1 to-will2 mt-7 px-2 md:px-7 py-2 md:py-3 rounded-lg text-sm text-white">
            Start Free Trial
          </button>
        </div>
        <div className="w-full my-6 md:my-0">
          <img src={pix2} alt="girl" />
        </div>
      </section>

      <section>
        <h3 className="text-stone-800 text-center p-4 font-bold">
          How does it work?
        </h3>
        <div className="md:flex bg-gradient-to-b from-pink-50 to-white md:items-center px-8 lg:px-4 py-8 lg:py-0">
          <div className="w-full relative">
            <img src={pix3} width="725" height="432" alt="pix" />
          </div>
          <div className="md:w-2/5 md:px-16 py-1 md:mx-4 bg-white rounded-2xl md:right-10 md:absolute">
            <h3 className="text-stone-700 font-bold">
              {" "}
              Manage your tasks quickly
            </h3>
            <p className="leading-7 text-gray-500">
              We have redefined how project management works, bringing to the
              fray top-tier features, with updates on a daily basis.
            </p>
          </div>
        </div>
      </section>

      <section className="md:flex items-center bg-gradient-to-b from-white to-green-100 px-8 lg:px-14 py-8 lg:py-20 mt-6">
        <div className="w-full">
          <h2 className="md:w-4/6 mb-3 font-bold  text-2xl md:text-4xl text-gray-800">
            Hear what our clients are saying
          </h2>
          <p className="md:w-4/6 text-gray-600 leading-7">
            Over the past decade we have given our very best toward customer
            satisfaction. Our results defiinately have its own voice.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-3 gap-8">
          <div className="md:col-start-2 md:col-span-2">
            <Clients
              image={pix1}
              name={client[0]["name"]}
              company={client[0]["company"]}
              comment={client[0]["comment"]}
            />
          </div>
          <div className="md:col-span-2">
            <Clients
              image={pix2}
              name={client[1]["name"]}
              company={client[1]["company"]}
              comment={client[1]["comment"]}
            />
          </div>
          <div className="md:col-start-2 md:col-span-2">
            <Clients
              image={pix3}
              name={client[2]["name"]}
              company={client[2]["company"]}
              comment={client[2]["comment"]}
            />
          </div>
        </div>
      </section>

      <footer className="px-8 lg:px-14 py-8 lg:py-20">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
