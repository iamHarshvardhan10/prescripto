import Doctor from "../models/Doctor.mode.js";
import User from "../models/User.model.js";
import { imageUploader } from "../utils/imageUploader.js";


// #####################################
//          USER PROFILE               #
// #####################################

// Update profile
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
        }, { new: true })

        // await userUpdate.save();

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

// DELETE USER ACCOUNT
export const deleteUserProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        console.log(userId)

        if (!await User.findById(userId)) {
            return res.status(404).json({
                message: 'User Not Found',
                success: false
            })
        }

        const userdeletion = await User.findByIdAndDelete({ _id: userId })
        console.log(userdeletion)

        return res.status(200).json({
            message: 'Deleted Successfully',
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}


// UPDATE IMAGE 

export const updateUserImage = async (req, res) => {
    try {
        const image_url = req.files.image_url;
        const userId = req.user.id;

        if (!await User.findById(userId)) {
            return res.status(404).json({
                message: 'User Not Found',
                success: false
            })
        }

        const image = await imageUploader(image_url, process.env.CLOUD_FOLDER_NAME, 1000, 1000)
        const updateUserImage = await User.findByIdAndUpdate(
            { _id: userId },
            { image_url: image.secure_url },
            { new: true }
        )

        return res.status(200).json({
            message: 'Image Upload Successfully',
            success: true,
            updateUserImage
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}




export const getUserDetails = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(404).json({
                message: 'User not found',
                success: true
            })
        }

        const user = await User.findById(userId);

        return res.status(200).json({
            message: 'Fetch User Successfully',
            success: true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            messaga: 'Internal Server Error',
            error: error.message
        })
    }
}



// #####################################################
//              DOCTOR                                 #
// #####################################################


export const deleteDoctorAccount = async (req, res) => {
    try {
        console.log("deleteDoctorAccount called");

        const userId = req.user.id;
        console.log("User ID from token:", userId);

        const user = await User.findById(userId);
        console.log("User found:", user);

        if (!user) {
            console.log("User not found");
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (user.account_type === "Doctor") {
            console.log("Deleting doctor profile...");
            const deletedDoc = await Doctor.findOneAndDelete({ user: userId });
            console.log("Deleted doctor:", deletedDoc);
        }

        console.log("Deleting user...");
        const deletedUser = await User.findByIdAndDelete(userId);
        console.log("Deleted user:", deletedUser);

        return res.status(200).json({
            success: true,
            message: "Doctor account deleted successfully"
        });

    } catch (error) {
        console.error("Error in deleteDoctorAccount:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};



// Update doctor profile

export const updateDoctorProfile = async (req, res) => {
    try {
        const {
            specialization = "",
            degree = "",
            experience = "",
            availability = [],
            available = "",
            licenseNumber = "",
            fees = ""
        } = req.body;

        const userId = req.user.id;

        if (!userId) {
            return res.status(404).json({
                message: 'User Not Found',
                success: false
            })
        }

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({
                message: 'User Not Found',
                success: false
            })
        }

        let doctorProfileUpdate;
        if (user.account_type == "Doctor") {
            doctorProfileUpdate = await Doctor.findOneAndUpdate({ user: userId }, {
                specialization,
                degree,
                experience,
                availability,
                available,
                licenseNumber,
                fees
            }, { new: true })
        }

        return res.status(200).json({
            message: "Doctor Profile Updated",
            success: true,
            doctorProfileUpdate
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}