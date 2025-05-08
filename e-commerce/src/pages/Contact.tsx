import './contact.css'



function Contact(){
    return (
        <div className='Contact'>
         <h1 className="Contact-h1">This is Contact Page</h1>

         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3494773933144!2d77.11822387409785!3d28.709100080601996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015eda35bfb3%3A0xa32312fd7cb3342a!2sShirdi%20Sai%20Baba%20Mandir!5e0!3m2!1sen!2sin!4v1746286555697!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
         <div className="forms">
            <form action="" method="post">
                <input type="text" name="username" placeholder='Please Enter your name' required autoComplete='off' />
                <input type="email" name="Email"  placeholder='Please Enter your email' required autoComplete='off' />
                 <textarea name="message" placeholder='Enter your message'  required autoComplete='off'></textarea>
                <input className='submit-btn' type="submit" value="Send" />

            </form>
         </div>
        </div>
    )
}

export default Contact;