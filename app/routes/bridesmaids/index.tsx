import { HeaderNav } from "~/components/HeaderNav/HeaderNav";


export default function Bridesmaids() {
  const headerProps = {
    currentPage: "bridesmaids",
    inverted: false
  }
  return (
    <div className="bg-amber-400 h-screen bg-cover">
      <HeaderNav {...headerProps} />
      <div className="lg:px-20 sm:px-4">
        <div className="grid xs:gap-1 gap-4 xs:grid-cols-1 grid-cols-2 s:grid-cols-4">
          <div className="flex items-baseline items-stretch">
            <img className="w-1/2" src="https://github.com/hellodough/anna-george-wedding/blob/e4e91e46c49ae9ddb7f87874d4d99c59e657b686/ado-wedding/assets/images/smile-cutout.png?raw=true" />
          </div>
          {/* welcome text */}
          <div className="flex items-center s:col-span-3">
            <div>
              <div className="text-4xl xs:my-4 my-8 font-display">Hey,</div>
              <p className="lg:text-lg xs:text-sm mb-6 font-body text-base max-w-sm">
                Thanks for being part of my bridal party, I can't wait to
                celebrate with you. I created this page so we can plan things
                out, and we can use "discord" for chatting.
              </p>
              <a href="https://discord.gg/UGqPPgnPNH" className="btn-primary">
                Start talking
              </a>
            </div>
          </div>
          <div hidden>
            <p>
              I’m still working on this page, so it is empty for now, but I’m
              planning on including:
            </p>
            <ul>
              <li>bridesmaid dress colors</li>
              <li>wedding schedule</li>
              <li>other bridesmaids contact information</li>
              <li>dress inspo</li>
            </ul>
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
