import { authenticateUser } from '../../app/services/auth';

export default async function (req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  const { username, password } = req.body;
  if (username && password) {
    authenticateUser({
      username,
      password,
    }).then((src) => {
      if (src) {
        res.json({
          jwtToken: src.jwtToken,
          type : src.type
        });
      }
    });
  }
}
