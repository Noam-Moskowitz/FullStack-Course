export const guard=(req,res,next)=>{
    if (!req.session.user) {
        res.status(401).send(`User is not authorized!`)
    }else{
    next()

    }

}