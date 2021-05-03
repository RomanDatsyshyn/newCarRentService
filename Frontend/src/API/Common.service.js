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
  //   create(data) {
  //     return http.post("/add", data);
  //   }
  //   update(id, data) {
  //     return http.put(`/${id}`, data);
  //   }
  //   delete(id) {
  //     return http.delete(`/${id}/delete`);
  //   }
}

export default new CommonDataService();
