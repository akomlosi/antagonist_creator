import { useState } from "react";

import { CREATURE_TYPE } from "../../../config/creature/defaults/types";
import { ROLES } from "../../../config/creature/defaults/roles";
import { Button } from "../../generic-ui/button/button";
import { ButtonGroup } from "../../generic-ui/button-group/button-group";
import { Modal } from "../../generic-ui/modal/modal";
import { EASY, STANDARD, ELITE, OVERWHELMING } from "../../../config/difficulty.config";

const { ABBERATION, SYNTHETIC, LOCAL_FAUNA } = CREATURE_TYPE;
const { BRUTE, LURKER, PSYCHIC, RANGED, SWARM } = ROLES;

export const GuardiansModal = ({ isOpen, onClose = () => {}, onGenerateStart }) => {
  const [difficulty, setDifficulty] = useState(EASY);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>

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
        
        <Button
          onClick={() => {
            onGenerateStart({
              difficulty
            });
            onClose();
          }}
        >
          GENERATE GUARDIANS
        </Button>
      </Modal>
    </>
  );
};
