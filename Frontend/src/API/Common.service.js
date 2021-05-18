import http from "./HTTP";

class CommonDataService {
  GetById(id) {
    return http.get(`/cars/${id}`);
  }
  getByParams(town, segment, fromDate, toDate) {
    return http.get(
      `/cars/search?town=${town}&segment=${segment}&fromDate=${fromDate}&toDate=${toDate}`
    );
  }
  getAllCars() {
    return http.get(`/cars`);
  }
  getUserData() {
    return http.get(`/user`, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    });
  }
  getAnalytics() {
    return http.get(`/orders/analytics`);
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
  createOrder(data) {
    return http.post("/orders/create", data, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    });
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
  changePassword(newPassword) {
    return http.put(`/user/edit/`, newPassword, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    });
  }
  deleteUser() {
    return http.delete(`/user/delete/`, {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    });
  }
  blockUser(id) {
    return http.put(`/admin/users/${id}/block`, "", {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    });
  }
  unblockUser(id) {
    return http.put(`admin/users/${id}/unblock`, "", {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    });
  }
}

export default new CommonDataService();
