import { HeaderNav } from "~/components/HeaderNav/HeaderNav";

export default function Travel() {
  const hotelImage =
    "https://selina-res.cloudinary.com/image/upload/if_iw_gt_1920,c_scale,w_1920/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/5gOnBGqO994d9hacazqETG/03b9086913f471088759829c6a2bd0f5/Chicago_-_standard_-_02.jpeg";
  return (
    <div>
      <HeaderNav currentPage="Travel" />
      <div className="sm:pt-24 pt-12 text-center">
        <h1 className="text-sky-700 font-display lg:text-5xl text-4xl sm:mb-12 mb-4">
          Travel
        </h1>
        <div className="mx-4">
          <p>we reserved rooms for our out of town guests at the Selina Hotel,</p>
          <p> all you have to do is mention the <strong>Do wedding block</strong></p>
          <p>when booking over the phone to get discounted rates</p>
          starting at <strong>$129</strong> + taxes
        </div>
        <div className="mt-4">
          <p className="font-bold">selina hotel</p>
          <p>100 E Chestnut St</p>
          <p>Chicago, IL 60611</p>
          <p>Phone #: 786-275-5414</p>
          <p className="py-1">
            <a
              href="https://goo.gl/maps/dbhqH1PHKWQBgdXJA"
              className=" hover:bg-blue-800 hover:text-white underline decoration-slate-700 decoration-2 text-blue-700 "
            >
              Find on Google Maps
            </a> <span className="mx-4">|</span>
          <a
            href="tel:7862755414"
            className="hover:bg-blue-800 hover:text-white underline decoration-slate-700 decoration-2 text-blue-700"
          >
            Call and Reserve Now
          </a>
          </p>
          <p className="py-1">
          </p>
        </div>
      </div>
      <div>
        <img src={hotelImage} />
      </div>
    </div>
  );
}
