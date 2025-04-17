import React, { useEffect, useState } from 'react'
import logo from '../../../public/assets/Group 1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import { useRouter } from 'next/router';
import { faUser } from "@fortawesome/free-solid-svg-icons";
const header = () => {
const router =useRouter();

 const handlelogout=async ()=>{
  await fetch('api/logout',{method:'POST'})
  router.push('/admin')}
 



  const [open, setopen] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const [mount, setmount] = useState(false)
  useEffect(()=>{
setmount(true)
  },[])
  const nav=[{name:'Home',link:"/"},{name:'About us',link:"/about"},{name:'Brands',link:'/brands'},{name:'Blogs',link:"/blogs"} ]
  return (
<div className="flex !justify-between w-full items-center md:px-18 h-[78px] px-6 bg-white">
<Link href='/'><Image src={logo}   alt="logo"
        width={100} height={80}
        className=" object-cover"/></Link>
        <div className='md:hidden relative'>
        { mount &&
        <button className='shadow h-[45px] w-[45px] flex items-center justify-center rounded-full cursor-pointer bg-white
         ' onClick={()=>{(setopen(!open))}}><FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>}
      {/* mobile nav */}
        <div className={`fixed h-full w-3/4 duration-300 ease-in-out flex flex-col pt-14 px-10 items-center leading-16  bg-[#F6F6F6] right-[-40px] top-0 bottom-0 z-50   ${open ? "block" : "translate-x-[525px]"}`}>
        <a className='absolute h-[35px] w-[35px] bg-white left-[20px] top-[10px] flex justify-center items-center text-xl bold' onClick={()=>{(setopen(false))}}> <FontAwesomeIcon icon={faXmark} /></a>
        <div className=' w-full '><Link href='/'><Image src={logo}     alt="logo"
        width={100} height={80}
        className="rounded-lg object-cover"/></Link></div>
        <div className='w-full'>
        <ul className=' !justify-between w-96 ' >
{nav.map((elem, index)=>{
   return  <li  key={index} className='text-primary transition-all duration-300  hover:text-primary hover:font-bold cursor-pointer'><Link href={elem.link}>{elem.name}</Link></li>

})    
}
</ul>
</div>
<div className='w-full items-center'><button className='btn'><Link href='/contact'>Contact us</Link></button></div>

        </div>
        </div>
  <div className='hidden md:flex'>
    {/* link should be added  */}
    <ul className=' hidden md:flex !justify-between w-96' >
      
    {nav.map((elem,index)=>{
   return  <li  key={index} className='text-black hover:text-primary hover:font-bold cursor-pointer'><Link href={elem.link}>{elem.name}</Link></li>

})    
}   

</ul>
 </div>
 <div className='hidden md:flex'><button className='btn'><Link href='/contact'>Contact us</Link></button></div>
 {router.pathname === "/leads" && (
        <div className="relative">
          {/* Profile Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-full cursor-pointer  w-[30px] h-[30px] flex justify-center items-center bg-gray-300"
          >
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded">
            <div className='text-center'>admin</div>
              <button
                className="block w-full px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                onClick={handlelogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
 </div>

  )

}
export default header;
