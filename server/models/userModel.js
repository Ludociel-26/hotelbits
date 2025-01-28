import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true}, // Nombre
    surname: { type: String, required: true }, // Apellido
    country: { type: String, required: true }, // País o región
    birthDate: { type: Date, required: true }, // Fecha de nacimiento
    email: { type: String, required: true, unique: true}, // Correo
    password: { type: String, required: true}, // Contraseña
    phoneLada: { 
        type: String,  
        required: true, 
        match: [/^\+(\d{1,4})$/, 'La lada debe tener entre 1 y 4 dígitos (por ejemplo, +52, +1)'] 
    }, // Validación para lada de 1 a 4 dígitos
    phoneNumber: { 
        type: String, 
        required: true, 
        match: [/^\d{10}$/, 'El número de teléfono debe contener 10 dígitos'] 
    }, // Teléfono móvil, con validación para 10 dígitos
    roles: { 
        type: [String], 
        enum: ['user', 'admin', 'moderator'], 
        default: ['user'] 
    },
    verifyOtp: {type: String, default: ''},
    verifyOtpExpireAt: {type: Number, default: 0},
    isAccountVerified: {type: Boolean, default: false},
    resetOtp: {type: String, default: ''},
    resetOtpExpireAt: {type: Number, default: 0},
})

const userModel = mongoose.models.user || mongoose.model('users', userSchema);

export default userModel;