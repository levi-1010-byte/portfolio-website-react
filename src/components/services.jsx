import React from 'react'
import Navbar from './navbar'
import { ServiceCard } from './ServiceCard';




export const Services = () => {
  const pixels='https://res.cloudinary.com/dgq0bnxp7/image/upload/assets/cover images and videos/pixels_ggs7dj.jpg';
  const motion='https://res.cloudinary.com/dgq0bnxp7/image/upload/assets/cover images and videos/motion_graphics_yrymoc.jpg';
  const videoedit='https://res.cloudinary.com/dgq0bnxp7/image/upload/assets/cover images and videos/video_edit_nkzrem.jpg';
  return (
    <>
 <Navbar isOnWork={true} />
 <section className=' relative min-h-screen w-full'>
          <div className='absolute h-[65%] w-full bg-[#00cba9] flex items-center justify-center '>
            <h1 className='text-9xl font-Montserrat'>
              Services
            </h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"style={{ transform: 'rotate(180deg)', marginBottom: '-1px' }} className="absolute -bottom-16 w-full">
            <path fill="#00cba9" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,69.3C384,53,480,75,576,122.7C672,171,768,245,864,272C960,299,1056,277,1152,245.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </section>
  <ServiceCard
  serviceName="Pixel Perfection Package"
  description="Elevate your photos to the next level with our Pixel Perfection Package. We specialize in meticulous image retouching and editing, ensuring every detail is flawlessly enhanced. Unleash the true potential of your visuals and leave a lasting impression."
  reviews={[{ author: "Author 1", rating: 5, comment: "Great service!" }]}
  details="Our expert team will enhance colors, fix imperfections, and apply advanced editing techniques for stunning results. Perfect for professional portraits, product shots, or social media content."
  color="Blue"
  size="Medium"
  quantity={4}
  price="₹1,499 per image" imagePosition="right"
  imageUrl={pixels}
/>
<ServiceCard
  serviceName="Cinematic Reels Masterpiece"
  description="Transform your raw footage into a cinematic masterpiece with our Video Editing and Reels Making service. Whether it's a vlog, promotional video, or social media reels, we'll turn your content into a visual storytelling sensation."
  reviews={[{ author: "Author 1", rating: 5, comment: "Great service!" }]}
  details="Our skilled editors will curate and edit your footage, add engaging transitions, and enhance the overall flow of your video. Elevate your brand with professionally edited videos that resonate with your audience."
  color="Blue"
  size="Medium"
  quantity={4}
  price="₹999 per minute of edited video content" imagePosition="left"
  imageUrl={videoedit}
/>
<ServiceCard
  serviceName="Dynamic Motion Designs"
  description="Bring your ideas to life with our Dynamic Motion Designs service. Captivate your audience with visually stunning animations and graphics that tell a compelling story. From logo animations to engaging promotional content, we've got your motion needs covered."
  reviews={[{ author: "Author 1", rating: 5, comment: "Great service!" }]}
  details="Our team combines creativity and technical expertise to craft eye-catching motion graphics tailored to your brand. Stand out in the digital landscape with animated content that leaves a lasting impact."
  color="Blue"
  size="Medium"
  quantity={4}
  price="₹2,999 per custom motion graphic" imagePosition="right"
  imageUrl={motion}
/>

  </>
  )
}
