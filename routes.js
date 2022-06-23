import { Router } from '@layer0/core';

export default new Router().get('/', ({ compute }) => {
  compute((req, res) => {
    const body = req.body;
    res.body = body;
    res.statusCode = 200;
    res.statusMessage = 'OK';
  });
});
