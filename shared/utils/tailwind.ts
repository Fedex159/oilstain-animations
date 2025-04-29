import tw from "tailwind-styled-components";

const processTaggedTemplate = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): string => {
  let result = strings[0];

  for (let i = 0; i < values.length; i++) {
    const valueStr = String(values[i] ?? "");
    result += valueStr + strings[i + 1];
  }

  return result.replace(/\s\s+/g, " ").trim();
};

export const clsx = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): string => {
  return processTaggedTemplate(strings, ...values);
};

export default tw;
