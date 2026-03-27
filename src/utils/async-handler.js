const asynchandler = (requesthandler) => {
    return (req, res, next) => {
        Promise.resolve(requesthandler(req, res, next))
            .catch((err) => next(err));
    };
};





export {asynchandler}

//const asynchandler=(fn)=>()=>async(req, res, next)=>{
  //  try{
      //  await fn(req, res, next);
    //}
    //catch(err){
//     res.status(500).json({
  //      success: false,
    //    message: "Internal Server Error"
   //  })
   //  next(err);
   // }
//}