import "./styles/style.scss";

const user = {
  name: "Hironmoy Dhar",
  age: 33,
  job: "Web Developler",
};

const newUser = {
  ...user,
  name: "Gaurav Dhar",
  age: 32,
  Job: "Full Stack Developler",
};

console.log(user);
console.log(newUser);
