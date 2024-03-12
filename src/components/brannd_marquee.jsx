import React, { useState, useEffect } from 'react';

import ImagePlayer from './ImagePlayer';

const BrandsSlider = () => {
  const [brandImages, setBrandImages] = useState([]);


  useEffect(() => {
    // Manually input public IDs for images
    const manuallyInputtedPublicIds = [
      'assets/brands_images/9_czvhtv',
      'assets/brands_images/8_qxdlkl',
      'assets/brands_images/7_haaf9s',
      'assets/brands_images/6_ilksf6',
      'assets/brands_images/5_zrlsgl',
      'assets/brands_images/4_exnoe3',
      'assets/brands_images/3_dgjxa1',
      'assets/brands_images/2_fy3yro',
      'assets/brands_images/15_n8hpho',
      'assets/brands_images/14_sr5rti',
      'assets/brands_images/10_b9q9k5',
      'assets/brands_images/13_n8v4k9',
      'assets/brands_images/11_rm19zx',
      'assets/brands_images/1_adqupx',
      'assets/brands_images/12_dwz3m7',
      // Add more public IDs as needed
    ];

    // Map public IDs to image objects
    const images = manuallyInputtedPublicIds.map(publicId => ({
      public_id: publicId,
      
    }));

    setBrandImages(images);

  }, []);

  return (
    <div className="font-Montserrat bg-[#191919] w-full px-4 pt-16 pb-16" id="faq">
      <div className="bg-gray-100 text-7xl font-bold text-black mix-blend-screen px-14 py-5">Brands We've Worked With</div>

      <div className="mx-auto w-full max-w-5xl bg-white dark:bg-transparent my-2">
        <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
          {brandImages.map((image, index) => (
            <div key={index} target="_blank" className="group relative overflow-hidden border-gradient">
             <ImagePlayer productId={image.public_id}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;
