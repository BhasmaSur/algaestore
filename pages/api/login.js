import { authenticateUser } from '../../app/services/auth';

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default async function handler(req, res) {
   const { method } = req;

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
