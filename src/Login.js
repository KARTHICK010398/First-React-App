// import './Login.css';

export function Login(){
    return(
        
        <div className="input-tag">
             <h1><b>Linked <span className='sa'> in</span></b></h1>
                <h2>Make the most your professional life</h2>
            <form className='fo'>
<input  type="text" placeholder="First Name"/>First Name 
<input  type="text" placeholder="Last Name"/>Last Name
<input  type="date" placeholder="Date Of Birth"/>Date Of Birth
<input  placeholder="Email"/>Email
<input  placeholder="Verify Email"/>Verify Email<br/>
<button type="button" class="btn btn-primary">Join Now</button><br/>
<button type="button" class="btn btn-primary">Continue with Facebook</button><br/>
<p>Already on Linkedin? <span><a href="#"> Sing in</a></span></p>
</form>
</div>
    )
}