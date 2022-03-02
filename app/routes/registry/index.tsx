import { HeaderNav } from "~/components/HeaderNav/HeaderNav";

export default function Registry() {
  return (
    <>
      <HeaderNav currentPage="Registry" />
      <div className="sm:pt-24">
        <script
          id="script_myregistry_giftlist_iframe"
          type="text/javascript"
          src="//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=DkxE7O6rdbvLs3LqrsF0kQ2&v=2"
        ></script>
      </div>
    </>
  );
}
