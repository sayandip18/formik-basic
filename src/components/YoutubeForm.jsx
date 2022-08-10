import React from 'react'
import { ErrorMessage, Field, Formik, useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})

const onSubmit = values => console.log(values)

const initialValues = {
    name: '',
    email: '',
    channel: '',
}

const YoutubeForm = () => {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            {formik =>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <Field
                    type='text'
                    id='name'
                />
                <ErrorMessage name='name' />

                <label htmlFor='email'>E-mail</label>
                <Field
                    type='email'
                    id='email'
                />
                <ErrorMessage name='email' />

                <label htmlFor='channel'>Channel</label>
                <Field
                    type='text'
                    id='channel'
                />
                <ErrorMessage name='channel' />

                <button type='submit'>Submit</button>
            </form>}
        </Formik>
    )
}

export default YoutubeForm