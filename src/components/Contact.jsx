import { useState } from "react"



// or (props)
export default function Contact({ user }) {

    const [error, setError] = useState("")
    const defaultInfo = { name: "", email: "", question: "" }
    const [contactInfo, setContactInfo] = useState(defaultInfo)


    function handleInputChange(e) {
        
        console.log(e.target.name)
        console.log(e.target.value)

        const clone = {
            ...contactInfo,
            
            [e.target.name]: e.target.value

            // [e.target.name]: e.target.value
        }

        setContactInfo(clone);

    }

    function submitForm(e){ 
        e.preventDefault()
        if(!contactInfo.name || !contactInfo.email  || !contactInfo.question ){

            setError("missing text")

        }else{
            
            setError("success")
            setContactInfo(defaultInfo)

        }

        // alert user
        //clear the state (clears the form)
    }

    return (

        <>
            <h1>this is the Contact page</h1>

            <form onSubmit={submitForm}>
                
                <input type="text" name="name" value={contactInfo.name} onChange={handleInputChange} />

                <input type="email" name="email" value={contactInfo.email} onChange={handleInputChange} />

                <textarea name="question" value={contactInfo.question} onChange={handleInputChange} />

                <button>submit info</button>


            </form>

            <p>{error}</p>
        </>


    )
}