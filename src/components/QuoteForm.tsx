import '../styles.css';

function QuoteForm(){
    
    return(
        <>
        <section className="quote-page">
      <div className="quote-container">
        <h1 className="quote-title">Get in Touch</h1>
        <p className="quote-subtitle">
          Please enter your details and we'll reach out to you.
        </p>

        <form className="quote-form simple-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DdM00000veqAL" method="POST">
          <input type="hidden" name="oid" value="00DdM00000veqAL"/>
          <input type="hidden" name="retURL" value="https://himalayan-explorer-pmbggy9o4-soumita-s-projects.vercel.app/https://himalayan-explorer-pmbggy9o4-soumita-s-projects.vercel.app/"/>
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

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="companyField"
              name="company"
              placeholder="Enter your company"
              autoComplete="off"
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