import { useState } from 'react';



//after making form, we need to make state, something that we expect to change.
export default function AuthPage() {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');


  
  return (
    <div className='forms'>
      <form>
        <lable> email <input type="email"/>
        </lable>
      </form>
      <form>
        <lable> password <input type="password"/>
        </lable>
        <button>Sign up!</button>
      </form>
      <form>
        <lable> email <input type="email"/>
        </lable>
      </form>
      <form>
        <lable> password <input type="password"/>
        </lable>
        <button>Sign in!</button>
      </form>
        
        
        
    </div>
  );
}
