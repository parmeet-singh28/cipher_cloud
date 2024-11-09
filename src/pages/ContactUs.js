import React from 'react'
import Image from 'react-bootstrap/Image';
import faqImg from '../asstes/images/questionMarkLogo.png'
import mailImg from '../asstes/images/mailLogo.png'
import hashtagImg from '../asstes/images/hashtagLogo.png'
function ContactUsPage() {
    return (
        <div style={{minHeight: 'calc(100vh - 85px - 85px)'}}>
            <div className='max-width horizontal-center'>
                <div className='col-flex' >
                    <div className='text-overlay intro-header text-primary'>
                        Get in Touch
                    </div>
                    <div className='text-overlay intro-next text-primary horizontal-center' style={{lineHeight:'35px'}}>
                        Want to get in touch? We'd love to hear from you. Here's how you can reach us....
                    </div>
                </div>
            </div>

            <hr className='my-5' />
            <div className='responsive-contact' >
                <div className='col-flex contact-card'>
                    <div className='contact-img'><Image src={faqImg} rounded style={{ width: '140px' }} /><h3 className='mt-2'>FAQ</h3></div>

                    <p className='contact-para-width' >Our Frequently asked questions page is a great place to start if you have a question. Also, check out our blog to keep up with iLinkShort and all the latest marketing trends.</p>
                </div>
                <div className='col-flex contact-card'>
                    <div className='contact-img'><Image src={mailImg} rounded style={{ width: '140px' }} /><h3 className='mt-2'>Email</h3></div>

                    <p className='contact-para-width'>We are happy to answer any Sales or Support questions by email. Contact on email if you need to report a link.</p>
                </div>
                <div className='col-flex contact-card'>
                    <div className='contact-img'><Image src={hashtagImg} rounded style={{ width: '140px' }} /><h3 className='mt-2'>Social</h3></div>

                    <p className='contact-para-width'>You can also find us on all the popular social media platforms such as Facebook, Twitter, and LinkedIn.</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage
