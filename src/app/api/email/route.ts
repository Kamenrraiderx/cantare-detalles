import { sendMail } from "@/utils/mail.utils"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const {  receipients } = await request.json();
    const sender = {
        name:'FACTURED',
        address: 'no-reply@example.com'
    }

    

    try{
        const result = await sendMail({
            sender,
            receipients,
            subject:'Bienvenido',
            message:'Pronto nos estaremos comunicando contigo'
        })
        return NextResponse.json({
            accepted: result.accepted,

        })

    }catch(error){
        return NextResponse.json({
            message:"No fue posible enviar el formulario",
            error
        },{
            status:500
        })

    }
}