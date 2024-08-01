import express from 'express';
import { ProductRoute} from './Model/Product.js'


const sentance: String = "Good Good"
console.log(sentance)
const app = express();
app.use(express.json());

app.listen(9090, () => {
    console.log("Server on port 9090")
})

app.use('/product',ProductRoute);