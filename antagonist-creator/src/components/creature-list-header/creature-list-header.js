import { generateRandomCreatureName } from "@utils/name-generator";
import styles from "./creature-list-header.module.css";

export const CreatureListHeader = ({ name = null, type, role }) => {
  return (
    <div className={`${styles.creatureListHeader} neutral`}>
      <h3>
        <strong>NAME</strong>
        <span>{name || generateRandomCreatureName()}</span>
      </h3>
      <h3>
        <strong>TYPE</strong>
        <span>{type}</span>
      </h3>
      <h3>
        <strong>ROLE</strong>
        <span>{role}</span>
      </h3>
    </div>
  );
};
