
import { DiAndroid, DiDart, DiAptana, DiJavascript, DiPython, DiAppstore, DiAtom, DiJekyllSmall } from 'react-icons/di'

const Tech = () => {
  return (
    <div className='space-y-5'>
      <h1 className='text-center text-3xl hover:scale-50 hover:text-black font-bold cursor-pointer transition-all duration-75'>Technology Use</h1>
      <div className='grid grid-cols-4 place-items-center gap-5'>
        <DiAndroid className="hover:scale-110 hover:text-pink-700 cursor-pointer transition-all duration-75 " size={'200px'} />
        <DiJavascript className="hover:scale-150 hover:text-red-700 cursor-pointer transition-all duration-75" size={'200px'} />
        <DiPython className="hover:scale-150 hover:text-red-700 cursor-pointer transition-all duration-75" size={'200px'} />
        <DiDart className="hover:scale-150 hover:text-red-700 cursor-pointer transition-all duration-75" size={'200px'} />
        <DiAptana className="hover:scale-150 hover:text-red-700 cursor-pointer transition-all duration-75" size={'200px'} />
        <DiAppstore className="hover:scale-150 hover:text-red-700 cursor-pointer transition-all duration-75" size={'200px'} />
        <DiAtom className="hover:scale-150 hover:text-red-700 cursor-pointer transition-all duration-75" size={'200px'} />
        <DiJekyllSmall className="hover:scale-150 hover:text-red-700 cursor-pointer transition-all duration-75" size={'200px'} />
      </div>
      <div class="flex flex-col justify-center items-center"><h1 class="text-center text-4xl font-bold hover:scale-150 hover:text-red-700 cursor-pointer transition-all duration-75/">Who am I</h1><div class="h-[390px] w-[390px] mt-7 border-4 border-green-400 bg-black rounded-full text-white flex  flex-col items-center justify-center"><div><h1>Name : Arjun Shrestha</h1><h1>Email: arjunstha@gmail.com</h1><h1>Tel:9777777678</h1><h1>Age:17</h1><h1>Experience:python, java, dart</h1></div></div></div>
      <div>
        <div class="relative "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000" fill-opacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path></svg><div class="absolute bottom-0 text-white inset-x-0 top-[50%] flex justify-center flex-col items-center"><h1>Develop By</h1><h1>Arjun Shrestha</h1></div></div>
      </div>
    </div>
  )
}

export default Tech
