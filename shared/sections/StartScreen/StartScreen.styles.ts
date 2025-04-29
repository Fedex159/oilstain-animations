import tw from "@/shared/utils/tailwind";

const MainContainer = tw.div`
  fixed
  z-10
  flex
  flex-col
  px-10
  py-5
`;

const LettersContainer = tw.div`
  relative
  w-dvw
  animate-(--fade-in)
  overflow-hidden
  opacity-0
  nth-[1]:[animation-delay:0.2s]
  nth-[2]:left-[30vw]
  nth-[2]:[animation-delay:0.4s]
  nth-[3]:[animation-delay:0.6s]
  nth-[4]:left-[10vw]
  nth-[4]:[animation-delay:0.8s]
`;

const Letter = tw.span`
  relative
  inline-block
  translate-y-full
  animate-(--translate)
  text-[10vw]
  leading-none
  text-white
  [-webkit-text-stroke:1px_#000000]
  before:absolute
  before:-translate-y-full
  before:content-[attr(data-letter)]
`;

export const SC = {
  MainContainer,
  LettersContainer,
  Letter,
};
