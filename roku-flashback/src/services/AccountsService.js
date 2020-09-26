import Api from "@/services/Api";

export default {
  index(credentials) {
    return Api().post("findAccount", credentials);
  },
  editAccount(credentials) {
    return Api().post("editAccount", credentials);
  },
  delete(credentials) {
    return Api().post("deleteAccount", credentials);
  }
};
