class UserEs6 {
  constructor(login, password, username = "") {
    this.Login = login;
    this.Password = password;
    this.UserName = username;
  }

  generateLogin() {
    // Eugene Kiselev -> ekiselev
    const usernameList = this.UserName.split(" ").map((item) =>
      item.toLowerCase()
    );
    return `${usernameList[0][0]}.${usernameList[1]}`;
  }
}

export default UserEs6;
