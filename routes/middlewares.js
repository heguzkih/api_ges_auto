const jwt = require('jwt-simple');


const checkLoguin = (req,res,next ) =>{
        if (!req.headers['profesor-loguin']) {
            return res.json({error: 'Falta el profesor-loguin'});
        }else{

            const profesorToken = req.headers['profesor-loguin'];
            let payload={};

            try {
                payload= jwt.decode(profesorToken, 'practicas 2021 eduardo');
            } catch (error) {

                return res.json({error:'el loguin es incorrecto'});
            }
        
        }
        
        next();
}

module.exports = {

    checkLoguin: checkLoguin
}