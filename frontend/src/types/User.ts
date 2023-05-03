import type { Team } from "./Team";

export type User = {
  id: string;
  name: string;
  description?: string,
  teams?: Team[]
}
