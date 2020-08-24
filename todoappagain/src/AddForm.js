import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

function AddForm() {
 return (
     <div>
         <form>
            <input type='text' required />
            <input type='submit' value='ADD' />
         </form>
     </div>
 )   
}

export default AddForm;