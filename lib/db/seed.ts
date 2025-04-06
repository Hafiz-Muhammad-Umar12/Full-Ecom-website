import data from "../data"
import { cwd } from "process"
import {loadEnvConfig} from '@next/env'
import {connectToDatabase} from '.'
import Product from "./models/product.model"

loadEnvConfig(cwd())

const main = async() => {
    try{
        const { products} = data
        await connectToDatabase(process.env.MONGODB_URL)

        await Product.deleteMany()
        const createdProduct = await Product.insertMany(products)
        console.log(
            {createdProduct,
                message: 'Seeded data base successfully'}
            )
            process.exit(0)
            
    } catch(error){
        console.error(error)
        throw new Error('Failed to seed database')
    }
    
}

main()