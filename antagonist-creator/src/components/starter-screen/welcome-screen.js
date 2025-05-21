import style from "./welcome-screen.module.css";

export const WelcomeScreen = () => {
  return (
    <div className={style.welcomeScreen}>
      <h1>
        Welcome to the Antagonist Creator for{" "}
        <strong>Across A Thousand Dead Worlds</strong> game.
      </h1>
      <p>
        <p>
          This tool helps you create unique and interesting antagonists for
          Across A Thousand Dead Worlds game.
        </p>
        <p>
          Create a unique encounter or generate a list of guardians and use it
          in your game.
        </p>
        <p>
          To get started select a generator of your choice in the header menu
          and enjoy the game!
        </p>
      </p>
    </div>
  );
};
