import tw, { clsx } from "@/shared/utils/tailwind";

const Container = tw.section`
  relative
  flex
  h-dvh
  w-dvw
  flex-col
  overflow-clip
`;

const MainContainer = tw.div`
  z-10
  flex
  flex-col
  px-10
  py-5
`;

const LettersContainer = tw.div`
  relative
  w-full
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
  animate-(--translate-letter)
  text-[10vw]
  leading-none
  text-white
  [-webkit-text-stroke:1px_#000000]
  before:absolute
  before:-translate-y-full
  before:content-[attr(data-letter)]
`;

const Image = clsx`
  absolute
  h-full
  w-full
  transform-[scale3d(1.2,_1.2,1)_rotateZ(5deg)]
  object-cover
  opacity-0
  transition-all
  duration-(--duration-enter)
  peer-hover/enter-button:transform-[scale3d(1,1,1)_rotateZ(0deg)]
  peer-hover/enter-button:opacity-100
`;

const EnterButton = tw.label`
  group/enter-button
  peer/enter-button
  z-10
  mt-auto
  mr-5
  mb-5
  ml-auto
  flex
  w-min
  min-w-48
  translate-y-[200%]
  animate-(--translate-enter)
  cursor-pointer
  items-center
  justify-between
  rounded-br-2xl
  bg-[#ef4826]
  px-4.5
  pt-5
  pb-5
  leading-none
  transition-colors
  duration-(--duration-enter)
  ease-[ease]
  hover:bg-[#25ff55]
`;

const Checkbox = tw.input`
  appearance-none
`;

const Text = tw.span`
  relative
  mr-auto
  overflow-clip
  text-xs
  font-extrabold
  before:absolute
  before:top-1/2
  before:left-0
  before:-translate-x-full
  before:-translate-y-1/2
  before:transition-transform
  before:duration-(--duration-enter)
  before:content-[attr(data-content)]
  group-hover/enter-button:before:translate-x-0
  after:inline-block
  after:transition-transform
  after:duration-(--duration-enter)
  after:content-[attr(data-content)]
  group-hover/enter-button:after:translate-x-full
`;

const Icon = tw.span`
  relative
  flex
  h-3
  w-3.5
  overflow-clip
  before:inline-block
  before:min-h-3
  before:min-w-3.5
  before:-translate-x-full
  before:bg-[url(/assets/icons/iconDoubleArrow.svg)]
  before:bg-repeat-x
  before:transition-transform
  before:duration-(--duration-enter)
  group-hover/enter-button:before:translate-x-0
  after:inline-block
  after:min-h-3
  after:min-w-3.5
  after:-translate-x-full
  after:bg-[url(/assets/icons/iconDoubleArrow.svg)]
  after:bg-repeat-x
  after:transition-transform
  after:duration-(--duration-enter)
  group-hover/enter-button:after:translate-x-0
`;

export const SC = {
  Container,
  MainContainer,
  LettersContainer,
  Letter,
  EnterButton,
  Checkbox,
  Text,
  Icon,
};

export const Classname = {
  Image,
};
