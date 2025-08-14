


export const isUser = async (req, res, next) => {
    try {
        if (req.user.account_type !== 'User') {
            return res.status(401).json({
                success: false,
                message: 'This is protected route for User only'
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: message.error
        })
    }
}



// isDoctor 

const isDoctor = async (req, res, next) => {
    try {
        if (req.user.account_type !== 'Doctor') {
            return res.status(401).json({
                success: false,
                message: 'This is protected route for doctor only'
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: message.error
        })
    }
}



// isAdmin 

export const isAdmin = (req, res, next) => {
    try {
        if (req.user.account_type !== 'Admin') {
            return res.status(401).json({
                success: false,
                message: 'This is protected route for Admin only'
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: message.error
        })
    }
}