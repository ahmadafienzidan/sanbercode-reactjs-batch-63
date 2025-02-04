const Dashboard = () => {
  return (
    <main className="md:ml-64 pt-20 px-4 h-screen">
      <div className="p-4">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#6149C3] text-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Total Jobs</h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>

            <div className="bg-[#B65BC2] text-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Applications</h3>
              <p className="text-3xl font-bold">567</p>
            </div>

            <div className="bg-purple-500 text-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Active Users</h3>
              <p className="text-3xl font-bold">890</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Applications</h3>
            <div className="h-64 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center h-full text-gray-400">Chart Area</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
