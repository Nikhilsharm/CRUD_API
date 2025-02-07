import {Form} from "../Models/form.model.js"


export const createForm=async(req ,res)=>{
    try {
        const {title, body}=req.body;

        // Validate required fields
        if (!title  || !body ) {
            return res.status(400).json({
                success:false,
                message:"All field are required."
            });
          }

          // Insert the record
          const forms=await Form.create({
            title,
            body,
          })
          return res.status(201).json({
            success:true,
            message:"Form created successfully.",
            forms
          })
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to create form.",
            form,
        })
        
    }
}
export const readForm=async(req ,res)=>{
    try {
        // fetch forms data
       const forms= await Form.find();
    

       if(!forms){
        return res.status(404).json({
            success:false,
            message:"NO form found.",
        });
          }

        // return form details
        return res.status(200).json({
            success: true,
            message:"read form",
            forms,
            
        });
       
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to load form."
        })
    }
}
export const viewForm=async(req ,res)=>{
    try {
        const id =req.params.id;
        // console.log(req.params.id)

       const forms= await Form.findById(id);
    //    console.log(form)
       if(!forms){
        return res.status(404).json({
            success:false,
            message:"NO form found.",
        });
          }

        // return form details
        return res.status(200).json({
            success: true,
            message:"view form",
            forms,
            
        });
       
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to load form."
        })
    }
}
export const updateForm = async (req, res) => {
    try {
        
        const id=req.params.id;
        const updateData = req.body;

        if (!id ) {
            return res.status(400).json({
                success: false,
                message: "ID is required to update a Form.",
            });
        }

        // Find the form
        const oldform=await Form.findById(id);
        if (!oldform) {
            return res.status(404).json({
                success: false,
                message: "Form not found."
            });
        }  

         // Update the form details
        const updatedform = await Form.findByIdAndUpdate(id,
            updateData,
            { new: true, runValidators: true }
        );

        // Send an email to the admin with old and updated book details
        

        return res.status(200).json({
            success: true,
            message: "form updated successfully.",
            updatedform
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to update form.",
        });
    }
};
export const deleteForm = async (req, res) => {
    try {
        const id=req.params.id;
        // console.log(id)

        if (!id ) {
            return res.status(400).json({
                success: false,
                message: "ID is require.",
            });
        }

        const form = await Form.findOneAndDelete(id);

        if (!form) {
            return res.status(404).json({
                success: false,
                message: "form not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "form deleted successfully.",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete form.",
        });
    }
};