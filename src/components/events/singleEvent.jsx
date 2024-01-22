import React from "react";
import Image from "next/image";

const SingleEvent = ({ data }) => {
    return (
        <div>
            <h1> {data.title}</h1>
            <Image src={data.image} width={1000} height={500} alt={data.title} />
            <h3> Time: {data.time} </h3>
            <h3> Location: {data.place} </h3>
            <div className="align">
                <div className="description">
                    <h3 className="mar"> About Events </h3>
                    <p> {data.description} </p>
                </div>
                <div className="ticketing">
                    <h3 className="mar"> Tickets Pricing </h3>
                    < ul className="design">
                        <li className="buying">
                            <span> General </span>
                            <span>₹500 </span>
                            <button className="Buy"><span> Buy Ticket</span> </button>
                        </li>
                        <li className="buying">
                            <span>VIP</span>
                            <span>₹1000 </span>
                            <button className="Buy"><span> Buy Ticket</span> </button>
                        </li>
                        <li className="buying">
                            <span > VVIP </span>
                            <span>₹2000 </span>
                            <button className="Buy"><span>Buy Ticket</span> </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;