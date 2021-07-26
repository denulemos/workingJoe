import axios from 'axios';

const UserService = {
  registro: function (nombre, apellido, password, celular, email) {
    var config = {
      method: 'get',
      url:
        'http://workingjoe.byethost9.com/apiWJ/usuario/create.php?nombre=' +
        nombre +
        '&clave=' +
        password +
        '&celular=' +
        celular +
        '&mail=' +
        email +
        '&apellido=' +
        apellido +
        '&i=1',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
        Cookie: '__test=c35fa03771264259e05e0ea076d1c72b',
      },
    };

    return axios(config)
      .then((res) => {
        return JSON.stringify(res.data);
      })
      .catch((e) => {
        return JSON.stringify(res.data);
      });
  },

  login: function (password, email) {
    var config = {
      method: 'get',
      url:
        'https://workingjoe.byethost9.com/apiWJ/usuario/create.php?nombre=' +
        nombre +
        '&apellido=' +
        apellido +
        '&mail=' +
        email +
        '&celular=' +
        celular +
        '&clave=' +
        password,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
        Cookie: '__test=c35fa03771264259e05e0ea076d1c72b',
      },
    };

    return axios(config)
      .then((res) => {
        console.log(JSON.stringify(res));
      })
      .catch((e) => {
        console.log('ERROR' + e);
      });
  },
};

export {UserService as default};
