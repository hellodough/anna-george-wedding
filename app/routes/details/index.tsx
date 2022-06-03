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
      <div className="text-center font-body">
        {/* mobile view */}
        <div className="sm:hidden">
          <UpdateDetails />
        <div className="flex flex-col justify-center text-left px-10">
          <LocationDetails />
          <ScheduleDetails />
          <Logistics />
        </div>
        </div>
        {/* <div className="bg-arbory-hall text-white h-screen bg-cover sm:hidden flex flex-col justify-center text-left pl-16 drop-shadow-md">
          <LocationDetails />
        </div> */}
        {/* desktop view */}
        <div className="hidden md:block">
          <h1 className="text-sky-700 font-display lg:text-5xl md:text-4xl mb-12 pt-24">
            Details
          </h1>
          <UpdateDetails />
          <div className="grid grid-cols-6 gap-16 row-auto">
            <div className="col-start-2 col-span-2 row-span-2">
              <img src={hallwayImg} />
            </div>
            <div className="self-center row-span-2 col-start-4 col-span-2 text-left">
              <LocationDetails />
              <ScheduleDetails />
              <Logistics />
              {/* <div className="mt-6">
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
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const UpdateDetails = () => (
  <div
    className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-3"
    role="alert"
  >
    <p className="font-bold">Updates</p>
    <p className="text-sm">
      Invitations have just been sent, you can also RSVP on the website. Please
      RSVP by June 25!
    </p>
  </div>
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
        className="hover:bg-blue-800 hover:text-white underline decoration-slate-700 decoration-2 sm:text-blue-700"
      >
         🗺️ Find on Google Maps
      </a>
    </div>
  </>
);

const ScheduleDetails = () => (
  <div className="py-4">
    <h2 className="uppercase font-bold text-2xl mb-4">The Time</h2>
    <div className="text-l">
      <p>
        Ceremony begins at <strong>6 pm</strong>
      </p>
      <p>Dinner and reception follows</p>
      <p>
        Ends at <strong>midnight</strong>
      </p>
    </div>
  </div>
);

const Logistics = () => (
  <div className="mb-4">
    <h2 className="uppercase font-bold text-2xl mb-4">The Logistics</h2>
    <p>
      🅿️ There is no designated parking, but there is plenty of street parking
      in front of the venue on Grand Ave.
    </p>
  </div>
);
