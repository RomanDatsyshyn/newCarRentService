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
  Alogin(data) {
    return http.post("/admin/auth/drv-login", data);
  }
  registert(data) {
    return http.post("/user", data);
  }
  addCar(data) {
    return http.post("/cars/add", data, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: localStorage.getItem("admin_token"),
      },
    });
  }
  editCarTown(id, data) {
    return http.put(`/cars/edit/${id}/town`, data, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    });
  }
  editCarPrice(id, data) {
    return http.put(`/cars/edit/${id}/price`, data, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    });
  }
  editCarSegment(id, data) {
    return http.put(`/cars/edit/${id}/segment`, data, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    });
  }
  deleteCar(id) {
    return http.delete(`/cars/${id}/delete`, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    });
  }
}

export default new CommonDataService();
