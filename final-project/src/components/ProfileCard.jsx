import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProfileCard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <main className="md:ml-64 pt-20 px-4 h-screen flex flex-col">
      <div className="p-4 flex-grow">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          {/* Profile Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Profil Pengguna</h1>
              <p className="text-gray-600">Kelola informasi profil Anda</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-[#6149C3] text-white px-4 py-2 rounded-lg hover:bg-[#4d3a9e] transition-colors">Edit Profil</button>
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                Logout
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image  */}
            <div className="w-full md:w-1/3">
              <div className="relative group">
                <img src={user?.image_url || "https://randomuser.me/api/portraits/men/75.jpg"} alt="Profile Photo" className="w-48 h-48 rounded-full object-cover border-4 border-[#6149C3] mx-auto" />
                <div className="absolute bottom-0 right-4 bg-white rounded-full p-2 shadow-md">
                  <button className="text-[#6149C3] hover:text-[#4d3a9e]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 break-all px-4">{user?.image_url || "https://randomuser.me/api/portraits/men/75.jpg"}</p>
              </div>
            </div>
            {/* Profile Details */}
            <div className="w-full md:w-2/3 space-y-6">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-700">Nama Lengkap</h3>
                  <button className="text-[#6149C3] hover:text-[#4d3a9e] flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <span className="text-sm">Edit</span>
                  </button>
                </div>
                <p className="text-gray-600 text-lg">{user?.name || "John Doe"}</p>
              </div>

              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
                <p className="text-gray-600">{user?.email || "john.doe@example.com"}</p>
              </div>

              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Nomor Telepon</h3>
                <p className="text-gray-600">{user?.phone || "+62 812 3456 7890"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileCard;
