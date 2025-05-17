import { useState } from "react";

import { Button } from "../../generic-ui/button/button";
import { ButtonGroup } from "../../generic-ui/button-group/button-group";
import { Modal } from "../../generic-ui/modal/modal";
import {
  EASY,
  STANDARD,
  ELITE,
  OVERWHELMING,
} from "../../../config/difficulty.config";
import style from "./guardians.modal.module.css";

export const GuardiansModal = ({
  isOpen,
  onClose = () => {},
  onGenerateStart,
}) => {
  const [difficulty, setDifficulty] = useState(EASY);
  const [crewCount, setCrewCount] = useState(1);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
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

        <Button
          className={style.generateButton}
          onClick={() => {
            onGenerateStart({
              difficulty,
              crewCount,
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
