import Image from 'next/image'
import Link from 'next/link'

export const HomePage = ({ data }) => (
  <div className='home_body'>
    <div className='page-heading'>
      <h1> Event Management </h1>
      <p> "Bringing Your Events to Life: Simplified Registration, Seamless Management, and Easy Ticketing." </p>
    </div>
    {data.map((ev) => (
      <Link className='card' key={ev.id} href={`/Events/${ev.id}`}
        passHref>
        <div className='image'>
          <Image width={450} height={300} alt={ev.title} src={ev.image} />
        </div>
        <div className='content'>
          <h2 className='Head'> {ev.title} </h2>
          <p> {ev.description} </p>
        </div>

      </Link>
    ))}

  </div>
)