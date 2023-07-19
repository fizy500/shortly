import { useState } from "react";

function Search() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState([]);
  const [buttonText, setbuttonText] = useState("Copy");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      // ggggg
    } else {
      const getLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();
        console.log(data);
        setLinks(data.result);
        setText("");
      };
      getLink();
    }
  };
  const clipBoard = navigator.clipboard;
  const handleCopy = () => {
    clipBoard.writeText(links.full_short_link);
    setbuttonText("Copied");
  };

  return (
    <section className='max-width py-5 flex flex-col space-y-8'>
      <form
        action=''
        onSubmit={handleSubmit}
        className='flex flex-col lg:flex-row justify-center items-center  bg-[url(./assets/bg-shorten-desktop.svg)] bg-[#3B3054] bg-cover bg-center bg-no-repeat rounded-2xl py-20 px-4'
      >
        <input
          type='search'
          placeholder='shorten a link here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='py-4 pl-4  rounded-md outline-none w-full mb-4 lg:mb-0  text-[#444347] lg:mr-4 lg:w-[75%] '
        />
        <button
          className='bg-[#2ACFCF] hover:bg-[#62ebeb]  text-white px-10 py-4 rounded-md w-full lg:w-[20%]'
          onClick={handleSubmit}
        >
          Shorten It!
        </button>
      </form>
      <div className='results text-white  bg-gray-300 rounded-lg py-6 px-6 flex flex-col lg:flex-row justify-between '>
        <article className="text-black">
          <h6>{links.original_link}</h6>
        </article>
        <div className='h-[0.5px] bg-white w-full  block lg:hidden my-3' />

        <article className='flex flex-col lg:flex-row justify-between   '>
          <h6 className='text-[#2ACFCF] w-full px-3'>{links.full_short_link}</h6>
          <button
            className='bg-[#2ACFCF] text-sm  text-white px-4 py-2 rounded-md hover:bg-[#62ebeb] w-full lg:w-fit'
            onClick={handleCopy}
          >
            {buttonText}
          </button>
        </article>
      </div>
    </section>
  );
}

export default Search;
