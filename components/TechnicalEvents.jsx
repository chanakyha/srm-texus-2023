import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const TechnicalEvents = () => {

    const router = useRouter();

    return (
        <Link className="card" href={{ pathname: '/events', query: { type: "technical" } }}>
        {/* <Link href={"/events?type=technical"} className="card"> */}
        {/* <div onClick={() => router.push("/events?type=technical")} className="card"> */}
                            <h2 className="flex flex-col -space-y-3"><span>Technical</span><span>Events</span></h2>
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
                        </Link>
    )
}

export default TechnicalEvents