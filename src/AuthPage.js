import { useState } from 'react';
import { signIn, signUp } from './services/fetch.utils';
import './App.css';
import { useHistory } from 'react-router-dom';

//after making form, we need to make state, something that we expect to change.
export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [signInEmail, setSignInEmail] = useState ('');
  const [signInPassword, setSignInPassword] = useState ('');
  const { push } = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
//   use email and password from form to create a new user in Supabase.
    const user = await signUp(email, password);

    setUser(user);
    // now we have to catch the prop
    push('/movies');
  }

  async function handleSignInSubmit(e) {
    e.preventDefault();
    const user = await signIn(signInEmail, signInPassword);
    setUser(user);
    push('/movies');

  }

  

  return (
    <div className='forms'>
      
       
      <form onSubmit={handleSubmit}> 
        <h2>Sign Up</h2>
        {/* the handle submit will be an async function, gonna call supabase. */}
        <label> email 
          {/* this is a controlled input.
            whatever shows up here becomes the state */}
          <input onChange={e => setEmail(e.target.value)} 
            value={email} type="email"/> 
        </label>
      </form>
      <form>
        <label> password <input onChange={e => 
          setPassword(e.target.value)} 
        value={password} type="password"/>
        </label>
        <button>Sign up!</button>
      </form>
      <form onSubmit={handleSignInSubmit}>
        <h2>Sign In</h2>
        {/* the handle submit will be an async function, gonna call supabase. */}
        <label> email 
          {/* this is a controlled input.
            whatever shows up here becomes the state */}
          <input onChange={e => setSignInEmail(e.target.value)} 
            value={signInEmail} type="email"/> 
        </label>
      </form>
      <form>
        <label> password <input onChange={e => 
          setSignInPassword(e.target.value)} 
        value={signInPassword} type="password"/>
        </label>
        <button>Sign in!</button>
      </form>
        
        
    </div>
  );
}
