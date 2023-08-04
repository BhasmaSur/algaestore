import { addUser, authenticateUser, getUserById } from '../../app/services/auth';

export default async function (req, res){
    if(!req.body){
        res.statusCode = 404
        res.end('Error')
        return
    }

    const {username, password, type} = req.body
    if(username && password){
        addUser({username,password, type}).then((token)=>{
            if(token){
                res.json({
                    jwtToken :token
                   })
            }
        })
    }
    // let myEncryptPassword= "";
    // if(username && password){

    //     // hasedPassword = crytPlainPassword(password)
    //     // cryptPassword(password, cryptedPassword)
    //     myEncryptPassword = await Encrypt.cryptPassword(password);
    //     // myEncryptPassword = await Encrypt.comparePassword("password","$2a$10$1aMb0mt1DQAmf3/TCH/z9.BrqCx.rDlgZXPLQmgsxAWjzTrL4TrOy")
    // }
    // res.json({
    //     myEncryptPassword
    // })
    // const {username, password} = req.body
    // getUserById(username).then((src)=>{
    //     if(src){
    //         res.json({src}) 
    //     }
    // })
   
}