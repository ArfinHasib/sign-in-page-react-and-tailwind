import Logo from '../assets/logo.svg';

const Form = () => {
   return (
      <div className='container mx-auto mt-[8rem] w-[500px] h-[500px] xl:w-[550px] xl:h-[550px] flex flex-col gap-10 xl:mt-28 md:mt-0 justify-center items-center bg-[#040825] bg-opacity-80 backdrop-blur relative border border-gray-50/20 rounded-2xl'>
         <img src={Logo} alt='site logo' height={50} width={50} />

         <div className='text-center'>
            <h3 className='text-[24px] font-semibold text-white mb-2'>
               Enter your email
            </h3>
            <p className='text-[16px] text-white'>
               We'll send you a link to login
            </p>
         </div>

         <div className='flex flex-col text-center items-center w-full gap-7'>
            <input
               type='text'
               placeholder='Email address'
               className='w-[70%] p-3.5 rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-50 focus:border-blue-500'
            />
            <button
               type='button'
               className='text-white text-[20px] font-semibold bg-gradient-to-r from-[#B01EFF] to-[#E1467C] px-14 py-3.5 rounded-[10px] hover:bg-gradient-to-r hover:from-[#fff] hover:to-[#fff] hover:text-[#5334F5] transition duration-300'
            >
               Sign In
            </button>
         </div>

         <div className='text-center font-semibold'>
            <p className='text-[16px] text-white mb-2'>
               Don't have an account?
            </p>
            <p className='text-[16px] text-[#56CCF2] cursor-pointer'>
               Try for free
            </p>
         </div>
      </div>
   );
};

export default Form;
