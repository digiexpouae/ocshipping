import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/Group 1.png'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";



const footer = () => {
    const nav=[{name:'Home',link:'/'},{name:'About us',link:'/about'},{name:'Brands',link:'/brands'},{name:'Blogs',link:'/blogs'},{name:'Contact us',link:'/contact'}]
 const social =[{name:'Twitter',link:'/'},{name:'Instagram',link:'https://www.instagram.com/ocean_star_l.l.c/following/'},{name:'Facebook',link:'https://www.facebook.com/profile.php?id=61568623154633'},{name:"LinkedIn",link:'/'}]
 return (
  <div className=' w-full'>
 <div className="md:flex w-full  justify-between px-4 md:px-15 py-15  bg-[url('/assets/Group%2071.png')] bg-[#F6F6F6] bg-no-repeat" style={{ backgroundPosition: '-84px center' }}>  
     <div className='w-44'><Image src={logo}   alt="logo"
             width={100} height={80}
             className=" object-cover"/></div>
      <div className='md:flex md:w-[550px] justify-between'>
        <div><h3 className='text-primary font-bold leading-12'>Quick Links</h3>
        <ul className='flex flex-col leading-8' >
 {
            nav.map((elem,index)=>{
              return  <li key={index} className='transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'><Link href={elem.link}>{elem.name}</Link></li>

            })
        }</ul>
</div>
      <div><h3 className='text-primary font-bold leading-12'>Follow Us on</h3>
      <ul  className=' flex flex-col leading-8'>
      {social.map((elem,index)=>{
      return <li className='transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'><Link href={elem.link}>{elem.name}</Link></li>})}
      </ul></div>
      <div><h3 className='text-primary font-bold leading-12'>Get In Touch</h3>
      <ul  className=' flex flex-col leading-8'>
      <li className='transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>+971-52-7500-909</li>
      <li className='transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'><Link href='/'>www.oceanstar.ae</Link></li>
      <li className='transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>sales@oceanstar.ae</li></ul></div></div>
    </div>
     <div className='h-[84px] w-full bg-primary flex items-center justify-between text-white text-bold px-[20px]'>
  <div className='text-[20px]'>Copyright &copy; {new Date().getFullYear()}</div>
      <div className='flex justify-between h-[30px] w-[158px]'>
    <div className='w-[30px] h-[30px] bg-white text-center cursor-pointer flex items-center justify-center'><Link href='/'><FontAwesomeIcon icon={faFacebookF} className="text-primary" />  </Link> </div>
    <div className='w-[30px] h-[30px] bg-white text-center cursor-pointer flex items-center justify-center'><Link href='/'><FontAwesomeIcon icon={faLinkedinIn} className="text-primary" /> </Link>   </div>
    <div className='w-[30px] h-[30px] bg-white text-center cursor-pointer flex items-center justify-center'><Link href='/'><FontAwesomeIcon icon={faYoutube} className="text-primary" />    </Link>   </div>
    <div className='w-[30px] h-[30px] bg-white text-center cursor-pointer flex items-center justify-center'><Link href='/'><FontAwesomeIcon icon={faInstagram} className="text-primary" />  </Link>  </div>
          </div>
        </div>
</div>
  )
}

export default footer;
