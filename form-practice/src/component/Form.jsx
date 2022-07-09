import React, {useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as yup from 'yup'

const initialForm = {
    name: "",
    email: "",
    count: "",
    deliveryCharge: false
}

const Form = (props) => {
    const {orderSubmit} = props

    const navigate = useNavigate()

    const yupFormSchema = yup.object().shape({
        name: yup.string().min(3, "Name must be at least 3 characters long"),
        email: yup.string().email("Improper email entered; please enter valid email address").required("Email is required"),
        count: yup.string().oneOf(["1", "2", "3", "4", "5"], "Please select an amount"),
        deliveryCharge: yup.boolean()
    })
    
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        count: "",
        deliveryCharge: ""
    })
    const [disabled, setDisabled] = useState(true)

    const {product} = useParams()

    const prices = {
        "A": "$1.99",
        "B": "$5.99",
        "C": "$9.99",
        "D": "$1",
    }

    const validateChange = (e) => {
        yup.reach(yupFormSchema, e.target.name).validate(e.target.type === "checkbox" ? e.target.checked : e.target.value)
            .then((res) => {
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch((err) => {
                setErrors({...errors, [e.target.name]: err.errors[0]})
            })

    }

    const changer = (e) => {
        validateChange(e)
        const determineIfDeliveryChecked = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({...form, [e.target.name]: determineIfDeliveryChecked})
    }

    const submitBtn = (e) => {
        e.preventDefault()
        console.log("submit")
        orderSubmit(form)
        setForm(initialForm)
        navigate("/order")
    }

    useEffect(() => {
      yupFormSchema.isValid(form)
        .then((res) => {
            setDisabled(!res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [form, yupFormSchema])

    return (
        <>
            <section className="Form">
                <h2>Product {product} Order Form</h2>
                <p>The price for {product} is {prices[product]}</p>
                <form onSubmit={submitBtn}>
                    <label>Your Name:
                        <input name="name" type="text" value={form.name} onChange={changer}></input>
                    </label>
                    <p name="name">{errors.name}</p>
                    
                    <label>Your Email address:
                        <input name="email" type="email" value={form.email} onChange={changer}></input>
                    </label>
                    <p name="email">{errors.email}</p>

                    <label>How Many:
                        <select name="count" onChange={changer}>
                            <option value="0">Please Select an amount</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <p name="count">{errors.count}</p>

                    <label>Standard or Express Delivery (Standard is free; $2.99 for Express):
                        <input name="deliveryCharge" type="checkbox" checked={form.delivery} onChange={changer}></input>
                    </label>
                    <p name="deliveryCharge">{errors.deliveryCharge}</p>
                    
                    <button type="submit" disabled={disabled}>Submit Order</button>
                </form>
            </section>
        </>
    )
}

export default Form