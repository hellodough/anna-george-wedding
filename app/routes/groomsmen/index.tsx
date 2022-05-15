import { HeaderNav } from "~/components/HeaderNav/HeaderNav";

export default function Groomsmen() {
  const headerProps = {
    currentPage: "groomsmen",
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
          <div className="flex items-center col-span-3 sm:col-span-1 px-4">
            <div>
              <div className="text-4xl xs:my-4 my-8 font-display">Hey,</div>
              <p className="lg:text-lg xs:text-sm mb-6 font-body text-base max-w-sm">
                Thanks for agreeing to do wedding stuff with me, I can't wait to
                celebrate with you. I created this page so we can plan things.
              </p>
              <a
                href="https://doannado.notion.site/Groomsmen-clothes-40bf956158304373893d821d9274488f"
                className="btn-secondary my-4 block text-center"
              >
                Groomsmen Attire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
