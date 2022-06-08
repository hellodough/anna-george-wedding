// app/utils/user.server.ts
import { prisma } from "~/db.server";
import { formatGuestName } from "~/routes/rsvp/helpers";
import type { RSVPForm } from "./types.server";

export const submitResponse = async (
  guest: RSVPForm,
  userExists: boolean,
) => {
  if (userExists) {
    const updatedGuest = await prisma.guest.update({
      data: {
        ...guest,
      },
      where: { name: formatGuestName(guest.name) }
    });
    return { name: updatedGuest.name };
  }
  const newGuest = await prisma.guest.create({
    data: {
      ...guest,
    },
  });
  return { name: newGuest.name };
};
