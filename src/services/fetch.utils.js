import { client } from './client';


export async function signUp(email, password) {

  const { user } = await client.auth.
    signUp({
        // this email and password is from thr forms and now we need to catch it on top.
      email: email,
      password: password,
        
    });

  return user;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });

  return user;
}

export async function logout() {
  const { error } = await client.auth.signOut();

  return error;
}