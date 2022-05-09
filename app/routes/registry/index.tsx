import { HeaderNav } from "~/components/HeaderNav/HeaderNav";

export default function Registry() {
  return (
    <>
      <HeaderNav currentPage="Registry" />
      <div className="sm:pt-24">
       <a href="https://www.honeyfund.com/wedding/do-tzintzev-07-16-2022" className="underline to-blue-700"> 🧳 Fund our Southern European Honeymoon  ✈️✈️ ✈️ ✈️ ✈️ </a>
        <script
          id="script_myregistry_giftlist_iframe"
          type="text/javascript"
          src="//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=DkxE7O6rdbvLs3LqrsF0kQ2&v=2"
        ></script>
      </div>
    </>
  );
}
