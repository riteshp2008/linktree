import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import {
  FaLink,
  FaUserPlus,
  FaGlobe,
  FaStar,
  FaChartLine,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="bg-transparent bg-opacity-95 rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gray-700 mb-4">
            LinkTree
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            One link to rule them all. Share your entire online world in a
            single click.
          </p>

          <SignedIn>
            <Link
              href="/dashboard"
              className="inline-block px-8 py-4 bg-white text-black border-2 shadow-md text-white rounded-full font-bold text-lg hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <FaLink className="inline mr-2" />
              Go to My Links
            </Link>
          </SignedIn>

          <SignedOut>
            <div className="space-y-4">
              <Link
                href="/sign-up"
                className="inline-block px-8 py-4 bg-white text-black border-2 shadow-md text-white rounded-full font-bold text-lg hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <FaUserPlus className="inline mr-2" />
                Create Your LinkTree
              </Link>
            </div>
          </SignedOut>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-8 rounded-xl shadow-2xl shadow-inner border-2">
            <FaGlobe className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              One Link for Everything
            </h3>
            <p className="text-gray-600">
              Combine all your profiles, projects, and links into one simple
              URL.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg shadow-inner border-2">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customizable Design</h3>
            <p className="text-gray-600">
              Make your page stand out with custom themes and layouts.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg shadow-inner border-2">
            <FaChartLine className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Performance</h3>
            <p className="text-gray-600">
              Gain insights with analytics on clicks and visitor engagement.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
