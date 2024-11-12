import {Router} from 'express'
import {createUser ,deleteOrder,getUsers, updateUser} from '../controller/BookingController.js'

const serviceRouter=Router();

serviceRouter.post("/create",createUser);
serviceRouter.get("/getData",getUsers);
serviceRouter.put("/updateData",updateUser);
serviceRouter.delete("/deleteData/:id",deleteOrder);

export default serviceRouter;