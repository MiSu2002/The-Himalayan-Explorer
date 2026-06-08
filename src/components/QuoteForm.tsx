import { useState } from 'react';
import '../styles.css';

function QuoteForm(){

    const[formData,setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = async(e: { preventDefault: () => void }) => {
        e.preventDefault();
        try{
          const response = await fetch(
            'https://orgfarm-798208078f-dev-ed.develop.my.salesforce.com/services/apexrest/leadapi/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            }
            );

          const result = await response.json();
          if(response.ok){
            alert(`Lead created successfully! Lead Id: ${result.leadId}`);
            setFormData({
              firstName: '',
              lastName: '',
              company: '',
              email: ''
            });
          }
          else{
            alert(result.message || 'Oops... Cannot process your request at the moment.');
          }
        }
        catch(error){
            console.log('Failed' , error);
            alert('Something went wrong while submitting the form.');
        }
    }
    
    return(
        <>
        <section className="quote-page">
      <div className="quote-container">
        <h1 className="quote-title">Get in Touch</h1>
        <p className="quote-subtitle">
          Please enter your details and we'll reach out to you.
        </p>

        <form className="quote-form simple-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete='email'
              required
            />
          </div>

          <button type="submit" className="quote-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
        </>
    )
}

export default QuoteForm