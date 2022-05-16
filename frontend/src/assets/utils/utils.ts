export const AdminUser = {
  email: "admin@hotmail.com",
  password: "admin123",
};

export const mockInterns = [
  {
    name: "Davi Mateus",
    contractStatus: "Verified",
    reportStatus: "Pending",
    vacancy: "Front-end Engineer",
    company: "Loomi",
  },
  {
    name: "Djalma Henrique",
    contractStatus: "Pending",
    reportStatus: "Verified",
    vacancy: "Front-end Developer",
    company: "Manifesto Games",
  },
  {
    name: "João Vitor Machado",
    contractStatus: "Verified",
    reportStatus: "Pending",
    vacancy: "Back-end Developer",
    company: "IBM",
  },
  {
    name: "Ronny Lima",
    contractStatus: "Pending",
    reportStatus: "Pending",
    vacancy: "Back-end Developer",
    company: "Google",
  },
  {
    name: "Lucas dos Santos",
    contractStatus: "Verified",
    reportStatus: "Verified",
    vacancy: "Fullstack Developer",
    company: "Direction Systems",
  }
];

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