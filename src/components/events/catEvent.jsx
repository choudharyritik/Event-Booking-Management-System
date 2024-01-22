import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const CatEvent = ({ data, pageName }) => {
    return (
        <div className="cat_events">
            <h1> Events in {pageName} </h1>
            <div className="content">
                {data.map((ev) => (
                    <Link legacyBehavior key={ev.id} href={`/Events/${ev.city}/${ev.id}`}
                        passHref>
                        <a className="card">
                            <Image width={350} height={250} alt={ev.title} src={ev.image} />
                            <h2> {ev.title} </h2>
                            <h4> Time: {ev.time} </h4>
                            <p> Location: {ev.place} </p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )

}

export default CatEvent;