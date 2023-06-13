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
    <div className="flex flex-col items-center gap-y-4 md:px-2 px-4">
      <Header />
      <div className="flex flex-col md:flex-row md:gap-x-8 gap-y-8 md:h-[60vh] h-[80vh] items-center justify-center">
        <div>
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-cyan-500 to-green-600 drop-shadow-sm leading-[1] mb-4">
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
      <div className="flex md:flex-row flex-col items-center text-2xl md:gap-x-4 gap-y-4 md:mt-0 mt-[0vh] mb-4">
        <p>Tech Stack</p>
        <div className="grid md:grid-cols-12 grid-cols-6 gap-2">
          {techStackIcons.map((x, i) => (
            <div key={i} className="h-8 w-8 rounded-full p-[0.2rem]">
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
      <div className="flex md:flex-row flex-col items-center text-2xl md:gap-x-4 gap-y-4 md:mb-0 mb-[10vh]">
        <p>Tools </p>
        <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
          {toolStack.map((x, i) => (
            <div key={i} className="h-[2rem] w-[2rem] rounded-full p-[0.2rem]">
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
