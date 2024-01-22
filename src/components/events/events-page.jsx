import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AllEvents = ({ data }) => {
    return (
        <div className='events_page'>
            <div className='page-heading'>
                <h1> Event Management </h1>
                <p> "Bringing Your Events to Life: Simplified Registration, Seamless Management, and Easy Ticketing." </p>
            </div>
            {data.map((ev) => (
                <Link legacyBehavior key={ev.id} href={`/Events/${ev.id}`}
                    passHref>
                    <a className='card'>
                        <Image width={360} height={250} alt={ev.title} src={ev.image} />
                        <h2 className='Heading'> {ev.title} </h2>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default AllEvents;