import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import {technicalEvents} from '../../assets/events';
import { useRouter } from 'next/router';
// import { collection, query, where, onSnapshot } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../backend/firebase"

const EventList = () => {

  const router = useRouter();
  const { type } = router.query;

  const [events, setEvents] = useState([]);
  
  const getEvents = async () => {
    if (!type) return;
    let arr = [];
    const q = query(collection(db, "events"), where("type", "==", type));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push({id:doc.id, ...doc.data()});
    });
    setEvents(arr)
  }
  
  useEffect (() => {
    getEvents();
  },[type]);
  
  return (
    <section className="w-full mt-20 font-montserrat h-full bg-black text-white">
    <div className="w-full max-w-6xl mx-auto bg-[url('../assets/images/demo3.jpg')] bg-center bg-cover bg-no-repeat h-96 ">
    </div>
    <EventDetatils type={type} data={events} />
  </section>
  )
}
export default EventList;

const EventDetatils = ({type,data}) => {
  return <div className='p-4 md:p-16'>
  <div>
    <h1 className="text-3xl my-8 max-w-6xl lg:mx-auto capitalize">{type}</h1>
  </div>
  {
    data.map((event,index)=> (
      <Link href={`events/${event.id}`} key={index} className="w-full max-w-6xl border border-gray-800 cursor-pointer mx-auto group h-28 p-8 rounded-md grid lg:grid-cols-6 gap-4 mb-8 bg-[url('https://i.ibb.co/MGKsrc1/listbg.png')] bg-center bg-cover bg-no-repeat">
        <h1 className="col-span-3 lg:col-span-2 text-2xl my-auto">{event.name}</h1>
        <p className="col-span-3 lg:col-span-3 my-auto">{event.desc}</p>
        <div className="my-auto pl-[10px] lg:mx-auto hidden lg:col-span-1 lg:group-hover:flex lg:justify-end transition-all duration-300">
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </Link> 
    ))
  }
</div>
}