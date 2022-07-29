import React from 'react'

const YoutubeForm = () => {
  return (
    <div>
        <form>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' />

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email' />

            <label htmlFor='name'>Channel</label>
            <input type='text' id='channel' name='channel' />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm