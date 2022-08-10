import React from 'react'
import { useFormik } from 'formik'
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
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? <div className='alertMsg'>{formik.errors.name}</div> : null}

                <label htmlFor='email'>E-mail</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? <div className='alertMsg'>{formik.errors.email}</div> : null}

                <label htmlFor='channel'>Channel</label>
                <input
                    type='text'
                    id='channel'
                    name='channel'
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.channel && formik.errors.channel ? <div className='alertMsg'>{formik.errors.channel}</div> : null}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm