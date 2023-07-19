import Bgshorten from '../assets/illustration-working.svg'
export default function Hero () {
  return (
    <section className='py-10 lg:py-20'>
      <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center'>
        <div className='text-center md:text-left space-y-3'>
          <h1 className='text-5xl text-slate-800 font-bold lg:text-6xl mb5 '>
            More than just shorter links
          </h1>
          <p className='lg:text-lg text-slate-400 mb-10'>
            Build your brand’s recognition and get detailed <br className='' /> insights on how your
            links are performing.
          </p>
          <button className='bg-[#2ACFCF] hover:bg-[#62ebeb]  text-white px-4 py-2 rounded-3xl'>
            Get Started
          </button>
        </div>
        <div>
          <img src={Bgshorten} alt='' />
        </div>
      </div>
    </section>
  )
}
