import type { MetaFunction } from "remix";
import { Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};


// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Anna & George",
    description: "Come celebrate our marriage with us!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {

  return (
    <div className="remix__page">
      <div className="bg-hero-image w-screen h-screen bg-no-repeat text-white bg-cover bg-center">
        <header>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center ">
                <Link to="/" title="Anna & George wedding">
                  <span className="font-display lg:text-4xl md:text-2xl sm:text-xl xs:text-l">
                    anna & george
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </header>
        {/* <div className="grid grid-rows-4"> */}
        <main className="flex flex-col text-center">
          <div>
            <div className="text-body uppercase text-xl">
              <svg viewBox="0 0 500 100">
                <path
                  id="curve"
                  fill="transparent"
                  d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                />
                <text
                  width="500"
                  className="fill-white font-bold tracking-widest"
                >
                  <textPath
                    xlinkHref="#curve"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    You're invited to
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="font-bold text-4xl s:text-xl uppercase">
              the
              <br /> wedding
              <br /> of
            </div>
            <div className="font-display text-8xl s:text-2xl py-6">
              Anna & George
            </div>
          </div>
          <div className="uppercase text-bold">
            <p className="text-2xl tracking-wider">Saturday</p>
            <p className="text-4xl">07 · 16 · 22</p>
            <p className="text-2xl tracking-wider">Chicago</p>
          </div>
        </main>
      </div>
    </div>
  );
}
