import { addUser } from '../../app/services/auth';

export default async function (req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  const { signUpBatch } = req.body;
  if (Array.isArray(signUpBatch)) {
    let count = signUpBatch.length;
    let allUsersAdded = [];
    signUpBatch.forEach((user) => {
      addUser(user).then((token) => {
        if (token) {
          if (token.token) {
            allUsersAdded.push(user.username);
            if (count === allUsersAdded.length) {
              res.json({
                batchAddStatus: true,
                message: `Following users added successfully : ${JSON.stringify(
                  allUsersAdded
                )}`,
              });
            }
          } else {
            res.json({
              batchAddStatus: false,
              message: `Failed to add user '${user.username}', it already exist.`,
            });
          }
        }
      });
    });
  } else {
    res.json({
      batchAddStatus: false,
      message: `Failed to add users.`,
    });
  }
}
