import Api from "@/services/Api";

export default {
  index(credentials) {
    return Api().post("users", credentials);
  },
  addUser(credentials) {
    return Api().post("addUser", credentials);
  },
  delete(credentials) {
    return Api().post("deleteUser", credentials);
  }
};
