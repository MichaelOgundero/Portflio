import imageOneMobile from "./../assets/images/mobile/Photography/imageOne_Mobile.jpg";
import imageOneDesktop from "./../assets/images/desktop/Photography/imageOne_Desktop.jpg";

import imageTwoMobile from "./../assets/images/mobile/Photography/imageTwo_Mobile.jpg";
import imageTwoDesktop from "./../assets/images/desktop/Photography/imageTwo_Desktop.jpg";

import imageThreeMobile from "./../assets/images/mobile/Photography/imageThree_Mobile.jpg";
import imageThreeDesktop from "./../assets/images/desktop/Photography/imageThree_Desktop.jpg";

import imageFourMobile from "./../assets/images/mobile/Photography/imageFour_Mobile.jpg";
import imageFourDesktop from "./../assets/images/desktop/Photography/imageFour_Desktop.jpg";

import imageFourAMobile from "./../assets/images/mobile/Photography/imageFour_A_Mobile.jpg";
import imageFourBMobile from "./../assets/images/mobile/Photography/imageFour_B_Mobile.jpg";

import imageFourADesktop from "./../assets/images/desktop/Photography/imageFour_A_Desktop.jpg";
import imageFourBDesktop from "./../assets/images/desktop/Photography/imageFour_B_Desktop.jpg";

let photos = [
  {
    image: imageOneMobile,
    imageDesktop: imageOneDesktop,
    imageTitle: "Image 1",
    imageSubtitle: "Canon EOS 2000D",
    attributes: [
      {
        attribute: "Lens",
        attributeVal: "EF50mm f/1.8 STM",
      },
      {
        attribute: "Focal Length",
        attributeVal: "50mm",
      },
      {
        attribute: "Dimensions (W x H) (Pixels)",
        attributeVal: "6000 x 4000",
      },
      {
        attribute: "Aperture",
        attributeVal: "f/1.8",
      },
      {
        attribute: "Shutter Speed",
        attributeVal: "1/1000",
      },
      {
        attribute: "ISO",
        attributeVal: "400",
      },
      {
        attribute: "Color Mode",
        attributeVal: "RGB",
      },
    ],
  },
  {
    image: imageTwoMobile,
    imageDesktop: imageTwoDesktop,
    imageTitle: "Image 2",
    imageSubtitle: "Canon EOS 2000D",
    attributes: [
      {
        attribute: "Lens",
        attributeVal: "EF50mm f/1.8 STM",
      },
      {
        attribute: "Focal Length",
        attributeVal: "50mm",
      },
      {
        attribute: "Dimensions (WxH) (Pixels)",
        attributeVal: "6000 x 4000",
      },
      {
        attribute: "Aperture",
        attributeVal: "f/1.8",
      },
      {
        attribute: "Shutter Speed",
        attributeVal: "1/1000",
      },
      {
        attribute: "ISO",
        attributeVal: "400",
      },
      {
        attribute: "Color Mode",
        attributeVal: "RGB",
      },
    ],
  },
  {
    image: imageThreeMobile,
    imageDesktop: imageThreeDesktop,
    imageTitle: "Image 3",
    imageSubtitle: "Canon EOS 2000D",
    attributes: [
      {
        attribute: "Lens",
        attributeVal: "EF50mm f/1.8 STM",
      },
      {
        attribute: "Focal Length",
        attributeVal: "50mm",
      },
      {
        attribute: "Dimensions (W x H) (Pixels)",
        attributeVal: "6000 x 4000",
      },
      {
        attribute: "Aperture",
        attributeVal: "f/1.8",
      },
      {
        attribute: "Shutter Speed",
        attributeVal: "1/2000",
      },
      {
        attribute: "ISO",
        attributeVal: "100",
      },
      {
        attribute: "Color Mode",
        attributeVal: "RGB",
      },
    ],
  },
  {
    image: imageFourMobile,
    imageDesktop: imageFourDesktop,
    additionalImages: [imageFourAMobile, imageFourBMobile],
    additionalImagesDesktop: [imageFourADesktop, imageFourBDesktop],
    imageTitle: "Stock Photography Lighting",
    imageSubtitle: "Canon EOS 2000D",
    attributes: [
      {
        attribute: "Lens",
        attributeVal: "EF50mm f/1.8 STM",
      },
      {
        attribute: "Focal Length",
        attributeVal: "50mm",
      },
      {
        attribute: "Dimensions (W x H) (Pixels)",
        attributeVal: "6000 x 4000",
      },
      {
        attribute: "Aperture",
        attributeVal: "f/7.1",
      },
      {
        attribute: "Shutter Speed",
        attributeVal: "1/160",
      },
      {
        attribute: "ISO",
        attributeVal: "100",
      },
      {
        attribute: "Color Mode",
        attributeVal: "RGB",
      },
    ],
  },
];

export default photos;
