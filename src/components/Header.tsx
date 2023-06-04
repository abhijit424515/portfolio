export default function Header() {
  return (
    <div className="w-full h-[3rem] flex justify-between px-[2rem] py-[2rem] items-center font-bold font-inter text-[1.1rem]">
      <div className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-400 to-blue-800">
        aak.dev
      </div>
      <div className="flex gap-x-[2rem]">
        <div>Home</div>
        <div>Projects</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
