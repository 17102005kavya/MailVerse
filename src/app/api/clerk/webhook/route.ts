import { db } from "@/server/db";
export const POST = async (req:Request) =>{
    const {data} =await req.json();
    console.log("Clerk webhook recieved",data)
    const emailAddress=data.email_addresses[0].email_address;
    const firstName=data.first_name;
    const lastName=data.last_name;
    const id=data.id;
    const imageUrl=data.image_url;
     await db.user.create({
        data:{ id: id,
            emailAddress: emailAddress,
            firstName: firstName,
            lastName: lastName,
            imageUrl: imageUrl,}})


    return new Response("Webhook received", {
        status: 200
       
    });
}
export async function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}