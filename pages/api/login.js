import { authenticateUser } from '../../app/services/auth';

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default async function (req, res) {
   const { method } = req;

  // This will allow OPTIONS request
  if (method === "OPTIONS") {
    return res.status(200).send("ok");
  }
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  // const { username, password } = req.body;
  // if (username && password) {
  //   authenticateUser({
  //     username,
  //     password,
  //   }).then((src) => {
  //     if (src) {
  //       res.json({
  //         jwtToken: src.jwtToken,
  //         type : src.type
  //       });
  //     }
  //   });
  // }
  res.setHeader(corsHeaders);
   return res.json({ foo: "bar" }, { headers: corsHeaders });
}
