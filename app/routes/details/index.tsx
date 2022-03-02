import { HeaderNav } from "~/components/HeaderNav/HeaderNav";
import Map, { Popup } from "react-map-gl";

const accessToken =
  "pk.eyJ1IjoiYW5uYWRvIiwiYSI6ImNqamVqdTd4NzFkanUzcHBleXNjbGhqaXYifQ.XVpePfFWqkLkeTonHTwx7A";

export default function Details() {
  const hallwayImg =
    "https://static.showit.co/2400/IZiDTgwpTHS7raIrrpqslA/145774/ofw-styled_shoot-620.jpg";

  // const onMouseOver = (e) => {
  //   setPopupInfo({
  //     latitude: 41.89065654471191,
  //     longitude: -87.68289074400514,
  //   });
  // };

  // const onMouseLeave = () => {
  //   setPopupInfo(undefined);
  // };

  const initialViewState = {
    latitude: 41.89065654471191,
    longitude: -87.68289074400514,
    zoom: 11,
  };

  return (
    <>
      <HeaderNav currentPage="Details" />
      <div className="text-center">
        {/* mobile view */}
        <div className="bg-arbory-hall text-white h-screen bg-cover sm:hidden flex flex-col justify-center text-left pl-16 drop-shadow-md">
          <LocationDetails />
        </div>
        {/* desktop view */}
        <div className="hidden md:block">
          <h1 className="text-sky-700 font-display lg:text-5xl md:text-4xl mb-12 pt-24">
            Details
          </h1>
          <div className="grid grid-cols-6 gap-4 row-auto">
            <div className="col-start-2 col-span-2 row-span-2">
              <img src={hallwayImg} />
            </div>
            <div className="self-center row-span-2 col-start-4 col-span-2">
              <div>
                <LocationDetails />
                <UpdateDetails />
              </div>
              <div className="mt-6">
                <Map
                  initialViewState={initialViewState}
                  style={{ width: 400, height: 400 }}
                  mapStyle="mapbox://styles/annado/cl01u3p11000714mgq9c2y5vc"
                  mapboxAccessToken={accessToken}
                >
                  <Popup
                    anchor="top"
                    longitude={-87.68289074400514}
                    latitude={41.89065654471191}
                    closeOnClick={false}
                    // onClose={() => setPopupInfo(undefined)}
                  >
                    The Arbory
                  </Popup>
                </Map>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const UpdateDetails = () => (
  <>
    <h3 className="uppercase text-lg mt-4 mb-2 font-semibold">Updates</h3>
    <p>Save the dates have been sent,<br/> please wait for RSVP information</p>
  </>
);

const LocationDetails = () => (
  <>
    <h2 className="uppercase font-bold text-2xl mb-4">The Venue</h2>
    <div className="text-l">
      <p className="bold">The Arbory</p>
      <p>2219 WEST GRAND AVENUE</p>
      <p>CHICAGO, ILLINOIS 60612</p>
      <a
        href="https://goo.gl/maps/xYqNR3hRqGi8TaD59"
        className="hover:bg-blue-800 hover:text-white underline decoration-slate-700 decoration-2 sm:text-blue-700 text-white"
      >
        Find on Google Maps
      </a>
    </div>
  </>
);
