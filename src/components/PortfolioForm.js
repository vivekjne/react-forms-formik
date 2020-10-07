import React, { useRef } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'

function PortfolioForm() {
    const addressesRef = useRef(null)
    return (
        <div className="container">
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', addresses: [{ city: '', state: '', fullAddress: '', pincode: '' }] }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(20, 'Must be 20 characters or less')
                        .required('First name is required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Last name is required'),
                    email: Yup.string().email('Invalid email address!').required(),
                    addresses: Yup.array(Yup.object({
                        city: Yup.string().required('City is required'),
                        state: Yup.string().required('State is required'),
                        fullAddress: Yup.string().required('Full Address is required'),
                        pincode: Yup.number().required('Pincode is required')
                    }))

                })}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        console.log(values)
                        setSubmitting(false)
                    }, 500)
                }}
            >
                {({
                    isSubmitting,
                    errors,
                    touched,
                    values
                }) => (
                        <Form >

                            <div className="form-control">
                                <label htmlFor="firstName">First name</label>
                                <Field type="text" name="firstName" placeholder="Enter your first name" />
                                <ErrorMessage name="firstName" component="small" className="error" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="lastName">Last name</label>
                                <Field type="text" name="lastName" placeholder="Enter your last name" />
                                <ErrorMessage name="lastName" component="small" className="error" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" placeholder="Email address" />
                                <ErrorMessage name="email" component="small" className="error" />
                            </div>

                            <div className="form-control radio-control">
                                <div id="gender-radio-group" >Gender</div>
                                <div role="group" aria-labelledby="gender-radio-group">
                                    <label>
                                        <Field type="radio" name="gender" value="male" />
                                            Male
                                        </label>

                                    <label>
                                        <Field type="radio" name="gender" value="female" />
                                            Female
                                        </label>

                                </div>

                            </div>

                            <div>

                                <FieldArray name="addresses">
                                    {({ insert, remove, push }) => (
                                        <React.Fragment>
                                            <div className="address-container">
                                                <h3 >Addresses</h3>
                                                <button className="btn" onClick={() => {
                                                    push({ city: '', state: '', fullAddress: '', pincode: '' })
                                                    setTimeout(() => {
                                                        addressesRef.current.scrollIntoView({ behavior: "smooth" })

                                                    }, 300)
                                                }
                                                }>Add new</button>
                                            </div>
                                            {values.addresses.length > 0 &&
                                                values.addresses.map((address, index) => (
                                                    <>
                                                        <div className="form-control">
                                                            <label htmlFor={`addresses.${index}.city`}>City</label>
                                                            <Field
                                                                name={`addresses.${index}.city`}
                                                                placeholder="Enter city"
                                                                type="text"
                                                            />
                                                            <ErrorMessage
                                                                name={`addresses.${index}.city`}
                                                                component="small"
                                                                className="error"
                                                            />
                                                        </div>

                                                        <div className="form-control">
                                                            <label htmlFor={`addresses.${index}.state`}>State</label>
                                                            <Field
                                                                name={`addresses.${index}.state`}
                                                                placeholder="Enter state"
                                                                type="text"
                                                            />
                                                            <ErrorMessage
                                                                name={`addresses.${index}.state`}
                                                                component="small"
                                                                className="error"
                                                            />
                                                        </div>

                                                        <div className="form-control">
                                                            <label htmlFor={`addresses.${index}.fullAddress`}>Full Address</label>
                                                            <Field
                                                                name={`addresses.${index}.fullAddress`}
                                                                placeholder="Enter Full Address"
                                                                type="text"
                                                            />
                                                            <ErrorMessage
                                                                name={`addresses.${index}.fullAddress`}
                                                                component="small"
                                                                className="error"
                                                            />
                                                        </div>

                                                        <div className="form-control">
                                                            <label htmlFor={`addresses.${index}.pincode`}>Enter pincode</label>
                                                            <Field
                                                                name={`addresses.${index}.pincode`}
                                                                placeholder="Enter pincode"
                                                                type="number"
                                                            />
                                                            <ErrorMessage
                                                                name={`addresses.${index}.pincode`}
                                                                component="small"
                                                                className="error"
                                                            />
                                                        </div>
                                                    </>

                                                ))}
                                            <div ref={addressesRef}></div>
                                        </React.Fragment>
                                    )}


                                </FieldArray>
                            </div>

                            <button type="submit" className="submit" disabled={isSubmitting}>Submit</button>
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

export default PortfolioForm;
