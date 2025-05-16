import { generateRandomCreatureName } from "@utils/name-generator";

export const CreatureListHeader = ({ name = null, type, role }) => {
  return (
    <>
      <span className="neutral">
        "{name || generateRandomCreatureName()}" |{" "}
      </span>
      <span className="neutral">{type} | </span>
      <span className="neutral">{role}</span>
    </>
  );
};
