import http from "./HTTP";

class CommonDataService {
  //   GetById(id) {
  //     return http.get(`/${id}`);
  //   }
  //   getByName(name) {
  //     return http.get(`/search/?name=${name}`);
  //   }
  getAllCars() {
    return http.get(`/cars`);
  }
  login(data) {
    return http.post("/auth", data);
  }
  //   update(id, data) {
  //     return http.put(`/${id}`, data);
  //   }
  //   delete(id) {
  //     return http.delete(`/${id}/delete`);
  //   }
}

export default new CommonDataService();
