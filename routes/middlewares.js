const jwt = require('jwt-simple');
/*chequea que en la cabecera se mande el token para seguridad 
 */


const checkLoguin = (req,res,next ) =>{
        
    if (!req.headers['profesor-login']) {
            return res.status(500).json({error: 'Falta el profLogin'});
        }else{

            const profesorToken = req.headers['profesor-login'];
            let payload={};

            try {
                payload= jwt.decode(profesorToken, 'practicas 2021 eduardo');
            } catch (error) {

                return res.status(500).json({error:'el loguin es incorrecto'});
            }
        
        }
        
        next();
}

module.exports = {

    checkLoguin: checkLoguin
}