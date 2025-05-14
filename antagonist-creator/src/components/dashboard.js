import { useState } from "react";
import {
  EASY,
  ELITE,
  OVERWHELMING,
  STANDARD,
} from "../config/difficulty.config";
import { CREATURE_TYPE } from "../config/creature/defaults/types";
import { ROLES } from "../config/creature/defaults/roles";

const { GUARDIAN, ABBERATION, SYNTHETIC, LOCAL_FAUNA } = CREATURE_TYPE;
const { BRUTE, LURKER, PSYCHIC, RANGED, SWARM } = ROLES;

export const Dashboard = ({ onGenerateStart }) => {
  const [crewCount, setCrewCount] = useState("1");
  const [difficulty, setDifficulty] = useState(EASY);
  const [type, setType] = useState(ABBERATION);
  const [role, setRole] = useState(BRUTE);
  return (
    <>
      <label>
        Crew count:
        <select
          name="selectedCrewCount"
          defaultValue={crewCount}
          onChange={(e) => setCrewCount(e.target.value)}
        >
          <option value="1">One-member crew</option>
          <option value="3">Three-member crew</option>
          <option value="5">Five-member crew</option>
        </select>
      </label>

      <label>
        Difficulty:
        <select
          name="selectedDifficulty"
          defaultValue={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value={EASY}>{EASY}</option>
          <option value={STANDARD}>{STANDARD}</option>
          <option value={ELITE}>{ELITE}</option>
          <option value={OVERWHELMING}>{OVERWHELMING}</option>
        </select>
      </label>

      <label>
        Creature type:
        <select
          name="selectedCreaturType"
          defaultValue={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value={ABBERATION}>{ABBERATION}</option>
          <option value={SYNTHETIC}>{SYNTHETIC}</option>
          <option value={LOCAL_FAUNA}>{LOCAL_FAUNA}</option>
        </select>
      </label>

      <label>
        Creature type:
        <select
          name="selectedCreaturRole"
          defaultValue={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value={BRUTE}>{BRUTE}</option>
          <option value={LURKER}>{LURKER}</option>
          <option value={PSYCHIC}>{PSYCHIC}</option>
          <option value={RANGED}>{RANGED}</option>
          <option value={SWARM}>{SWARM}</option>
        </select>
      </label>

      <button
        onClick={() =>
          onGenerateStart({
            crewCount,
            difficulty,
            role,
            type,
          })
        }
      >
        GENERATE UNIQUE ENCOUNTER
      </button>
      <button
        onClick={() =>
          onGenerateStart({
            crewCount,
            difficulty,
            role,
            type,
          })
        }
      >
        GENERATE GUARDIAN
      </button>
      <button
        onClick={() =>
          onGenerateStart({
            crewCount,
            difficulty,
            role,
            type,
          })
        }
      >
        GENERATE KNOWN THREAT
      </button>
    </>
  );
};
