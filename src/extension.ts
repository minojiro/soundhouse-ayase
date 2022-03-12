const generateManifest = () => {
  console.log("hi");
};

export const chromeExtension = (...args: any[]) => {
  return {
    name: "transform-file",

    transform(src: string, ...args: any[]) {
      console.log(args);
      return {
        code: "",
      };
    },
  };
};
