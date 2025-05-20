import { ROLES } from "../defaults/roles";
import { anansi } from "./anansi";
import { arash } from "./arash";
import { brahmari } from "./brahmari";
import { titan } from "./titan";

export const guardians = [
  {
    name: "Anansi",
    config: anansi,
    role: ROLES.LURKER,
  },
  {
    name: "Arash",
    config: arash,
    role: ROLES.RANGED,
  },
  {
    name: "Brahmari",
    config: brahmari,
    role: ROLES.SWARM,
  },
  {
    name: "Titan",
    config: titan,
    role: ROLES.BRUTE,
  },
];
