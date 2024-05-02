import React from "react";
import Aboutusimage from "../assets/pexels-torsten-dettlaff-59720.jpg";
import ProfileImage from "../assets/blank-profile-picture-973460_1280.png";
const people = [
  {
    name: "Yuvraj Jadav",
    role: "Intern",
  },
  {
    name: "Yash Shinde",
    role: "Intern",
  },
  {
    name: "Arayan Kumar",
    role: "Intern",
  },
  {
    name: "Rohini Phatangare",
    role: "Intern",
  },
];

function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={Aboutusimage}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About our project
          </h2>
          <p className="mt-6 text-lg leading-8 text-white-300">
            Welcome to The Toywala, a treasure trove of children’s toys, games,
            and gifts. With many years experience in the toy trade, we decided
            to take the plunge and open our first online application. Our aim
            was to create a magical space for kids (and kids at heart), where
            they could touch, feel, play and interact with the toys they see. To
            create an experience, not just a shopping trip. To supply our valued
            customer with toys of the highest quality and value for money.
          </p>
          <p className="mt-6 text-lg leading-8 text-white-300">
            Our range of toys has been sourced from my own experience as a
            mother of 3 children and an Aunty of 20 nieces and nephews. From
            beautiful wooden toys, scooters, art and craft sets, games, puzzles,
            books, dress up sets, STEM toys we want to feed the children’s
            imagination and encourage learning through play. We also stock a
            lovely range of baby and christening gifts, the softest 100% Cotton
            blankets, essential bandanna bibs, beautiful wooden music boxes and
            lots more.
          </p>
          <p className="mt-6 text-lg leading-8 text-white-300">
            Our experienced and knowledgeable staff love guiding customers to
            the perfect gift. We believe excellent customer service is essential
            and makes for a much happier shopping experience. With a gift
            wrapping and card service, it’s a one-stop shop. Whether you are
            visiting our shop in the heart of Malahide Village or shopping
            online www.thetoyshoponline.ie we hope you experience a little bit
            of magic.
          </p>
        </div>
        <h2 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {" "}
          our Team{" "}
        </h2>
        <div className="mt-6  py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={ProfileImage}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
