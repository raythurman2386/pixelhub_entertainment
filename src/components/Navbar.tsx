import Link from "next/link";
import Image from 'next/image'
import NextLogo from './nextjs.svg'

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between mb-3">
      <div className="flex items-center">
        <Image className="h-8 w-8 mr-2" src={NextLogo} alt="Next.js Logo" />
        <span className="text-white font-bold text-xl">Pixelhub Entertainment</span>
      </div>
      <div className="flex items-center">
        <Link
          href="/gaming"
          className="text-white font-medium text-lg mr-6 hover:text-gray-400 transition duration-300"
        >
          Gaming
        </Link>
        <Link
          href="/movies"
          className="text-white font-medium text-lg hover:text-gray-400 transition duration-300"
        >
          Movies
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
