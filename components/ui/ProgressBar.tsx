interface ProgressBarProps {
  percentage: number; // 0-100
  height?: string;
  backgroundColor?: string;
  fillColor?: string;
  className?: string;
}

export default function ProgressBar({ 
  percentage, 
  height = "h-2", 
  backgroundColor = "bg-gray-600", 
  fillColor = "bg-blue-500",
  className = ""
}: ProgressBarProps) {
  return (
    <div className={`relative w-full ${height} ${backgroundColor} rounded-full overflow-hidden ${className}`}>
      <div 
        className={`h-full ${fillColor} rounded-full transition-all duration-300 ease-out`}
        style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <p className="text-white text-sm font-medium">{percentage}%</p>
      </div>
    </div>
  );
}
