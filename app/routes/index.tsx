import type { MetaFunction } from "remix";
import { Link } from "remix";
import { HeaderNav } from "~/components/HeaderNav/HeaderNav";

type IndexData = {
  resourcesm: Array<{ name: string; url: string }>;
  demosm: Array<{ name: string; to: string }>;
};


// httpsm://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Anna & George",
    description: "Come celebrate our marriage with us!",
  };
};

// httpsm://remix.run/guides/routing#index-routes
export default function Index() {

  return (
    <div className="remix__page">
      <div className="bg-hero-image w-screen h-screen bg-no-repeat text-white bg-cover bg-center">
        <HeaderNav inverted={true}/>
        <main className="flex flex-col justify-center text-center pt-24">
          <div>
            <div className="text-body uppercase text-lg">
              <svg viewBox="0 0 500 75">
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
            <div className="font-bold sm:text-5xl text-2xl uppercase">
              the
              <br /> wedding
              <br /> of
            </div>
            <div className="font-display sm:text-9xl text-6xl py-6">
              Anna & George
            </div>
          </div>
          <div className="uppercase text-semibold">
            <p className="sm:text-4xl text-xl tracking-widest">Saturday</p>
            <p className="sm:text-5xl text-bold text-2xl">07 · 16 · 22</p>
            <p className="sm:text-4xl tracking-widest text-xl">Chicago</p>
          </div>
        </main>
      </div>
    </div>
  );
}
