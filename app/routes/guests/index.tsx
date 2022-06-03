import { Guest } from "@prisma/client";
import * as React from "react";
import { json, useFetcher, useLoaderData } from "remix";
import { HeaderNav } from "~/components/HeaderNav/HeaderNav";
import { prisma } from "~/db.server";
type LoaderData = Awaited<ReturnType<typeof getGuests>>;

interface AttendingGuest {
  name: string;
  mealOption: string | null;
  dietRestrictions?: string | null;
}

async function getGuests() {
  const guests = await prisma.guest.findMany();
  return { guests };
}

async function deleteGuest(id: string) {
  const deleteUser = await prisma.guest.delete({
    where: {
      id,
    },
  });

  return deleteUser.name;
}

export async function loader({ request }) {
  return json<LoaderData>(await getGuests());
}

export default function Guests() {
  const data = useLoaderData<LoaderData>();
  const guestList = useFetcher();
  const attendingList: AttendingGuest[] = [];
  const declinedList: string[] = [];
  let chickenCount = 0;
  let meatCount = 0;
  let vegCount = 0;

  const tallyMeals = (mealChoice: string) => {
    switch(mealChoice) {
      case "chicken":
        chickenCount += 1;
        break;
      case "meat": 
        meatCount += 1;
        break;
      default:
        vegCount += 1;
        break;
    }
  }

  data.guests.forEach((guest) => {
    if (guest.attending) {
      attendingList.push({
        name: guest.name,
        mealOption: guest.mealChoice,
        dietRestrictions: guest.dietRestrictions,
      });
      tallyMeals(guest.mealChoice || '');
      
      if (guest.guestName) {
        attendingList.push({
          name: guest.guestName,
          mealOption: guest.guestMealChoice,
        });
        tallyMeals(guest.guestMealChoice || '');
      }
    } else {
      declinedList.push(guest.name);
    }
  });

  const onDeleteClick = (id: string) => {
    console.log(id);
    deleteGuest(id);
  };
  const MealChoices = ({ mealChoice }: { mealChoice: string | null }) => (
    <>
      <td className="px-6 py-4">{mealChoice === "meat" && "🥩"}</td>
      <td className="px-6 py-4">{mealChoice === "chicken" && "🐔"}</td>
      <td className="px-6 py-4">{mealChoice === "vegetarian" && "🥗"}</td>
    </>
  );

  return (
    <div className="h-screen">
      <HeaderNav />
      <div className="lg:px-20 sm:px-4 pt-52 font-body">
        <p>A list of all the attending guests</p>
        <p>🐔 Chicken meals: {chickenCount}</p>
        <p>🥩 Meat meals: {meatCount}</p>
        <p>🥗 Veg meals: {vegCount}</p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="table-auto w-full text-sm text-left text-white ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  index
                </th>
                <th scope="col" className="px-6 py-3">
                  name
                </th>
                <th scope="col" className="px-6 py-3">
                  meat
                </th>
                <th scope="col" className="px-6 py-3">
                  chicken
                </th>
                <th scope="col" className="px-6 py-3">
                  vegetarian
                </th>
                <th scope="col" className="px-6 py-3">
                  diet restrictions
                </th>
              </tr>
            </thead>
            <tbody>
              {attendingList.map((guest, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{guest.name}</td>
                  <MealChoices mealChoice={guest.mealOption} />
                  <td className="px-6 py-4">{guest.dietRestrictions}</td>
                </tr>
              ))}
              {/* totals */}
            </tbody>
          </table>
        </div>
        {declinedList.length > 0 && (
          <div>
            <p>A list of all the declined guests</p>
            <ol className="list-decimal">
              {declinedList.map((guest) => (
                <li>{guest}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
