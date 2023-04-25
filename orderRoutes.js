const express=require('express')
const router=express.Router()
const {v4: uuidv4}=require('uuid');
const stripe=require('stripe')('sk_test_51N0VYqSIFK2UneiaowZVV9DDTCPEBAHSUFmFZkVY5cl1y2PmksZLIqbtzCTPbfgiK0qXYVka7RzQyXwODmwPFPdj00xJbFWQKv')

router.post('/placeorder', async (req,res)=>{
    const {token,subTotal,currentUser,cartItems}=req.body
    try {
        const customer=await stripe.customers.create({
            email:token.email,
            source:token.id,

        })
        const payment=await stripe.paymentIntents.create({
            amount:subTotal*100,
            currency:'INR',
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey:uuidv4()
        })
        if(payment){
            res.send('Payment Successfull!!')
        }
        else{
            res.send('Pyment Failed')
        }
    } catch (error) {
        res.status(400).json({
            message:"Something Went Wrong",
            error:error.stack
        })
    }
})

module.exports=router;