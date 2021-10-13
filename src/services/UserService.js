import axios from 'axios';

const UserService = {
  registro: function (nombre, apellido, password, celular, email) {
    var config = {
      method: 'get',
      url: `http://workingjoe.byethost9.com/apiWJ/usuario/create.php?nombre=${nombre}&clave=${password}&celular=${celular}&mail=${email}&apellido=${apellido}&i=1`,
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
        return JSON.stringify(e.data);
      });
  },

  login: function () {
    var config = {
      method: 'get',
      url: 'http://workingjoe.byethost9.com/apiWJ/usuario/read.php?i=1',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
        Cookie: '__test=c35fa03771264259e05e0ea076d1c72b',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Host: 'workingjoe.byethost9.com',
        'Accept-Language': 'en-US,en;q=0.9',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      },
    };

    return axios(config)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        // alert('error', JSON.parse(JSON.stringify(e.data)));
        return JSON.stringify(e.data);
      });
  },
};

export {UserService as default};
