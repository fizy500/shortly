import BgMobile from '../assets/bg-boost-mobile.svg'
import BgDesktop from '../assets/bg-boost-desktop.svg'

export default function Boost () {
  return (
    <div>
      <div className='md:bg-[url(./assets/bg-boost-mobile.svg)] lg:bg-[url(./assets/bg-boost-desktop.svg)] bg-[#3B3054] bg-cover bg-center bg-no-repeat px-5 py-16 flex flex-col justify-center items-center  space-y-4  w-full'>
        <p className="font-bold text-white text-xl">Boost Your Links Today</p>
        <button className='bg-[#2ACFCF] hover:bg-[#62ebeb]  text-white px-4 py-2 rounded-3xl'>
          Get Started
        </button>
      </div>
    </div>
  )
}
