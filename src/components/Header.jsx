import React from 'react'

import {Link} from 'react-router-dom'
import Logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    
    <header className='py-3 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center">
        {/* {Logo} */}
        <Link to ='/'>
          <img src={Logo} alt="" />
        </Link>
        {/* Nav links */}

        <div className='flex items-center gap-6'>
          <Link className=' hover:text-violet-900 transition ' to ='' >Login</Link>
          <Link className=' bg-violet-700 hover:bg-violet-800 text-white rounded-lg transition px-4 py-3 ' to ='' >SignUp</Link>
        </div>

      </div>
    </header>
    
  )
}

export default Header