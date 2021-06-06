import axios from 'axios';

const UserService = {
  registro: function (nombre, apellido, password, celular, email) {
    return axios.get('https://api.rawg.io/api/games', {
      params: {
        nombre: nombre,
        password: password,
        celular: celular,
        email: email,
        apellido: apellido,
      },
    });
  },
};

export {UserService as default};
