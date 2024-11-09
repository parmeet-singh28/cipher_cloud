import React from 'react'

function AboutUsPage() {
    return (
        <div style={{minHeight: 'calc(100vh - 85px - 85px)'}} className='mx-5'>
            <div className='my-5' />
            <div className='responsive-about google-fonts-roboto' >
                <div className='col-flex about-card'>
                    <h2 className='text-center mb-3 '>Mission</h2>
                    <p className='google-fonts-raleway about-para-width' >We aim to provide a fast, reliable, and secure service that allows users to easily create short and memorable links to share their content, ideas, and websites with others. At iLinkShort, we are committed to excellence in everything we do, and we are constantly innovating and improving our service to meet the evolving needs of our users.</p>
                </div>
                <div className='col-flex about-card'>
                    <h2 className='text-center mb-3'>Beliefs</h2>
                    <p className='google-fonts-raleway about-para-width'>We believe that technology has the power to transform the way we share information and collaborate with others. That's why we're passionate about providing a service that enables people to connect with each other more easily and effectively, whether they're sharing links to articles, videos, social media posts, or any other type of content.</p>
                </div>
                <div className='col-flex about-card'>
                    <h2 className='text-center mb-3'>Purpose</h2>
                    <p className='google-fonts-raleway about-para-width'>Our URL shortening service is designed to be fast, reliable, and secure, and we use the latest technology and security protocols to ensure that our users' data is protected at all times. We also offer a range of features and tools that make it easy for users to manage their links and track their performance.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage
