import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section – navbar gradient with breadcrumb */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit">
            <Link to="/" className="hover:text-amber-400 transition">Home</Link>
            <span>›</span>
            <span className="text-amber-400 font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Privacy <span className="text-amber-400">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section – with explicit text colors */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-l-4 border-amber-500 shadow-md overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              {/* Using custom classes to override prose defaults for better control */}
              <div className="space-y-6">
                <div>
                  <p className="text-gray-700"><strong className="text-gray-900">Who we are</strong><br />
                  Our website address is: <a href="https://pyramidenc.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">https://pyramidenc.com</a>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Comments</h3>
                  <p className="text-gray-700 mb-3">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                  <p className="text-gray-700">An anonymised string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service Privacy Policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Media</h3>
                  <p className="text-gray-700">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cookies</h3>
                  <p className="text-gray-700 mb-3">If you leave a comment on our site you may opt in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                  <p className="text-gray-700 mb-3">If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                  <p className="text-gray-700 mb-3">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                  <p className="text-gray-700">If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Embedded content from other websites</h3>
                  <p className="text-gray-700 mb-3">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                  <p className="text-gray-700">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Who we share your data with</h3>
                  <p className="text-gray-700">If you request a password reset, your IP address will be included in the reset email.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How long we retain your data</h3>
                  <p className="text-gray-700 mb-3">If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognise and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
                  <p className="text-gray-700">For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What rights you have over your data</h3>
                  <p className="text-gray-700">If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Where your data is sent</h3>
                  <p className="text-gray-700">Visitor comments may be checked through an automated spam detection service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;