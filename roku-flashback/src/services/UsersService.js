import Api from "@/services/Api";

export default {
  index(credentials) {
    return Api().post("users", credentials);
  },
  make(credentials) {
    return Api().post("makeUser", credentials);
  },
  delete(credentials) {
    return Api().post("deleteUser", credentials);
  }
};
