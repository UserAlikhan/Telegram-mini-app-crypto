export default function Profile() {
  return (
    <div className="flex flex-col px-10 py-5 bg-[#181818] w-full h-full gap-5">
      <h1 className="text-white text-2xl font-bold text-center">Profile</h1>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-700/50 rounded-xl p-6 text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <h2 className="text-white text-xl font-bold">Username</h2>
          <p className="text-gray-400">Rank #2932</p>
        </div>
        
        <div className="bg-gray-700/50 rounded-xl p-4">
          <h3 className="text-white font-bold mb-3">Statistics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Total TON</span>
              <span className="text-white">26,031</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Transactions</span>
              <span className="text-white">142</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Yield</span>
              <span className="text-green-400">98.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
