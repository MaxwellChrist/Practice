import React, {useState} from "react"
import { useParams } from "react-router-dom"

const Form = (props) => {
    
    const [form, setForm] = useState({
        name: "",
        email: "",
        count: "",
        deliveryCharge: false
    })

    const {product} = useParams()

    const prices = {
        "A": "$1.99",
        "B": "$5.99",
        "C": "$9.99",
        "D": "$1",
    }

    const changer = (e) => {
        console.log(`name is : ${e.target.name}, value is ${e.target.value}, type is ${e.target.type}, check is ${e.target.checked}`)
        const determineIfDeliveryChecked = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({...form, [e.target.name]: determineIfDeliveryChecked})
    }

    return (
        <>
            <section className="Form">
                <h2>Product {product} Order Form</h2>
                <p>The price for {product} is {prices[product]}</p>
                <form>
                    <label>Your Name:
                        <input name="name" type="text" value={form.name} onChange={changer}></input>
                    </label>
                    <label>Your Email address:
                        <input name="email" type="email" value={form.email} onChange={changer}></input>
                    </label>
                    <label>How Many:
                        <select name="count" onChange={changer}>
                            <option value={form.count}>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label>Standard or Express Delivery (Standard is free; $2.99 for Express):
                        <input name="deliveryCharge" type="checkbox" checked={form.delivery} onChange={changer}></input>
                    </label>
                </form>
                <button type="submit">Submit Order</button>
            </section>
        </>
    )
}

export default Form