export const Hero = ({ name, asset, className = '', speechBubble = false }: IHero & { className?: string; speechBubble?: boolean }) => {
  return (
    <div className={`flex flex-col gap-2 items-center ${className}`}>
      <div className="relative">
        <img src={asset} alt={name} className="block w-24 h-24" />
        
        {speechBubble && <div className="absolute bottom-10 left-[7rem]">
          <svg width="274" height="154" viewBox="0 0 274 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M152 0.5L0 154L274 0.5H152Z" fill="white"/>
          </svg>
        </div>}
      </div>
      <p className="text-2xl font-bold tracking-wider">{name}</p>
    </div>
  )
}
