import BrandRecognition from '../assets/icon-brand-recognition.svg'
import DetailedRecords from '../assets/icon-detailed-records.svg'
import FullyCustomizable from '../assets/icon-fully-customizable.svg'

export default function Advanced () {
  return (
    <section className='bg-gray-100 py-10 lg:pt-20 lg:pb-40'>
      <div className='max-width'>
        <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-3 text-center '>
          Advanced Statistics
        </h2>
        <p className='text-slate-400 text-center mb-10 lg:mb-20'>
          Track how your links are performing across the web <br /> with our
          advanced statistics dashboard.
        </p>
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 relative'>
          <div className='bg-cyan-500 h-2 w-full absolute top-1/2' />
          <div className='md:hidden border-l-8 border-l-cyan-500 h h-3/4 rotate-180 absolute left-1/2' />
          <article className=' bg-white p-5 rounded relative flex flex-col md:justify-center items-center sm:text-center'>
            <img
              src={BrandRecognition}
              alt=''
              className='p-3 bg-slate-800 rounded-full -mt-10 '
            />
            <h3 className='text-slate-800 text-lg mb-2  mt-5 font-bold'>
              Brand Recognition
            </h3>
            <p className=' text-slate-400 text-sm sm:text-center'>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>

          {/* Second */}

          <article className=' bg-white p-5 rounded lg:translate-y-8 relative flex flex-col md:justify-center items-center'>
            <img
              src={DetailedRecords}
              alt=''
              className='p-3 bg-slate-800 rounded-full -mt-10 '
            />
            <h3 className='text-slate-800 text-lg mb-2 mt-5 font-bold'>
              Detailed Records
            </h3>
            <p className=' text-slate-400 text-sm sm:text-center'>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>

          {/* Third */}

          <article className=' bg-white p-5 rounded lg:translate-y-16 relative flex flex-col md:justify-center items-center'>
            <img
              src={FullyCustomizable}
              alt=''
              className='p-3 bg-slate-800 rounded-full -mt-10'
            />
            <h3 className='text-slate-800 text-lg mb-2 mt-5 font-bold'>
              {' '}
              Fully Customizable
            </h3>
            <p className=' text-slate-400 text-sm sm:text-center '>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
