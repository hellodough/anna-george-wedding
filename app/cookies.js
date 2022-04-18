import { createCookie } from "remix";

export const userValidated = createCookie("annageorge", {
  maxAge: 604_800, // one week
});