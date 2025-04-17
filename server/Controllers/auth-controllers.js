
const home=(req,res)=>{
   try {
     res.status(200).send("This is Controllers Home page")
   } catch (error) {
     res.status(400).send(error)
   }
}

const register=(req,res)=>{
try {
    res.status(200).send("This is controllers register page")
} catch (error) {
    res.status(400).send(error)
}
}

module.exports={home,register}
