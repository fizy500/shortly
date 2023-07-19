import FooterLogo from '../assets/footerlogo.svg'
import FacebookIcon from '../assets/icon-facebook.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
import PinterestIcon from '../assets/icon-pinterest.svg'
import InstagramIcon from '../assets/icon-instagram.svg'
function Footer () {
  return (
    <footer className='bg-[#232127]  py-10 lg:text-left text-center px-20'>
      <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 '>
        <div>
          <img src={FooterLogo} alt='' />
        </div>
        <div className='flex flex-col space-y-3'>
          <h2 className='text-white font-medium py-3'>Features</h2>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF]'>
            Link Shortening
          </a>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF] '>
            Branded Links
          </a>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF]'>
            Analytics
          </a>
        </div>
        <div className='flex flex-col space-y-3 '>
          <h2 className='text-white font-medium py-3'>Resources</h2>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF]'>
            Blog
          </a>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF]'>
            Developers
          </a>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF]'>
            Support
          </a>
        </div>
        <div className='flex flex-col space-y-3'>
          <h2 className='text-white font-medium py-3'>Company</h2>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF]'>
            About
          </a>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF]'>
            Our Teams
          </a>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF]'>
            Careers
          </a>
          <a href='' className='text-lg text-[#BFBFBF] active:text-[#2ACFCF]'>
            Contact
          </a>
        </div>
        <div className='text-white flex items-center space-x-5'>
          <a href=''>
            <img src={FacebookIcon} alt='facebook Icon' />
          </a>
          <a href=''>
            <img src={TwitterIcon} alt='Twitter Icon' />
          </a>
          <a href=''>
            <img src={PinterestIcon} alt='Pinterest Icon' />
          </a>
          <a href=''>
            <img src={InstagramIcon} alt='Instagram Icon' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
