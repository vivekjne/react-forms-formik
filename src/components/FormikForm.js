import React from 'react';
import { Formik } from 'formik'
function FormikForm() {

    return (
        <div className="container">
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Email is Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Password is Required'
                    } else if (values.password.length < 8) {
                        errors.password = 'Password must be atleast 8 characters'
                    }
                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 500)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input
                                    placeholder="Email Address"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                 {errors.email && touched.email && <small className="error">*{errors.email}</small>}
                            </div>
                           
                            <div className="form-control">
                                <label htmlFor="password">Password</label>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                 {errors.password && touched.password && <small className="error">*{errors.password}</small>}
                            </div>
                           

                            <button type="submit" className="submit" disabled={isSubmitting}>Submit</button>
                        </form>
                    )}
            </Formik>
        </div>
    );
}

export default FormikForm;
