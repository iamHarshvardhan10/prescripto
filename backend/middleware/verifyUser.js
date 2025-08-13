import jwt from 'jsonwebtoken';



export const verifyUser = (req, res, next) => {
    try {
        const token = req.cookies?.token || req.body?.token || req.headers('Authorization')?.replace("Bearer ", "");

        console.log(token)
        console.log(req.cookies.token)
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing"
            })
        }

        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            console.log(decoded);

            req.user = decoded;
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token"
            })
        }

        next()

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error",
            success: false,
            error: error.message
        })
    }
}