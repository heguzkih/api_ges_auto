const jwt = require('jwt-simple');


const checkLoguin = (req,res,next ) =>{
        if (!req.headers['profesorLoguin']) {
            return res.status(500).json({error: 'Falta el profesor-loguin'});
        }else{

            const profesorToken = req.headers['profesorLoguin'];
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