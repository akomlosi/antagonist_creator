import { useState } from "react";
import {
  EASY,
  ELITE,
  OVERWHELMING,
  STANDARD,
} from "../config/difficulty.config";
import { CREATURE_TYPE } from "../config/creature/defaults/types";
import { ROLES } from "../config/creature/defaults/roles";
import { Button } from "./generic-ui/button/button";
import { ButtonGroup } from "./generic-ui/button-group/button-group";
import { Modal } from "./generic-ui/modal/modal";

const { ABBERATION, SYNTHETIC, LOCAL_FAUNA } = CREATURE_TYPE;
const { BRUTE, LURKER, PSYCHIC, RANGED, SWARM } = ROLES;

export const Dashboard = ({ onGenerateStart }) => {
  const [crewCount, setCrewCount] = useState(1);
  const [difficulty, setDifficulty] = useState(EASY);
  const [type, setType] = useState(ABBERATION);
  const [role, setRole] = useState(BRUTE);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onlyBrute = parseInt(crewCount, 10) === 1 && difficulty === EASY;

  return (
    <>
      {!isModalOpen && (
        <Button onClick={() => setIsModalOpen(true)}>Open Dashboard</Button>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ButtonGroup title="Crew count">
          <Button highlighted={crewCount === 1} onClick={() => setCrewCount(1)}>
            One-member crew
          </Button>
          <Button highlighted={crewCount === 3} onClick={() => setCrewCount(3)}>
            Three-member crew
          </Button>
          <Button highlighted={crewCount === 5} onClick={() => setCrewCount(5)}>
            Five-member crew
          </Button>
        </ButtonGroup>
        <ButtonGroup title="Difficulty">
          <Button
            highlighted={difficulty === EASY}
            onClick={() => setDifficulty(EASY)}
          >
            Easy
          </Button>
          <Button
            highlighted={difficulty === STANDARD}
            onClick={() => setDifficulty(STANDARD)}
          >
            Standard
          </Button>
          <Button
            highlighted={difficulty === ELITE}
            onClick={() => setDifficulty(ELITE)}
          >
            Elite
          </Button>
          <Button
            highlighted={difficulty === OVERWHELMING}
            onClick={() => setDifficulty(OVERWHELMING)}
          >
            Overwhelming
          </Button>
        </ButtonGroup>
        <ButtonGroup title="Creature type">
          <Button
            highlighted={type === ABBERATION}
            onClick={() => setType(ABBERATION)}
          >
            Abberation
          </Button>
          <Button
            highlighted={type === SYNTHETIC}
            onClick={() => setType(SYNTHETIC)}
          >
            Synthetic
          </Button>
          <Button
            highlighted={type === LOCAL_FAUNA}
            onClick={() => setType(LOCAL_FAUNA)}
          >
            Local Fauna
          </Button>
        </ButtonGroup>
        <ButtonGroup title="Creature role">
          <Button highlighted={role === BRUTE} onClick={() => setRole(BRUTE)}>
            Brute
          </Button>
          <Button
            disabled={onlyBrute}
            highlighted={role === LURKER}
            onClick={() => setRole(LURKER)}
          >
            Lurker
          </Button>
          <Button
            disabled={onlyBrute}
            highlighted={role === RANGED}
            onClick={() => setRole(RANGED)}
          >
            Ranged
          </Button>
          <Button
            disabled={onlyBrute}
            highlighted={role === SWARM}
            onClick={() => setRole(SWARM)}
          >
            Swarm
          </Button>
          <Button
            disabled={onlyBrute}
            highlighted={role === PSYCHIC}
            onClick={() => setRole(PSYCHIC)}
          >
            Psychic
          </Button>
        </ButtonGroup>
        <Button
          onClick={() => {
            onGenerateStart({
              crewCount,
              difficulty,
              role,
              type,
            });
            setIsModalOpen(false);
          }}
        >
          GENERATE CREATURE LIST
        </Button>
      </Modal>
    </>
  );
};
