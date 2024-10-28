import axios from "axios";

class PoetService {
  private URL = "http://216.250.8.93:7777/app/api/";

  postUser = async (body: {
    first_name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    return await axios.post(`${this.URL}signup`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
}

export default new PoetService();
