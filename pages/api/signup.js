import {
  addUser,
  authenticateUser,
  getUserById,
} from '../../app/services/auth';

export default async function (req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  const { username, password, type } = req.body;
  if (username && password) {
    addUser({ username, password, type }).then((token) => {
      if (token) {
        if (token.token) {
          res.json({
            jwtToken: token.token,
          });
        } else {
          res.json({
            jwtToken: null,
          });
        }
      }
    });
  }
}
