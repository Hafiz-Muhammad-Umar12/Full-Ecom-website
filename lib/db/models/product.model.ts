import { IProductInput } from "@/types";
import {Model , Document, Schema, model,models } from "mongoose";

export interface IProduct extends Document, IProductInput {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
    {
        name:{
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        listPrice:{
            type: Number,
            required: true
        },
        description: {
            type: String,
            trim: true
        },
        category: {
            type: String,
            required: true
        },
        images:[String],
        brand: {
            type: String,
            required: true
        },
        countInStock:{
            type: Number,
            required: true,
        },
        tags:{type: [String], default: ["new arival"]},
        colors:{type:[String], default: ["white", "black", "red"]},
        sizes:{type: [String], default: [" S", "M", "L"]},
        avgRating:{
            type: Number,
            required: true,
            default: 0

        },
        ratingDistribution:[
            {
                rating: {type: Number, required: true},
                count: {type: Number, required: true},
            },
        ],
        numSales:{
            type: Number,
            required: true,
            default: 0
        },
        isPublished:{
            type: Boolean,
            required: true,
            default: false
        },
        reviews:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Review',
                default: [],
            },

        ],
    },
    {
        timestamps: true,
    }
)


const Product = 
(models.Product as Model<IProduct>) ||
model<IProduct>("Product", productSchema);

export default Product