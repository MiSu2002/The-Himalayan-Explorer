import '../styles.css';

function SuccessQuote(){

    return(
        <>
        <section className='successQuotePage'>
            <h1>Thank You</h1>
            <h3>Your request has been submitted successfully. Our team will reach out to you soon.</h3>
            <div className="options-success">
                <a href="/">Back to Home</a>
                <a href="/packages">Discover Packages</a>
            </div>
        </section>
        </>
    )
}

export default SuccessQuote;