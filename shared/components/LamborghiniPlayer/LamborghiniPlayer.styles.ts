import tw from "@/shared/utils/tailwind";

const Container = tw.div`
  absolute
  inset-0
`;

const Video = tw.video`
  absolute
  inset-0
  h-dvh
  w-full
  object-cover
  transition-opacity
  ease-in-out
`;

export const SC = {
  Container,
  Video,
};
