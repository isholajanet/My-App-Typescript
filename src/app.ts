import express, {Request, Response, NextFunction} from "express"
import routes from "./routes";
import helmet from 'helmet'


const app = express()

app.use(express.json())

app.listen(3002, () => {
    console.log("Application listening at http://localhost:3002")
})

// app.use(express.urlencoded({extended: true}))

//creeating global middleware


// const middleware = ({name} : {name: string}) => (req: Request, res: Response, next: NextFunction) => {
   
//    res.locals.name = name;

//     next();
// }

// app.use(middleware({name: 'Janet'}));

// routes(app);

// app.get(
//     "/:bookId/:authorId",
//  (req: Request<{bookId: string, authorId: string}, {}, {name: string}, {}>, res: Response, next: NextFunction) => {

//     req.params.authorId;
//     req.body.name;
//     console.log(res.locals.name)

//    res.send(res.locals.name)
// }, function(req: Request, res: Response, next: NextFunction){
//     return res.send(req.params)
// })

//error handling

// async function throwsError(){
//     throw new Error("Error!!!!!")
// }
// app.get('/error', async (req, res) => {
//     try{
//         await throwsError();
//         res.sendStatus(200);
//     }catch(e){
//         res.status(400).send("Something is wrong");
//     }
    
    
// })



// //to redirect 
// app.get("/redirect", (req: Request, res: Response) => {
//     return res.redirect("http://example.com")

// })

// app.post("/api/data", (req: Request, res: Response) => {
//     console.log(req.body);

//     return res.sendStatus(200)
// })

// app.all("/api/all", (req: Request, res: Response) => {
//     return res.sendStatus(200);
// })


