import { ImageLamborguini } from "@/public/assets/images";
import { LamborghiniPlayer } from "@/shared/components";
import Image from "next/image";
import { Classname, SC } from "./StartScreen.styles";

const TITLE = ["BESPOKE", "MYTH", "CHAOS", "MANIAC"];

export const StartScreen = () => {
  return (
    <SC.Container>
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
      <SC.EnterButton htmlFor="enter">
        <SC.Checkbox id="enter" type="checkbox" />
        <SC.Text data-content="ENTER" />
        <SC.Icon />
      </SC.EnterButton>
      <Image
        unoptimized
        width={1920}
        className={Classname.Image}
        src={ImageLamborguini}
        alt="lamborghini-car"
      />
    </SC.Container>
  );
};
