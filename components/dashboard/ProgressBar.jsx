const ProgressBar = ({ percent, label, color = "#524fd5" }) => (
  <div
    role="progressbar"
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={percent}
    aria-label={label}
    className="h-2 overflow-hidden rounded-full bg-[#ece9ff]"
  >
    <div className="h-full duration-500 rounded-full" style={{ width: `${percent}%`, background: color }} />
  </div>
);

export default ProgressBar;
