import React from 'react'

export default function Form() {
  return (
    <div><form action="">
            <label htmlFor="">Name: </label>
            <input type="text" name="name" id="name" placeholder="Enter your name" /><br />
            <label htmlFor="">Email: </label>
            <input type="email" name="email" id="email" placeholder="Enter your Email-ID" /><br />
            
            <label htmlFor="">Password: </label>
            <input type="password" name="password" id="password" placeholder="Enter your password" /><br />
            <label htmlFor="">confirm-Password: </label>
            <input type="c-password" name="c-password" id="c-password" placeholder="Enter your confirm-password" /><br />
        </form>
    </div>
  )
}
