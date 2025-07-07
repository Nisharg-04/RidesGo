import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CADCFC] to-[#A8C8EC]">
      <div className="relative h-screen flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/cover1.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="pt-12 pl-8">
            <img className="w-24" src="logo.png" alt="RidesGo Logo" />
          </div>

          <div className="flex-1 flex items-end">
            <div className="w-full bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-t-3xl shadow-2xl">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-[#00246B] mb-3">
                  Welcome to RidesGo
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  Your journey starts here. Safe, fast, and reliable rides.
                </p>

                <div className="space-y-4">
                  <Link
                    to="/login"
                    className="block w-full bg-[#00246B] hover:bg-[#001845] text-white py-4 font-semibold rounded-lg text-lg transition-colors"
                  >
                    Get Started
                  </Link>

                  <p className="text-gray-500 text-sm">
                    By continuing, you agree to our Terms of Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
