const ChangePassCard = () => {
  return (
    <main className="md:ml-64 pt-20 px-4 h-screen">
      <div className="p-4">
        <div className="bg-white rounded-lg p-6 shadow-sm max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Change Password</h1>
          <form action="/dashboard/change-password" method="POST">
            <div className="mb-4">
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input type="password" id="current-password" name="current-password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#6149C3] focus:border-[#6149C3]" />
            </div>
            <div className="mb-4">
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input type="password" id="new-password" name="new-password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#6149C3] focus:border-[#6149C3]" />
            </div>
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input type="password" id="confirm-password" name="confirm-password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#6149C3] focus:border-[#6149C3]" />
            </div>
            <button type="submit" className="w-full bg-[#6149C3] text-white px-4 py-2 rounded-lg hover:bg-[#4f3aa8] transition">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ChangePassCard;
