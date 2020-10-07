import React from 'react';

function BasicForm() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log({email,password})
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input 
          placeholder="Email Address" 
          type="email" 
          id="email" 
          name="email" 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input 
          placeholder="Password" 
          type="password" 
          id="password" 
          name="password" 
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          />
        </div>

        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}

export default BasicForm;
