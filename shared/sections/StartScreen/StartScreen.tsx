import { LamborghiniPlayer } from "@/shared/components";
import { SC } from "./StartScreen.styles";

const TITLE = ["BESPOKE", "MYTH", "CHAOS", "MANIAC"];

export const StartScreen = () => {
  return (
    <>
      <SC.MainContainer>
        {TITLE.map((title, titleIndex) => (
          <SC.LettersContainer key={`title-container-${titleIndex.toString()}`}>
            {title.split("").map((letter, letterIndex) => (
              <SC.Letter
                data-letter={letter}
                key={`title-${titleIndex.toString()}-${letter}-${letterIndex.toString()}`}
                style={{
                  animationDelay: `${(letterIndex + 1) * 0.08 + 1}s`,
                }}
              >
                {letter}
              </SC.Letter>
            ))}
          </SC.LettersContainer>
        ))}
      </SC.MainContainer>
      <LamborghiniPlayer />
    </>
  );
};
