import { useState } from 'react'

// GET/POST: https://api.shrtco.de/v2/shorten?url=

function Search () {
  const [text, setText] = useState('')
  const [links, setLinks] = useState([])
  let warning = ''

  const handleSubmit = e => {
    e.preventDefault()
    if (!text) {
      warning = 'Please add a link'
      //   alert()
    } else {
      const getLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data = await res.json()
        console.log(data)
        setLinks(data.result)
        setText('')
      }
      getLink()
    }
  }

  return (
    <section className='max-width border-2 rounded-lg border-neutral-600 py-5'>
      {/* <p className='text-xs text-[#F46262] mt-2'>{warning}</p> */}

      <form
        action=''
        onSubmit={handleSubmit}
        className='grid grid-cols-2 justify-center items-center space-x-4  bg-[url(./assets/bg-shorten-desktop.svg)] bg-[#3B3054] bg-cover bg-center bg-no-repeat rounded-2xl py-6'
      >
        <input
          type='search'
          placeholder='shorten a link here...'
          value={text}
          onChange={e => setText(e.target.value)}
          className='py-4 pl-4 pr-[13rem] rounded-md outline-none  text-[#444347] '
        />
        <button
          className='bg-[#2ACFCF]  text-white px-10 py-4 rounded-md '
          onClick={handleSubmit}
        >
          Shorten It!
        </button>
      </form>
      <div className='results'>
        <article>
          <h6>{links.original_link}</h6>
        </article>

        <article>
          <h6>{links.short_link}</h6>
        </article>
      </div>
    </section>
  )
}

export default Search
