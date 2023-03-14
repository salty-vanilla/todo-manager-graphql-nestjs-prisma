import { Project } from "./Project";
import { User } from "./User";

export type BacklogItem = {
  name: string;
  description: string;
  projectInfo: Project;
  assignedUserInfo: User;
  // start_date: string;
  // target_date: string;
  // end_date: string;
}
