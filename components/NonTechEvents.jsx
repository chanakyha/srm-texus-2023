import React from 'react';
import { useRouter } from 'next/router';


const NonTechEvents = () => {

  const router = useRouter();

  return (
    <div  onClick={() => router.push("/events?type=nontech")} className="card card2">
                            <h2 className="flex flex-col -space-y-3"><span>Non Technical</span><span>Events</span></h2>
                            <i className="fas fa-arrow-right"></i>
                            <p>Register Now</p>
                            <div className="pic"></div>
                            <ul>
                            <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <button></button>
                        </div>
  )
}

export default NonTechEvents