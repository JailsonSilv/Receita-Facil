import axios from 'axios'

// RODAR COM O IPV4: json-server --watch -d 150 --host 192.168.0.105 db.json
// PARA PEGAR IP: ipconfig


const api = axios.create({
    baseURL: 'http://192.168.0.105:3000/'

})

export default api;
