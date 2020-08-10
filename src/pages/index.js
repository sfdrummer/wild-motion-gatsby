import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles.css";

const IndexPage = () => (
  <Layout>
  <div className="bg-center bg-cover text-white border-t-8 border-blue-darkest">
      <header className="shadow py-6">
        <div className="container mx-auto px-4">
          <ul className="list-reset md:flex md:flex-row text-xl text-center flex items-center">
            <li className="text-4xl mr-8 mb-4 md:mb-0">
              <a href="/" className="no-underline text-gray-800">Wild Motion <small>Films</small></a>
            </li>
            <ul className="list-reset md:flex md:flex-row md:flex-auto md:items-center md:justify-end">
              <li className=""><a href="/" className="no-underline text-gray-700 block py-2 md:py-0">Home</a></li>
              <li className="mx-4 text-gray-300 font-bold text-sm hidden md:block">/</li>
              <li className=""><a href="#about" className="no-underline text-gray-700 block py-2 md:py-0">About</a></li>
              <li className="mx-4 text-gray-300 font-bold text-sm hidden md:block">/</li>
              <li className=""><a href="#clients" className="no-underline text-gray-700 block py-2 md:py-0">Clients</a></li>
              <li className="mx-4 text-gray-300 font-bold text-sm hidden md:block">/</li>
              <li className=""><a href="#contact" className="no-underline text-gray-700 block py-2 md:py-0">Contact</a></li>
            </ul>
          </ul>
        </div>
      </header>
    </div>

    <div className="container mx-auto px-4 md:py-16 pt-16 text-lg text-grey-darker md:flex md:flex-row md:justify-between items-center" id="about">
      <div className="md:w-1/3 pr-4">
        <img src="/images/kevin/kevin-1.jpg" alt="Image of Kevin" className="rounded-full" />
      </div>
      <div className="md:w-2/3 md:pl-4">
        <p className="mb-4 text-2xl">With over 10 years experience, Kevin offers end-to-end video production, 4.6K, 4K, Ultra HD and 1080p filming, multi-camera and video editing to clients in broadcast, corporate, charities, business and natural history.</p>
        <p className="mb-4">Whether you need a short web promo, multi-camera event coverage, location-based editing, interviews, or long-form documentaries, interactive / looped video installations. Kevin can handle pretty much everything you can throw at him - just pick up the phone to discuss your needs.</p>
        <p className="mb-4">Kevin Babey BA (Hons) works independently and with other professionals to offer a full range of video production services to meet your outsourced video production needs.</p>
        <p className="mb-4">Call Kevin today for calendar availability and pricing: 07818 411880</p>
      </div>
    </div>

    <div className="bg-cover bl-left md:bg-center py-16 mb-8 shroud">
      <div className="container mx-auto py-16 md:flex md:flex-row md-justify-between text-gray-800 text-center">
        <div className="md:w-1/3 px-4">
          <h2 className="text-3xl mb-4">Video production</h2>
          <ul className="leading-loose">
            <li>4.6K, 4K, Ultra HD & Full HD Filming</li>
            <li>Better than Broadcast Quality</li>
            <li>Multi-cam Filming</li>
            <li>UAV / Drone Filming</li>
            <li>Corporate / Documentaries</li>
            <li>Camera Operators</li>
            <li>Vision Mixing</li>
            <li>Auto-cue / Tele-prompter</li>
            <li>Producer / Director</li>
          </ul>
        </div>
        <div className="md:w-1/3 px-4">
          <h2 className="text-3xl mb-4">Post production</h2>
          <ul className="leading-loose">
            <li>Non-Linear Video Editing</li>
            <li>FCPX & DaVinci Resolve</li>
            <li>On-Location Editing</li>
            <li>Chroma-key</li>
            <li>Colour Correction</li>
            <li>Colour Grading</li>
            <li>Broadcast Safe</li>
            <li>Audio Mixing</li>
          </ul>
        </div>
        <div className="md:w-1/3 px-4">
          <h2 className="text-3xl mb-4">Digital delivery</h2>
          <ul className="leading-loose">
            <li>Fully Digital Workflow</li>
            <li>Digital Dailies</li>
            <li>ProRes Masters</li>
            <li>Encoding iPad, iPhone, iPod</li>
            <li>Encoding for BluRay & DVD</li>
            <li>FTP, Disc or HDD Delivery</li>
          </ul>
        </div>
      </div>

    </div>

    <div className="container mx-auto px-4 md:py-16 text-center" id="clients">
      <h2 className="text-3xl mb-8 pb-2">Some of our clients</h2>
      <div className="md:flex md:flex-row md:justify-around items-center">
        <img src="/images/logos/english-heritage.png" alt="English Heritage" className="block mx-auto mb-8" />
        <img src="/images/logos/national-trust.jpg" alt="National Trust" className="block mx-auto mb-8" />
        <img src="/images/logos/southampton-uni.png" alt="Southampton University" className="block mx-auto mb-8" />
        <img src="/images/logos/shangri-la.png" alt="Shangri-la" className="block mx-auto mb-8" />
      </div>
    </div>

    <div className="container mx-auto" id="contact">
      <div className="md:w-2/3 md:pl-4 text-2xl text-center mb-8 md:mb-0 mx-auto">
        <p className="mb-3">UK Mobile: 07818 411880</p>
        <p className="mb-3">kevinbabey@gmail.com</p>
        <p className="mb-3"><a href="https://www.twitter.com/Kevin_Babey" target="_blank" className="text-blue no-underline">www.twitter.com/Kevin_Babey</a></p>
        <p className="mb-3"><a href="https://www.twitter.com/ProVidProUK" target="_blank" className="text-blue no-underline">www.twitter.com/ProVidProUK</a></p>
      </div>
    </div>

    <div className="container mx-auto px-4 md:py-16 pt-16 text-lg text-grey-darker mb-8">
      <p className="text-xs text-center">&copy;Copyright 2017 Kevin Babey</p>
    </div>
  </Layout>
)

export default IndexPage
