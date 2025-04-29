import tw from "@/shared/utils/tailwind";

const Container = tw.div`
  relative
`;

const Video = tw.video`
  absolute
  inset-0
  h-dvh
  w-full
  object-cover
`;

export const SC = {
  Container,
  Video,
};
