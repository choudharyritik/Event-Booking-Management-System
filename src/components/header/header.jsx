import Link from 'next/link'
import Image from 'next/image';
import { MdAccountCircle } from 'react-icons/md';

export const Header = () => {
  return (
    <header>
      <div>
        <div className='topNav'>
          <Image alt="Logo" src={'/images/Event Management-01.png'} width={140} height={110} />
          <nav className='Headnav'>
            <ul>
              <li>
                <Link href='/' passHref> Home</Link>
              </li>
              <li>
                <Link href='/Events' passHref> Events</Link>
              </li>
              <li>
                <Link href='/about-us' passHref> About Us</Link>
              </li>

              <Link href='/login'><MdAccountCircle className='account' /></Link>


            </ul>

          </nav>
        </div>
      </div>


    </header>
  );
}