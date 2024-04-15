import Logo from '../assets/logo.svg';

const Hero = () => {
   return (
      <section className='container mx-4 xl:mx-auto max-w-screen-xl items-center flex justify-between'>
         <img src={Logo} alt='Site Logo' height={40} width={40} />

         <nav
            className='h-[100px] flex flex-row gap-10 items-center z-50'
            id='navbar-default'
         >
            <div className='w-full md:block md:w-auto'>
               <ul className='flex gap-5 xl:gap-10 mr-10 xl:mr-0 font-medium text-white text-xs xl:text-[16px]'>
                  <li className='hover:text-[#56CCF2]'>
                     <a href='#'>Courses</a>
                  </li>
                  <li className='hover:text-[#56CCF2]'>
                     <a href='#'>Downloads</a>
                  </li>
                  <li className='hover:text-[#56CCF2]'>
                     <a href='#'>Pricing</a>
                  </li>
                  <li className='hover:text-[#56CCF2]'>
                     <a href='#'>Sign In</a>
                  </li>
                  <li className='hover:text-[#56CCF2]'>
                     <a
                        className='bg-[#56CCF2] text-black py-2 px-5 font-bold rounded hover:bg-white transition-all hover:text-[#56CCF2]'
                        href='#'
                     >
                        Try for free
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </section>
   );
};

export default Hero;
