import React from 'react'

const Footer = () => {
  return (
    <div className='text-white md:px-10'>
        <div className='py-20'>
        <p>Developed by Rupankar</p>
        <p>Watch movies online and download</p>
        </div>
        
        <p className='flex md:grid-cols-4 text-sm pb-10 max-w-5xl'>Contact us</p>

        <div className='flex'>
            <ul className='flex flex-col space-y-2'>
                <li>FAQ</li>
                <li>Subscription</li>
                <li>Privacy</li>
                <li>Services</li>
            </ul>

            <ul className='flex flex-col space-y-2'>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookies Preferences</li>
                <li>Legal Rights</li>
            </ul>

            <ul className='flex flex-col space-y-2'>
                <li>Account</li>
                <li>Ways to watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
            </ul>

            <ul className='flex flex-col space-y-2'>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer