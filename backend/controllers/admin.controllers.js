import User from "../models/User.model.js"



export const getAllUserDetails = async (req, res) => {
    try {
        const allUser = await User.find({ account_type: 'User' });

        if (!allUser) {
            return res.status(404).json({
                message: 'Currently No User is Register with us!',
                success: false
            })
        }

        res.status(200).json({
            message: 'All User Fetch Successfully',
            success: true,
            allUser
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error',
            success: false,
            error: error.message
        })
    }
}


// GET USER BY ID

export const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const getOneUser = await User.findById({ _id: userId })
        if (!getOneUser) {
            return res.status(404).json({
                message: `User Not Found with ${userId} `,
                success: false
            })
        }

        return res.status(200).json({
            message: 'User Fetch Successfully',
            success: true,
            getOneUser
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false
        })
    }
}