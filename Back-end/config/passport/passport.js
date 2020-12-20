const passport = require('passport');
const { Strategy ,ExtractJwt }= require('passport-jwt');
const db = require('../../models');

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'c0dEc4MP'
};

const JWTStrategy = new Strategy( option, async(payload,done)=>{
    const targetAccount = await  db.Account.findOne({where : { id: payload.id } });
    if(targetAccount){
        done(null, targetAccount);
    } else {
        done(null, false);
    }
})

passport.use('jwt', JWTStrategy);