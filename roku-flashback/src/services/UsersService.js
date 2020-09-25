import Api from "@/services/Api";

export default {
  index(credentials) {
    return Api().post("users", credentials);
  },
  indexOne(credentials) {
    return Api().post("findUser", credentials);
  },
  addUser(credentials) {
    return Api().post("addUser", credentials);
  },
  editUser(credentials) {
    return Api().post("editUser", credentials);
  },
  delete(credentials) {
    return Api().post("deleteUser", credentials);
  }
}; 
