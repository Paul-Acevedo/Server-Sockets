import {Router,Response,Request} from 'express';


  const router = Router();

router.get('/mensajes',(req:Request,res:Response)=>{

   const cuerpo = req.body.cuerpo;

   res.json({
       ok: true,
       mensaje: 'Todo bien en casa',
       cuerpo
   });


});

router.post('/mensajes/:id',(req:Request,res:Response)=>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    
    res.json({
        ok: true,
        mensaje: 'Todo bien en casa',
        cuerpo
    });
 
 
 });


export default router;
    