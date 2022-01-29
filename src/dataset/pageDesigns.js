import pageDesignOne from "./../assets/images/desktop/DigitalPageDesign/pageDesign_One.jpg";
import pageDesignTwoA from "./../assets/images/desktop/DigitalPageDesign/pageDesign_Two_A.jpg";
import pageDesignTwoB from "./../assets/images/desktop/DigitalPageDesign/pageDesign_Two_B.jpg";
import pageDesignTwoC from "./../assets/images/desktop/DigitalPageDesign/pageDesign_Two_C.jpg";
import pageDesignThree from "./../assets/images/desktop/DigitalPageDesign/pageDesign_Three.jpg";

let pageDesigns = [
  {
    image: pageDesignOne,
    imageDesktop: pageDesignOne,
    imageTitle: "Form",
    imageSubtitle: "Applecross Dental",
    attributes: [
      {
        attribute: "Software",
        attributeVal: "InDesign",
      },
      {
        attribute: "Print Media Type",
        attributeVal: "Form",
      },
      {
        attribute: "Trim Size (Inches)",
        attributeVal: "8.5'' x 11''",
      },
      {
        attribute: "Colors",
        attributeVal: "Greyscale",
      },
      {
        attribute: "Color Profile",
        attributeVal: "US Sheetfed Uncoated v2",
      },
      {
        attribute: "Font",
        attributeVal: "Futura PT",
      },
      {
        attribute: "Margins (Inches)",
        attributeVal: "1''",
      },
      {
        attribute: "Bleed (Inches)",
        attributeVal: "None",
      },
    ],
  },
  {
    image: pageDesignTwoA,
    imageDesktop: pageDesignTwoA,
    additionalImages: [pageDesignTwoB, pageDesignTwoC],
    imageTitle: "Movie Poster",
    imageSubtitle: "Grand Budapest Hotel",
    attributes: [
      {
        attribute: "Software",
        attributeVal: "Photoshop and InDesign",
      },
      {
        attribute: "Print Media Type",
        attributeVal: "Movie Poster",
      },
      {
        attribute: "Trim Size (Inches)",
        attributeVal: "22'' x 34''",
      },
      {
        attribute: "Resolution (PPI)",
        attributeVal: "46 PPI (Approx 75 in viewing distance)",
      },
      {
        attribute: "Colors",
        attributeVal: "RGB",
      },
      {
        attribute: "Color Profile",
        attributeVal: "Adobe RGB (1998)",
      },
      {
        attribute: "Font",
        attributeVal: "Jubilat and New Hero",
      },
      {
        attribute: "Margins (Inches)",
        attributeVal: "1''",
      },
      {
        attribute: "Bleed (Inches)",
        attributeVal: "0.25''",
      },
    ],
  },
  {
    image: pageDesignThree,
    imageDesktop: pageDesignThree,
    imageTitle: "Menu",
    imageSubtitle: "Food Truck",
    attributes: [
      {
        attribute: "Software",
        attributeVal: "InDesign",
      },
      {
        attribute: "Print Media Type",
        attributeVal: "Menu",
      },
      {
        attribute: "Trim Size (Inches)",
        attributeVal: "84'' x 36''",
      },
      {
        attribute: "Resolution (PPI)",
        attributeVal: "150",
      },
      {
        attribute: "Colors",
        attributeVal: "CMYK",
      },
      {
        attribute: "Color Profile",
        attributeVal: "US Sheetfed Coated V2",
      },
      {
        attribute: "Font",
        attributeVal: "Halcom",
      },
      {
        attribute: "Margins (Inches)",
        attributeVal: "1.5'' (L & R), 0.5'' (T & B)",
      },
      {
        attribute: "Bleed (Inches)",
        attributeVal: "0.25''",
      },
    ],
  },
];

export default pageDesigns;
