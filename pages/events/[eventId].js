import Image from "next/image";
import { useRouter } from "next/router";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAuth } from "../../backend/useAuth";
import { db } from "../../backend/firebase";
import Error from "next/error";
import { useEffect, useState, useRef } from "react";
import { Modal } from "antd";
import { collection, query, where, getDocs } from "firebase/firestore";

const EventDescription = () => {
  const { userDb } = useAuth();
  const [participants, setParticipants] = useState(Array(10).fill("none"));
  const router = useRouter();
  const { user, api } = useAuth();
  const { eventId } = router.query;
  const [event, setEvent] = useState([]);
  const [cart, setCart] = useState(null);
  // console.log(cart);
  const [extraMember, setExtraMember] = useState(0);

  const getEventDetails = async () => {
    if (!eventId) return;
    const docRef = doc(db, "events", eventId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setEvent({ ...docSnap.data(), id: doc.id });
      // console.log({...docSnap.data(), id:doc.id});
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const cart = JSON.parse(localStorage.getItem("cart"));
      setCart(cart);
    }
  }, []);

  useEffect(() => {
    getEventDetails();
  }, [eventId]);

  if (!event || event == undefined) {
    return <Error statusCode={404} />;
  }

  const addToCart = async () => {
    console.log(user);
    if (!user) {
      api["error"]({
        message: "Login",
        description: "Please login to continue",
        placement: "bottomRight",
      });
    } else {
      if (event?.min == 1 && event?.max == 1) {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            {
              eventId: event.id,
              eventName: event.name,
              eventVenue: event.venue,
              eventDate: event.date,
              eventBanner: event.banner,
              eventOrganization: event.organised,
              participants: [userDb.texusId],
            },
          ])
        );
      } else {
        showModal();
      }
    }
  };

  const formRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const form = formRef.current;
    let inputs = [];
    for (let i = 0; i < event?.min; i++) {
      inputs.push(form[i]);
    }
    inputs.forEach((_, i) => {
      if (inputs[i].value == "") {
        api["error"]({
          message: "Error",
          description: "Please enter a valid Texus ID",
          placement: "bottomRight",
        });
      } else {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
          const index = cart.findIndex((item) => item.eventId == event.id);
          if (index == -1) {
            localStorage.setItem(
              "cart",
              JSON.stringify([
                ...cart,
                {
                  eventId: event.id,
                  eventName: event.name,
                  eventVenue: event.venue,
                  eventDate: event.date,
                  eventBanner: event.banner,
                  eventOrganization: event.organised,
                  participants: [inputs[i].value],
                },
              ])
            );
          } else {
            cart[index].participants.push(inputs[i].value);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        } else {
          localStorage.setItem(
            "cart",
            JSON.stringify([
              {
                eventId: event.id,
                eventName: event.name,
                eventVenue: event.venue,
                eventDate: event.date,
                eventBanner: event.banner,
                eventOrganization: event.organised,
                participants: [inputs[i].value],
              },
            ])
          );
        }
        api["success"]({
          message: "Success",
          description: "Participant added to cart",
          placement: "bottomRight",
        });
      }
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCheckTexusId = async (e, i) => {
    if (/^(TX[0-9]{5,5})$/gm.test(e.target.value)) {
      const q = query(
        collection(db, "students"),
        where("texusId", "==", e.target.value)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(participants.includes(doc.data().name));
        if (e.target.value != userDb.texusId) {
          formRef.current[i].style.border = ".5px solid #84cc16";
          setParticipants(
            participants.map((item, index) => {
              return index == i - 1 ? doc.data().name : item;
            })
          );
        } else {
          formRef.current[i].style.border = ".5px solid #ef4444";
        }
      });
    } else if (participants[i - 1] != undefined && e.target.value != "") {
      console.log(participants[i - 1], i);
      formRef.current[i].style.border = "0px solid transparent";
      setParticipants(
        participants.map((item, index) => {
          return index == i - 1 ? "none" : item;
        })
      );
    }

    console.log("Participants", participants);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto w-full bg-black font-montserrat">
      <Modal
        style={{ fontFamily: "Montserrat" }}
        width={1200}
        title="Add Team Members"
        open={isModalOpen}
        footer={[
          <button
            onClick={handleCancel}
            className="border border-red-500 font-bold text-red-500 px-4 py-2 rounded-md"
          >
            Cancel
          </button>,
          <button
            onClick={handleOk}
            className="bg-blue-500 font-bold text-white px-4 py-2 rounded-md mx-5"
          >
            Add to Cart
          </button>,
        ]}
      >
        <form ref={formRef} className="flex mt-4 flex-col gap-4">
          {Array(Number(event.min ? event.min + extraMember : 0))
            .fill(0)
            .map((_, i) => {
              return (
                <div
                  key={i}
                  className="w-full gap-3 text-center flex flex-col md:flex-row items-center justify-between"
                >
                  <input
                    onChange={(e) => handleCheckTexusId(e, i)}
                    disabled={i == 0 ? true : false}
                    maxLength={7}
                    placeholder={
                      i == 0 ? userDb.texusId : `Participant ${i + 1} Texus ID`
                    }
                    className="p-4 w-2/3 bg-gray-700/30 outline-none rounded-md"
                  />

                  <p className="w-1/3">
                    {i == 0
                      ? userDb.name
                      : participants[i - 1] == "none"
                      ? ""
                      : participants[i - 1]}
                  </p>
                </div>
              );
            })}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${
                event?.max > event?.min + extraMember ? "" : "hidden"
              } w-6 h-6 cursor-pointer text-green-500`}
              onClick={() =>
                event?.max > event?.min + extraMember
                  ? setExtraMember(extraMember + 1)
                  : null
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${
                event?.min < extraMember ? "" : "hidden"
              } w-6 h-6 cursor-pointer text-red-500`}
              onClick={() =>
                event?.min < extraMember
                  ? setExtraMember(extraMember - 1)
                  : null
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </form>
      </Modal>
      <Image
        loading="lazy"
        width={100}
        height={100}
        alt=""
        className="lg:p-15 w-full h-96 object-cover object-center lg:rounded-md"
        src={
          event.banner ? event.banner : "https://i.ibb.co/vkmsdTJ/eventcard.png"
        }
      />

      <div className="lg:p-0 p-4 md:p-16 pt-6 lg:mt-10 text-lg">
        <div
          onClick={() => router.back()}
          className="flex gap-1 items-center text-[#FF6240] cursor-pointer hover:underline underline-[#FF6240]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p>Back to all events</p>
        </div>
        <div className="mt-5 flex flex-col md:flex-row gap-3 justify-between md:items-center">
          <div>
            <h1 className="text-white font-medium text-2xl md:text-3xl lg:text-5xl">
              {event?.name}
            </h1>
            <p className="text-[#747474] capitalize text-xs md:text-sm lg:text-lg">
              By {event?.organised}
            </p>
          </div>
          <h1
            className={`rounded-md font-bold ${
              3 <= event?.limit * 0.2 ? "text-green-400" : "text-red-500"
            }`}
          >{`${event?.limit} slots left`}</h1>
          <button
            onClick={addToCart}
            className="bg-gray-600/50 hover:bg-gray-600/60 transition-all duration-300 px-4 py-2 rounded-lg text-white"
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
            <p className="text-white font-medium text-sm md:text-lg">
              {new Date(event?.date)
                .toString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}
            </p>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-white font-medium text-sm md:text-lg">
              {new Date(event?.date).toString().split(" ")[4]}
            </p>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="text-white font-medium text-sm md:text-lg">
              {event?.venue}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            <p className="text-white font-medium text-sm md:text-lg">
              Team Size: {event?.max}
            </p>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-white text-2xl font-medium">Event Description</h1>
          <p className="text-gray-400 text-justify mt-3">{event?.desc}</p>
        </div>
        <div className="my-10">
          <h1 className="text-white text-2xl font-medium">Event Rules</h1>
          <div>
            {event?.rules?.map((rule, index) => (
              <p
                key={index}
                className="text-gray-400 text-justify mt-3 capitalize"
              >
                &bull; {rule}
              </p>
            ))}
          </div>
        </div>
        <div className="my-10 space-y-10 md:space-y-0 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <div className="items-center space-x-1">
              <p className="text-white">Entry Fee : ₹ {event?.fees}</p>
            </div>
          </div>
          <div className="text-white">
            <h1>Student Coordinators</h1>
            <div className="flex gap-1 mt-3 flex-col">
              {event?.studentCo?.map((student, index) => {
                const [name, contact] = student.split(",");

                return (
                  <div key={index} className="flex items-center gap-3">
                    <p className="font-medium">{name}</p>
                    <a href={"tel:+91" + contact} className="text-gray-400">
                      {contact}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-white">
            <h1>Student Coordinators</h1>
            <div className="flex gap-1 mt-3 flex-col">
              {event?.staffCo?.map((student, index) => {
                const [name, contact] = student.split(",");

                return (
                  <div key={index} className="flex items-center gap-3">
                    <p className="font-medium">{name}</p>
                    <a href={"tel:+91" + contact} className="text-gray-400">
                      {contact}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
