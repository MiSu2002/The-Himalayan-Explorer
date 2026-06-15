import '../styles.css';

function QuoteForm(){

  const orgId = import.meta.env.SF_ORG_ID;
  const successUrl = `${window.location.origin}/successQuote`;
  return(
        <>
        <section className="quote-page">
      <div className="quote-container">
        <h1 className="quote-title">Get in Touch</h1>
        <p className="quote-subtitle">
          Please enter your details and we'll reach out to you.
        </p>

        <form className="quote-form simple-form" 
        action={`https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=${orgId}`} 
        method="POST">
          <input type="hidden" name="oid" value={orgId}/>
          <input type="hidden" name="retURL" value={successUrl}/>
          <input type="hidden" name="lead_source" value="Website" />
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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