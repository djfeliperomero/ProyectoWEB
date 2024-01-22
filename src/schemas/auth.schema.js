import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username es requerido"
    }),
    email: z.string({
        required_error: "Email es requerido"
    }).email({
        message: 'Email Invalido'
    }),
    password: z.string({
        required_error: "Contraseña es requerido"
    }).min(6, {
        message: 'La contraseña debe tener al menos 6 carateres'
    })
});


export const loginSchema = z.object({
    email: z.string({
        required_error: "Email es requerido"
    }).email({
        message: 'Email Invalido'
    }),
    password: z.string({
        required_error: "Contraseña es requerido"
    }).min(6, {
        message: 'La contraseña debe tener al menos6 carateres'
    })
});

export const productSchema = z.object({
    codigo: z.string({
        required_error: "Código es requerido"
    }).min(1, {
        message: 'Código no puede estar vacío'
    }),
    nombre: z.string({
        required_error: "Nombre es requerido"
    }),
    descripcion: z.string({
        required_error: "Descripción es requerida"
    }),
    valorporunidad: z.number({
        required_error: "Valor por unidad es requerido"
    }).min(0, {
        message: 'El valor por unidad debe ser mayor o igual a 0'
    }),
    imagen: z.string({
})
});

export const consultaSchema = z.object({
    
    consultanteNombre: z.string({
        required_error: "Nombre del consultante es requerido"
     }),
     consultanteEmail: z.string({
        required_error: "Email del consultante es requerido"
    }).email({
        message: 'Email del consultante invalido'
    }),
    consultaDescripcion: z.string({
        required_error: "Descripción de la consulta es requerida"
    }),
    estado: z.enum(['sin revisar', 'revisado']).default('sin revisar')
});



