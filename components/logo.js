import Image from 'next/image';

const Logo = () => (
  <Image
    src="/images/taco-icon.png" // Route of the image file
    height={50} // Desired size with correct aspect ratio
    width={50} // Desired size with correct aspect ratio
    alt="Taco logo"
  />
);

export default Logo;