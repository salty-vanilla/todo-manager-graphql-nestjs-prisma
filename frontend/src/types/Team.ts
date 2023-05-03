import type { User } from "./User";

export type Team = {
  id: number,
  name: string,
  description?: string,
  members: User[],
}
