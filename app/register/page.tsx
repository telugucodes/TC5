import { SignIn, SignUp } from '@clerk/nextjs'

const RegisterPage = () => {    
    return (
        <div className="flex justify-center items-center">
          <SignUp signInUrl='/login'/>
        </div>
      );
}

export default RegisterPage;
