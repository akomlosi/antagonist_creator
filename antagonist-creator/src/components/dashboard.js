import { useState } from "react";
import {
  EASY,
  ELITE,
  OVERWHELMING,
  STANDARD,
} from "../config/difficulty.config";
import { CREATURE_TYPE } from "../config/creature/defaults/types";
import { ROLES } from "../config/creature/defaults/roles";

export function CrewCountPicker() {
  const [selectedValue, setSelectedValue] = useState("1");
  return (
    <label>
      Crew count:
      <select
        name="selectedCrewCount"
        defaultValue={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="1">One-member crew</option>
        <option value="3">Three-member crew</option>
        <option value="5">Five-member crew</option>
      </select>
    </label>
  );
}

export function DifficultyPicker() {
  const [selectedValue, setSelectedValue] = useState(EASY);
  return (
    <label>
      Difficulty:
      <select
        name="selectedDifficulty"
        defaultValue={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value={EASY}>{EASY}</option>
        <option value={STANDARD}>{STANDARD}</option>
        <option value={ELITE}>{ELITE}</option>
        <option value={OVERWHELMING}>{OVERWHELMING}</option>
      </select>
    </label>
  );
}

export function CreatureTypePicker() {
  const { GUARDIAN, ABBERATION, SYNTHETIC, LOCAL_FAUNA } = CREATURE_TYPE;
  const [selectedValue, setSelectedValue] = useState(GUARDIAN);
  return (
    <label>
      Creature type:
      <select
        name="selectedCreaturType"
        defaultValue={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value={GUARDIAN}>{GUARDIAN}</option>
        <option value={ABBERATION}>{ABBERATION}</option>
        <option value={SYNTHETIC}>{SYNTHETIC}</option>
        <option value={LOCAL_FAUNA}>{LOCAL_FAUNA}</option>
      </select>
    </label>
  );
}

export function CreatureRolePicker() {
  const { BRUTE, LURKER, PSYCHIC, RANGED, SWARM } = ROLES;
  const [selectedValue, setSelectedValue] = useState(BRUTE);
  return (
    <label>
      Creature type:
      <select
        name="selectedCreaturRole"
        defaultValue={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value={BRUTE}>{BRUTE}</option>
        <option value={LURKER}>{LURKER}</option>
        <option value={PSYCHIC}>{PSYCHIC}</option>
        <option value={RANGED}>{RANGED}</option>
        <option value={SWARM}>{SWARM}</option>
      </select>
    </label>
  );
}

export const Dashboard = ({ onGenerateStart }) => {
  return (
    <>
      <CrewCountPicker />
      <DifficultyPicker />
      <CreatureTypePicker />
      <CreatureRolePicker />
      <button
        onClick={() =>
          onGenerateStart({
            crewCount: 1,
            difficulty: STANDARD,
            role: ROLES.BRUTE,
            type: CREATURE_TYPE.GUARDIAN,
          })
        }
      >
        GENERATE
      </button>
    </>
  );
};
