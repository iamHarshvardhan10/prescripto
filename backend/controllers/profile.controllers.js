import User from "../models/User.model.js";



// #####################################
//          USER PROFILE               #
// #####################################


export const updateUserProfile = async (req, res) => {
    try {
        const { firstName = "", lastName = "", phone_number = "", address = "", gender = "", dob = "", about = "" } = req.body;

        console.log(firstName, lastName, phone_number, address)

        const userId = req.user.id;

        console.log(userId)

        const userDetails = await User.findById(userId);
        console.log(userDetails)

        if (!userDetails) {
            return res.status(404).json({
                message: 'User Not found',
                success: true
            })
        }

        const userUpdate = await User.findByIdAndUpdate(userId, {
            firstName: firstName,
            lastName: lastName,
            phone_number: phone_number,
            address: address,
            gender: gender,
            dob: dob,
            about: about
        })

        await userUpdate.save();

        return res.status(200).json({
            message: 'Profile Updated Successfully',
            success: true,
            userUpdate
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}