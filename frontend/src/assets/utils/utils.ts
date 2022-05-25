export const AdminUser = {
  email: "admin@hotmail.com",
  password: "admin123",
};

export const mockInterns = [
  {
    id: 1,
    name: "Davi Mateus",
    contractStatus: "Verified",
    reportStatus: "Pending",
    vacancy: "Front-end Engineer",
    company: "Loomi",
  },
  {
    id: 2,
    name: "Djalma Henrique",
    contractStatus: "Pending",
    reportStatus: "Verified",
    vacancy: "Front-end Developer",
    company: "Manifesto Games",
  },
  {
    id: 3,
    name: "João Vitor Machado",
    contractStatus: "Verified",
    reportStatus: "Pending",
    vacancy: "Back-end Developer",
    company: "IBM",
  },
  {
    id: 4,
    name: "Ronny Lima",
    contractStatus: "Pending",
    reportStatus: "Pending",
    vacancy: "Back-end Developer",
    company: "Google",
  },
  {
    id: 5,
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