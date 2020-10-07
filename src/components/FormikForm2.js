import React from 'react';
import { Formik,Field,Form,ErrorMessage } from 'formik'
function FormikForm2() {

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
                    isSubmitting,
                    errors,
                    touched
                }) => (
                        <Form >
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                               <Field type="email" name="email" placeholder="Email address"/>
                                 <ErrorMessage name="email" component="small" className="error" />
                            </div>
                           
                            <div className="form-control">
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" placeholder="password" />
                               
                                <ErrorMessage name="password" component="small" className="error" />
                            </div>
                           

                            <button type="submit" className="submit" disabled={isSubmitting}>Submit</button>
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

export default FormikForm2;
