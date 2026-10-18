import axios from "axios";
import Global from "../Global";

export default class CochesService {
  
    async getCoches() {
        var request = "api/coches";
        var url = Global.urlApiCoches + request;
        return (await axios.get(url)).data;
    }
  
    async getCochesById(id) {
        var request = "api/coches/findcoche/" + id;
        var url = Global.urlApiCoches + request;
        return (await axios.get(url)).data;
    }

    async postCoche(coche) {
        var request = "api/coches/insertcoche";
        var url = Global.urlApiCoches + request;
        return (await axios.post(url, coche)).data;
    }

    async putCoche(coche) {
        var request = "api/coches/updatecoche";
        var url = Global.urlApiCoches + request;
        return (await axios.put(url, coche)).data;
    }

    async deleteCoche(id) {
        var request = "api/coches/deletecoche/" + id;
        var url = Global.urlApiCoches + request;
        return (await axios.delete(url)).data;
    }
  
}
