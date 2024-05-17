//middleware for throw error
exports.errorMiddleware = (err,req,res,next)=>{

    err.message = err.message || 'Internal Server Error';
    err.status = err.status ||  500;

    if(err.code === 11000){
        const error= Object.keys(err.keyPattern).join(",");
        err.message =`Duplicate field - ${error}`;
        err.status = err.status ||  400;
    }

    if(err.name ==="CastError"){
        const errorpath=err.path;
        err.message=`Invalid Format of ${errorpath}`;
        err.status=400;
    }

    return res.status(err.status).json({
        success: false,
        message:err.message,
    })

};



