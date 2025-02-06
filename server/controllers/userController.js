import userModel from "../models/userModel.js";

export const getUserData = async (req, res)=>{
    try {

        const  userId  = req.userID;

        // Verificar tipo de userId
        console.log("ID recibido en getUserData:", userId, "Tipo:", typeof userId);

        if (!userId) {
            return res.json({ success: false, message: 'User ID not found' });
        }

        // Asegurarse de convertir a número
        const userIdNumber = Number(userId);

        // ID tal cual viene en el token (como string)
        const user = await userModel.findOne({ where: { id: userIdNumber } });
        //const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }


        res.json({
            success: true,
            userData: {
                name: user.name,
                email: user.email,
                isAccountVerified: user.is_account_verified
            }
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}