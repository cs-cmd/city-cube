export default function SignUp({setPageType}) {
    return (
        <>
           <h1>Sign Up</h1>

            
           <p>Already have an account? <button className='link reactive-link' onClick={() => setPageType()}>Log in here!</button></p>
        </>
    )
}