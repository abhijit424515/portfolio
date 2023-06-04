import Header from "./components/Header";

const techStackIcons: string[] = [
  "html",
  "css",
  "bootstrap",
  "tailwind",
  "javascript",
  "nodejs",
  "mongodb",
  "react",
  "vite",
  "python",
  "django",
  "flutter",
];

const toolStack: string[] = ["docker", "git", "linux", "postman", "aws", "gcp"];
const contacts: {
  partialSrc: string;
  href: string;
}[] = [
  { partialSrc: "github", href: "https://github.com/abhijit424515" },
  {
    partialSrc: "linkedin",
    href: "https://www.linkedin.com/in/abhijit-amrendra-kumar/",
  },
  { partialSrc: "youtube", href: "https://www.youtube.com/@aak.425" },
];

function App() {
  return (
    <div className="flex flex-col items-center gap-y-[1rem]">
      <Header />
      <div className="flex flex-col md:flex-row gap-x-[2rem] my-[15vh] items-center">
        <div>
          <p className="text-[2.5rem] font-[700] text-transparent bg-clip-text bg-gradient-to-tl from-cyan-500 to-green-600 drop-shadow-sm leading-[1] mb-[1rem]">
            Software <br />
            Developer
          </p>
          <p>Hi. I am Abhijit Amrendra Kumar.</p>
          <p>A passionate developer from Delhi, India.</p>
          <div className="mt-[2rem] flex gap-x-[1rem]">
            {contacts.map((x) => (
              <a
                key={x.partialSrc}
                className="h-[2rem] w-[2rem]"
                href={x.href}
                target="_blank"
              >
                <img
                  className="w-full h-full"
                  src={`/assets/contact/${x.partialSrc}.svg`}
                />
              </a>
            ))}
          </div>
        </div>
        <img
          id="profileImage"
          src="/me.png"
          alt="profileImage"
          className="w-[30vh] h-[30vh] object-cover border-2 border-black"
        />
      </div>
      <div className="flex items-center text-[1.5rem] gap-x-[1rem]">
        <p>Tech Stack </p>
        <p>|</p>
        <div className="flex gap-x-[0.5rem]">
          {techStackIcons.map((x, i) => (
            <div className="h-[2rem] w-[2rem] rounded-full p-[0.2rem]">
              <img
                className="w-full h-full"
                key={i}
                src={"/assets/techStacks/" + x + ".svg"}
                alt={x}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center text-[1.5rem] gap-x-[1rem]">
        <p>Tools </p>
        <p>|</p>
        <div className="flex gap-x-[0.5rem]">
          {toolStack.map((x, i) => (
            <div className="h-[2rem] w-[2rem] rounded-full p-[0.2rem]">
              <img
                className="w-full h-full"
                key={i}
                src={"/assets/tools/" + x + ".svg"}
                alt={x}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
