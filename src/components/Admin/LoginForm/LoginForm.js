import React from 'react'
import './LoginForm.scss'
import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { loginApi } from '../../../api/user'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useAuth } from '../../../hooks'

import './LoginForm.scss'

export function LoginForm() {
    const { login } = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formValue) => {
            try {
                const response = await loginApi(formValue)
                const { access } = response;
                login(access)
            } catch (error) {
                toast.error(error.message)
            }
        }
    });

    return (
        <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3'>
                <div className="field">
                    <Form.Control
                    name='email'
                    type='email'
                    placeholder="Correo electronico" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    className={
                        formik.touched.email && formik.errors.email ? "error" : null
                    }
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                    </Form.Text>
                </div>
            </Form.Group>
            <Form.Group className='mb-3'>
                <div className="field">
                    <Form.Control 
                    name='password' 
                    type='password' 
                    placeholder="Contraseña" 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className={
                        formik.touched.password && formik.errors.password ? "error" : null
                    }
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger">{formik.errors.password}</div>
                        ) : null}
                    </Form.Text>
                </div>
            </Form.Group>
            <div className='d-grid'>
                <Button className="btn btn-primary" type="submit">Ingresar</Button>
            </div>
        </Form>
    )
}

function initialValues(){
    return {
        email: '',
        password: ''
    }
}

function validationSchema(){
    return{
        email: Yup.string().email("El formato del correo es incorrecto").required("El correo es requerido"),
        password: Yup.string().required('La contraseña es requerida')
    }
}