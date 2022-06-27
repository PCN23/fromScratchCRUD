import { SupabaseClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { signUp } from './services/fetch.utils';



//after making form, we need to make state, something that we expect to change.
export default function AuthPage() {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  async function handleSubmit(e) {
    e.preventDefault();
//   use email and password from form to create a new user in Supabase.
    const user = await signUp(email, password);
  }

  return (
    <div className='forms'>
      <form onSubmit={handleSubmit}> 
        {/* the handle submit will be an async function, gonna call supabase. */}
        <lable> email 
          {/* this is a controlled input.
            whatever shows up here becomes the state */}
          <input onChange={e => setEmail(e.target.value)} value={email} type="email"/> 
        </lable>
      </form>
      <form>
        <lable> password <input onChange={e => setPassword(e.target.value)} value={password} type="password"/>
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
