import { Modal } from "@components/generic-ui/modal/modal";
import style from "./about.modal.module.css";

export const AboutModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <p className={style.aboutModal}>
        <p>
          This is an unofficial fan-made companion app for{" "}
          <strong>Across a Thousand Dead Worlds</strong>, created by a fan to
          assist gameplay.
        </p>
        <p>
          I am not affiliated with Blackoath Entertainment, and this application
          is not endorsed, licensed in any way. All rights to Across a Thousand
          Dead Worlds, including its name, setting, characters, artwork, and
          other intellectual property, belong solely to Blackoath Entertainment
          and its creators.
        </p>
        <p>
          This app is provided for free as a non-commercial fan project. No
          revenue is generated from it, and it is offered purely out of
          admiration for the game and its creators.
        </p>
        <p>If you enjoy the game, please support the official release at:</p>[
        <a href="https://blackoathgames.com" target="_blank">
          https://blackoathgames.com
        </a>
        ]
      </p>
    </Modal>
  );
};
