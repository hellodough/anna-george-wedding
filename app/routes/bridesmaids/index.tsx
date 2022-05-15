import { HeaderNav } from "~/components/HeaderNav/HeaderNav";

export default function Bridesmaids() {
  const headerProps = {
    currentPage: "bridesmaids",
    inverted: false,
  };
  return (
    <div className="bg-amber-400 h-screen bg-cover">
      <HeaderNav {...headerProps} />
      <div className="lg:px-20 sm:px-4 sm:pt-24 pt-12 ">
        <div className="grid xs:gap-1 gap-4 xs:grid-cols-1 grid-cols-2 s:grid-cols-4">
          <div className="sm:flex items-baseline items-stretch justify-center hidden">
            <img
              className="max-w-md"
              src="https://github.com/hellodough/anna-george-wedding/blob/e4e91e46c49ae9ddb7f87874d4d99c59e657b686/ado-wedding/assets/images/smile-cutout.png?raw=true"
            />
          </div>
          {/* welcome text */}
          <div className="flex items-center col-span-3 sm:col-span-1 px-4">
            <div>
              <div className="text-4xl xs:my-4 my-8 font-display">Hey,</div>
              <p className="lg:text-lg xs:text-sm mb-6 font-body text-base max-w-sm">
                Thanks for being part of my bridal party, I can't wait to
                celebrate with you. I created this page so we can plan things
                out, and we can use "discord" for chatting.
              </p>
              <a
                href="https://discord.gg/UGqPPgnPNH"
                className="btn-primary mb-4 block text-center"
              >
                📱 &nbsp; Start talking
              </a>
              <a
                href="https://doannado.notion.site/Bridal-Partiers-ae9b90003b7e4fd783d6aa4f76ab58ef"
                className="btn-secondary my-4 block text-center"
              >
                🤼  &nbsp;  Bridal Partiers
              </a>
              <a
                href="https://doannado.notion.site/Bridesmaid-clothing-5601787618d2487ea3c8da2f0851c6f8"
                className="btn-secondary my-4 block text-center"
              >
                👠  &nbsp;  Bridesmaids Attire
              </a>
              <a
                href="https://doannado.notion.site/Bachelorette-Party-fd45c58fccae4619b986d2ed7a7128e1"
                className="btn-secondary my-4 block text-center"
              >
                🥳 &nbsp;   Bachlorette party
              </a>
              <a
                href="https://doannado.notion.site/Bridesmaids-schedule-0a241d63865349878a51b8cbdf4c0adc"
                className="btn-secondary my-4 block text-center"
              >
                🕦 &nbsp;   Wedding Schedule (in progress)
              </a>
            </div>
          </div>
          {/* <iframe
        src="https://discord.com/widget?id=932775591525097494&theme=dark"
        width="350"
        height="500"
        allowTransparency={true}
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe> */}
        </div>
      </div>
    </div>
  );
}
