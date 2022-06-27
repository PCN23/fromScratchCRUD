import { useState } from 'react';



//after making form, we need to make state, something that we expect to change.
export default function AuthPage() {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

git ad

  return (
    <div className='forms'>
      <form onSubmit={handleSubmit}> 
        {/* the handle submit will be an async function, gonna call supabase. */}
        <lable> email 
          {/* this is a controlled input.
            whatever shows up here becomes the state */}
          <input value={email} type="email"/> 
        </lable>
      </form>
      <form>
        <lable> password <input value={password} type="password"/>
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
