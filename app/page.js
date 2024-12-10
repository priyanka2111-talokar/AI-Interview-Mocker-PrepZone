"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>PrepZone | Ace Your Interviews</title>
        <meta name="description" content="PrepZone offers AI-powered mock interview sessions to help you ace your interviews and improve your career prospects." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
        {/* Hero Section */}
        <div className="relative w-full h-screen overflow-hidden bg-gray-800">
          <Image
            src="/images/F1.jpg"
            alt="Interview background"
            layout="fill"
            objectFit="cover"
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-gradient-to-t from-black to-transparent">
            <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
              PrepZone
              <br />
              <span className="text-4xl font-semibold">
                Ace Your Interviews
              </span>
            </h1>
            <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
              Improve your skills with AI-powered mock interview sessions.
            </p>
            <button
              onClick={handleSignUpClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
              aria-label="Start Mock Interview"
            >
              Start
            </button>
          </div>
        </div>

        {/* About Section */}
        <section className="text-center my-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At AI Mock Interview, we provide a platform for you to practice and
            improve your interview skills using advanced AI technology. Our mock
            interviews simulate real interview scenarios and offer personalized feedback
            to help you excel in your career.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Whether you're preparing for a job interview or looking to sharpen your skills,
            our tools and resources will guide you every step of the way.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 p-6 bg-gray-800 text-white">
          <p className="text-sm mb-2">© 2024 AI Mock Interview. All rights reserved.</p>
          <p className="text-sm">
            <a href="#contact" className="underline hover:text-gray-400 smooth-scroll">Contact Us</a> | 
            <a href="/privacy" className="underline hover:text-gray-400 ml-2">Privacy Policy</a>
          </p>
        </footer>
      </main>

      <style jsx>{`
        /* Smooth scrolling for internal links */
        .smooth-scroll {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
