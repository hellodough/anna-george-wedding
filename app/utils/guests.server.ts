// app/utils/user.server.ts
import { prisma } from "~/db.server";
import type { RSVPForm } from "./types.server";

export const createUser = async (guest: RSVPForm) => {
  const newGuest = await prisma.guest.create({
    data: {
      ...guest
    },
  });
  return { name: newGuest.name, email: newGuest.email };
};
