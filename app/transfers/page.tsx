export default function Transfers() {
  return (
    <div className="flex flex-col px-10 py-5 bg-[#181818] w-full h-full gap-5">
      <h1 className="text-white text-2xl font-bold text-center">Latest Transfers</h1>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-xl">
          <div>
            <p className="text-white font-medium">Transfer #1</p>
            <p className="text-gray-400 text-sm">2 minutes ago</p>
          </div>
          <p className="text-green-400 font-bold">+50 TON</p>
        </div>
        <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-xl">
          <div>
            <p className="text-white font-medium">Transfer #2</p>
            <p className="text-gray-400 text-sm">5 minutes ago</p>
          </div>
          <p className="text-red-400 font-bold">-25 TON</p>
        </div>
      </div>
    </div>
  );
}
