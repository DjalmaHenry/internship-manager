export const generateToken = () => {
  var tokenCreated = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 32; i++) {
    tokenCreated += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return tokenCreated;
};
