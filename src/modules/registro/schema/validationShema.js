import * as yup from 'yup';

export const shema =  yup.object({
  nombre: yup.string().required(),
  email: yup.string().email('El email debe ser válido').required('El email es requerido')
});
