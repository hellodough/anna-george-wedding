import * as React from "react";
import { json, useLoaderData } from "remix";
import { HeaderNav } from "~/components/HeaderNav/HeaderNav";
import { prisma } from "~/db.server";
type LoaderData = Awaited<ReturnType<typeof getGuests>>;
async function getGuests() {
  const guests = await prisma.guest.findMany();
  return { guests };
}
export async function loader({ request }) {
  return json<LoaderData>(await getGuests());
}
export default function Guests() {
  const data = useLoaderData<LoaderData>();

  return (
    <div className="h-screen">
      <HeaderNav />
      <div className="lg:px-20 sm:px-4 pt-52 font-body">
        <p>A list of all the guests</p>
        <ol>
          {data?.guests.map((guest) => {
            return (
              <>
                {guest.attending && (
                  <li>
                    {guest.name}
                    {guest.guestName && ` with ${guest.guestName}`}
                  </li>
                )}
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
