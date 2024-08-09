import Image from 'next/image'
import React from 'react'

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-center items-center text-center md:text-left py-20 bg-gray-800 px-4">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect, Communicate, Collaborate
          </h2>
          <p className="text-lg mb-8">
            Experience seamless video communication with advanced features
            tailored for your meetings.
          </p>
          <a
            href="#signup"
            className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Get Started
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image
            src={'/hero-image.png'}
            width={500}
            height={500}
            alt="Video Chat App"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Image
              src={'/feature-video.png'}
              width={80}
              height={80}
              alt="Video Communication"
            />
            <h3 className="text-xl font-semibold mt-4">
              Video & Voice Communication
            </h3>
            <p className="mt-2">
              High-quality video and voice for seamless conversations.
            </p>
          </div>
          <div>
            <Image
              src={'/feature-points.png'}
              width={80}
              height={80}
              alt="Meeting Points"
            />
            <h3 className="text-xl font-semibold mt-4">Discussion Points</h3>
            <p className="mt-2">
              Add and manage key points to discuss during meetings.
            </p>
          </div>
          <div>
            <Image
              src={'/feature-reactions.png'}
              width={80}
              height={80}
              alt="Reactions"
            />
            <h3 className="text-xl font-semibold mt-4">Reactions & Feedback</h3>
            <p className="mt-2">
              Express yourself with reactions during the call.
            </p>
          </div>
          <div>
            <Image
              src={'/feature-recording.png'}
              width={80}
              height={80}
              alt="Video Recording"
            />
            <h3 className="text-xl font-semibold mt-4">Record Meetings</h3>
            <p className="mt-2">Record your meetings for future reference.</p>
          </div>
          <div>
            <Image
              src={'/feature-screen-share.png'}
              width={80}
              height={80}
              alt="Screen Sharing"
            />
            <h3 className="text-xl font-semibold mt-4">Screen Sharing</h3>
            <p className="mt-2">Share your screen with participants easily.</p>
          </div>
          <div>
            <Image
              src={'/feature-chat.png'}
              width={80}
              height={80}
              alt="Chat Integration"
            />
            <h3 className="text-xl font-semibold mt-4">Integrated Chat</h3>
            <p className="mt-2">
              Chat with participants alongside video communication.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-800 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <Image
              src={'/how-it-works.png'}
              width={500}
              height={300}
              alt="How It Works"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              Simple Steps to Get Started
            </h3>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>Sign Up and create your account</li>
              <li>Invite participants to your meeting</li>
              <li>Start a video call and enjoy seamless communication</li>
              <li>Utilize features like screen sharing, reactions, and more</li>
              <li>Record your sessions and review them later</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
