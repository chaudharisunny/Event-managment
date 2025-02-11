const Events=require('../model/events')

const allEvents=async(req,res)=>{
try {
    const allevents=await Events.find()
    res.status(200).json({data:allevents})
} catch (error) {
    res.status(404).json({err:error})
    
}
}

const postEvents=async(req,res)=>{
    try {
        const{name,desc,date,contact,location,organizer,attendee}=req.body

         Events.create({name,desc,contact,location,organizer,attendee,date})

         const createEvent=await res.status(201).json({message:'create a new event successfully'})
    } catch (error) {
        res.status(404).json({error:error})
        
    }
}

const updateEvents=async(req,res)=>{
    try {
        const {id}=req.params

        const updateEvents=await Events.findByIdAndUpdate(id,req.body,{new:true})

        if(!updateEvents){
            res.status(404).json({error:'event not found'})
        }
        res.status(200).json(updateEvents)
    } catch (error) {
        res.status(400).json({err:error})
    }
}

const deleteEvents=async(req,res)=>{
    try {
        const {id}=req.params
        const deleteEvents=await Events.findByIdAndDelete(id)
        if(!deleteEvents){
          return  res.status(404).json({error:'event not found'})
        }
      return  res.status(200).json({message:'delete event'})
    } catch (error) {
       console.log(error);
       
    }
}

module.exports={allEvents,postEvents,updateEvents,deleteEvents}