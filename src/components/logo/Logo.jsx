const Logo = ({ footer = false }) => {
  return (
    <a
      href="/"
      aria-label="Vtail Energy home"
      className="flex items-center gap-3 whitespace-nowrap text-[21px] font-extrabold tracking-[.08em] text-white"
    >
      <span className="grid h-8 w-8 rotate-[-45deg] place-items-center rounded-[4px] border-2 border-[#b6d49b] border-t-transparent">
        <span className="rotate-45 text-xs font-black text-[#b6d49b]">V</span>
      </span>
      VTAIL<span className="ml-[-9px] font-light tracking-[.02em]">ENERGY</span>
    </a>
  );
};
export default Logo;
