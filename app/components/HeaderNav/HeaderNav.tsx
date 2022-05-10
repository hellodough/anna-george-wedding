import { Link } from "remix";

const TravelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

const RSVPIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
    />
  </svg>
);

const RegistryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
    />
  </svg>
);

const DetailsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const navigation = [
  // { name: "Bridesmaids", href: "/bridesmaids" },
  { name: "Details", href: "/details", icon: <DetailsIcon /> },
  { name: "Travel", href: "/travel", icon: <TravelIcon /> },
  // {
  //   name: "Registry",
  //   href: "https://www.myregistry.com/wedding-registry/anna-do-and-george-tzintzev-chicago-il/3214448",
  //   icon: <RegistryIcon />,
  //   external: true,
  // },
  // { name: "Registry", href: "/registry", icon: <RegistryIcon /> },
  { name: "RSVP", href: "/rsvp", icon: <RSVPIcon /> },
  // { name: 'Our Story', href: '#' },
];

type HeaderNavProps = {
  currentPage?: string;
  inverted?: boolean;
};
export function HeaderNav({ currentPage, inverted }: HeaderNavProps) {
  return (
    <header className="remix-app__header">
      {/* desktop size nav */}
      <div className="remix-app__header-content absolute hidden sm:block min-w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
          <div className="relative items-center h-16">
            <div
              className={`flex justify-between items-center gap-36 ${
                inverted ? "text-white" : "text-black"
              }`}
            >
              <div>
                <Link to="/" title="Anna & George wedding">
                  <span className="font-display lg:text-4xl md:text-2xl sm:text-xl xs:text-l">
                    anna & george
                  </span>
                </Link>
              </div>
              <NavMenu currentPage={currentPage} inverted={inverted} />
            </div>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className="sm:hidden pt-6">
        <div
          className={`text-center ${inverted ? "text-white" : "text-black"}`}
        >
          <div>
            <Link to="/" title="Anna & George wedding">
              <span className="font-display text-6xl">anna & george</span>
            </Link>
          </div>
          <MobileNavMenu currentPage={currentPage} inverted={inverted} />
        </div>
      </div>
    </header>
  );
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavMenu({ currentPage, inverted }: HeaderNavProps) {
  const colorClass = inverted ? "text-white" : "text-black";
  const selectedClass = "underline decoration-sky-500 decoration-4";
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4 text-2xl font-normal">
        {navigation.map((item) => {
          if (item.external) {
            return <a href={item.href} className={`${colorClass} px-3 py-2 rounded-md uppercase hover:underline hover:decoration-dashed hover:decoration-yellow-400`} key={item.name}>{item.name}</a>;
          }
          return (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                currentPage === item.name && selectedClass,
                `${colorClass} px-3 py-2 rounded-md uppercase hover:underline hover:decoration-dashed hover:decoration-yellow-400`
              )}
              aria-current={currentPage === item.name ? "page" : undefined}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function MobileNavMenu({ currentPage, inverted }: HeaderNavProps) {
  const colorClass = inverted ? "text-white" : "text-black";
  const selectedClass = "underline decoration-sky-500 decoration-4";
  return (
    <div
      className={`flex border-b-2 justify-around pt-4 ${
        inverted ? "border-white" : "border-black"
      }`}
    >
      {navigation.map((item) => (
        <div key={item.name} className="hover:border-b-5 hover:border-b-yellow">
          <Link
            to={item.href}
            className={classNames(
              currentPage === item.name && selectedClass,
              `${colorClass} px-3 py-2 rounded-md uppercase text-center hover:underline hover:border-b-5 hover:italic hover:decoration-dashed hover:decoration-yellow-400`
            )}
            aria-current={currentPage === item.name ? "page" : undefined}
          >
            {/* {item.icon} */}
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
