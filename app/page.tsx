import Image from 'next/image';
import HeroImage from '@/app/assets/Hero-Image.png';
import Navbar from '@/app/components/Navbar';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
