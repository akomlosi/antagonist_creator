import style from './welcome-screen.module.css';

export const WelcomeScreen = () => {

  return (
    <div className={style.welcomeScreen}>
      <h1>Welcome to the Antagonist Creator for <strong>Across A Thousand Dead Worlds</strong> game.</h1>
      <p>
        <p>This tool helps you create unique and interesting antagonists for Across A Thousan Dead Worlds game.</p>
        <p>Either create a unique encounter or generate a list of guardians to use in your game.</p>
        <p>To get started click on the button of your choice in the header and enjoy the game!</p>
      </p>
    </div>
  );
};
