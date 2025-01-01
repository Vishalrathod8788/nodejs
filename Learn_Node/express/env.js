// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

// what is zod libarary ?
// zod is a TypeScript-first schema declaration and validation library.
// It is designed to be as simple as possible, and it is built on top of TypeScript's type system,
// which makes it easy to use and understand.

import { z, ZodError } from "zod";

const ageSchema = z.number().min(18).max(100).int().positive();

const userAge = 17;

// const parseUserAge = ageSchema.parse(userAge);
// console.log(parseUserAge);

// try {
//   const parseUserAge = ageSchema.parse(userAge);
//   console.log(parseUserAge);
// } catch (error) {
//   if (error instanceof ZodError) {
//     console.log(error.issues[0].message);
//   } else {
//     console.log(error);
//   }
// }

const portSchema = z.coerce
  .number()
  .min(1)
  .max(65535)
  .int()
  .positive()
  .default(3000);

export const PORT = portSchema.parse(process.env.PORT);
