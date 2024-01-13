import React from 'react';
import Header from './Header';

const ContactInfo = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#d2e1ee] shadow-lg p-4 pt-[95px] pb-[100px] md:p-6 md:pt-[95px] md:pb-[100px] rounded-md">
        <div className='flex flex-col md:flex-row justify-between px-4 md:px-9'>
          <div className="mb-4 md:mb-0 md:mr-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">COME VISIT US</h2>
              <p>500 TERRY FRANCINE STREET<br />SAN FRANCISCO, CA 94158</p>
            </div>

            <div className="mt-4 md:mt-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">OPENING HOURS</h2>
              <p>MON - FRI: 8AM - 8PM<br />SATURDAY: 9AM - 7PM<br />SUNDAY: 9AM - 8PM</p>
            </div>

            <div className="mt-4 md:mt-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">SOCIAL MEDIA</h2>
              <p>INSTAGRAM</p>
              <p>FACEBOOK</p>
              <p>TWITTER</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-4 md:gap-20'>
              <div className="mt-4 md:mt-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">CONTACT</h2>
                <p>EMAIL: INFO@MYSITE.COM</p>
                <p>PHONE: 123 456 6780</p>
              </div>

              <div className="mt-4 md:mt-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">NEWSLETTER</h2>
                <p>Subscribe to our Newsletter</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <input className="border border-gray-300 p-2 mt-2 md:mt-0" type="email" placeholder="Email address" />
                  <button className="bg-blue-500 text-white px-4 py-2 mt-2 md:mt-0 rounded">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">POLICIES</h2>
          <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <p><a href="/#">TERMS & CONDITIONS</a></p>
            <p><a href="/#">PRIVACY POLICY</a></p>
            <p><a href="/#">SHIPPING POLICY</a></p>
            <p><a href="/#">REFUND POLICY</a></p>
            <p><a href="/#">COOKIE POLICY</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
