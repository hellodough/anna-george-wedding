import { startCase, lowerCase } from "lodash";

export const formatGuestName = (guestName: string) => startCase(lowerCase(guestName.trim()));