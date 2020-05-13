export default class User {
  constructor(id,username, email, password, status, check_blocked,otp,access) {
    this.id=id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.status=status;
    this.check_blocked=check_blocked;
    this.otp=otp;
    this.access=access;
  }
}
