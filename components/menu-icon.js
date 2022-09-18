import Image from 'next/image';

const MenuIcon = ({props}) => (
  <Image
    src={props.imgSrc} // Route of the image file
    height={props.imgHeight} // Desired size with correct aspect ratio
    width={props.imgWidth} // Desired size with correct aspect ratio
    alt={props.imgAltText}
  />
);

export default MenuIcon;