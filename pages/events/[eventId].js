import Image from "next/image";
import { useRouter } from "next/router";
import { technicalEvents } from "../../assets/events";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../backend/useAuth";
import { db } from "../../backend/firebase";
import Error from "next/error";
const EventDescription = () => {
  const router = useRouter();
  const { user } = useAuth();

  const { eventId } = router.query;

  const event = technicalEvents.find((event) => event.id == eventId);
  console.log(event);

  if (!event || event == undefined) {
    return <Error statusCode={404} />;
  }

  const addToCart = async () => {
    if (user) {
      setDoc(
        doc(db, "students", user.uid, "cart", `${event.id}`),
        {
          name: event.eventName,
          price: event.entryFee,
          time: event.time,
          venue: event.venue,
          date: event.date,
        },
        {
          merge: true,
        }
      )
        .then(() => {
          console.log("Added to cart");
        })
        .catch(console.warn);
    } else {
      alert("Please Login");
    }
  };

  return (
    <div className="min-h-screen mt-20 w-full bg-black font-montserrat">
      <Image
        alt=""
        className="lg:p-15 md:p-10 pb-5 w-full md:rounded-[3.5rem]"
        src={require("../../assets/images/event-desc-blank.jpg")}
      />

      <div className="lg:p-20 p-5 pt-0 lg:pt-0 text-lg font-semibold">
        <p
          onClick={() => router.push("/events")}
          className="text-[#FF6240] cursor-pointer underline underline-[#FF6240]"
        >
          Back to all events
        </p>
        <div className="mt-5 flex flex-col md:flex-row gap-3 justify-between md:items-center">
          <div>
            <h1 className="text-white text-2xl md:text-4xl lg:text-6xl">
              {event?.eventName}
            </h1>
            <p className="text-[#747474] capitalize text-xs md:text-sm lg:text-lg">
              By {event?.clubName}
            </p>
          </div>
          <button
            onClick={addToCart}
            className="bg-red-500 px-4 py-2 rounded-lg text-white"
          >
            Add Ticket to Cart
          </button>
        </div>
        <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 justify-between my-10">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <p className="text-white font-light">{event?.date}</p>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-white font-light">{event?.time}</p>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <p className="text-white font-light">{event?.venue}</p>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-white text-3xl">Event Description</h1>
          <p className="text-white font-light mt-3">
            Voluptate consectetur aute excepteur est cillum nisi esse sit ad non
            aliquip consectetur quis voluptate. Dolor mollit mollit elit
            reprehenderit est. Tempor eu magna mollit officia ea aliquip
            exercitation minim laborum anim veniam ut. Voluptate consectetur
            aute excepteur est cillum nisi esse sit ad non aliquip consectetur
            quis voluptate. Dolor mollit mollit elit reprehenderit est. Tempor
            eu magna mollit officia ea aliquip exercitation minim laborum anim
            veniam ut. Voluptate consectetur aute excepteur est cillum nisi esse
            sit ad non aliquip consectetur quis voluptate. Dolor mollit mollit
            elit reprehenderit est. Tempor eu magna mollit officia ea aliquip
            exercitation minim laborum anim veniam ut.
          </p>
        </div>
        <div className="my-10">
          <h1 className="text-white text-3xl">Event Rules</h1>
          <p className="text-white font-light mt-3">{event?.rules}</p>
        </div>
        <div className="my-10 space-y-10 md:space-y-0 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <div className="items-center space-x-1 hidden md:inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-white">Entry Fee: Rs. {event?.entryFee}</p>
            </div>
            <button className="text-white hidden md:block mt-2 px-3 py-2 bg-red-500 rounded-lg">
              Register Now
            </button>
            <button className="text-white md:hidden mt-2 px-3 py-2 bg-red-500 rounded-lg">
              Register Now for Rs. {event?.entryFee}
            </button>
          </div>
          <div className="text-white">
            <h1>Student Coordinators</h1>
            {event?.studentCo.map((student, index) => (
              <p key={index} className="font-light">
                {index + 1}) {student}
              </p>
            ))}
          </div>
          <div className="text-white">
            <h1>Staff Coordinators</h1>
            {event?.staffCo.map((staff, index) => (
              <p key={index} className="font-light">
                {index + 1}) {staff}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
