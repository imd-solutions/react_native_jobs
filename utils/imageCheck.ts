export const imageCheck = (url: string) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp|svg)$",
      "i"
    );
    return pattern.test(url);
  }
};
