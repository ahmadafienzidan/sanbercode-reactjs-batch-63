import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6149C3] to-[#B65BC2]">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-4 text-center">
        <div className="mb-8">
          <img src="https://cdn-icons-png.flaticon.com/512/755/755014.png" alt="404 Illustration" className="w-48 mx-auto" />
        </div>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved. Let's get you back on track!</p>

        <Link to="/" className="inline-block bg-[#6149C3] hover:bg-[#B65BC2] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
          {" "}
          Go Back Home{" "}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
