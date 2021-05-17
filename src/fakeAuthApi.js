const Users = [
  {
    username: "Minakshi",
    password: "1234"
  }
];

const findUserByUserName = (username) => {
  return Users.find((user) => user.username === username);
};

export const fakeAuthApi = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUserByUserName(username);
      if (password === user.password) {
        resolve({ success: true, status: 200 });
      }
      reject({ success: false, status: 401 });
    }, 3000);
  });
};
