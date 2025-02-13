import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://rajniray0808:Sushila123@cluster0.lkl2z.mongodb.net/food-del').then(()=>console.log("DB connected"));
}
// await mongoose.connect('mongodb://localhost:27017/food-del').then(()=>console.log("DB connected"));
// mongodb+srv://rajniray0808:Sushila123@cluster0.lkl2z.mongodb.net/?