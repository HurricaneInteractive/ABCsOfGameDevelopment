export const Boon = ({ asset, name, className = '' }: IBoon & { className?: string }) => (
  <div className={`w-[140px] transition-transform ${className}`}>
    <img src={asset} alt={name} className="w-full" />
  </div>
)
