import React, { useReducer, useState } from 'react';
import '../App/App.css';

//This will create a state object that preserves the current state 
//while overwriting specific values as they change
const formReducer = (state, event) => {
  if(event.reset) {
    return {
    apple: '',
    count: 0,
    name: '',
    'gift-wrap': false,
    }
    }
    return {
    ...state,
    [event.name]: event.value
    }
  }

function App() {
  //useReducer is called a HOOK
  //We pre-fill the form data here
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  });
 
  //useState is called a HOOK
  // We call setSubmitting(true) when the data is submitted 
  //and call setSubmitting(false) when the timeout is resolved
  const [submitting, setSubmitting] = useState(false);
  
  //We show the data for 3 seconds and then reset the form
  //reset the state when the function resolves
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
       reset: true
     })
    }, 3000);
  }

  //We see if the event.target.type is checkbox. 
  //If it is, we pass the event.target.checked property as the value 
  //if not then we pass the event.target.value
  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
    name: event.target.name,
    value: isCheckbox ? event.target.checked : event.target.value,
    });
    }

return (
<div className="wrapper">
<h1>How About Them Apples</h1>
{submitting &&
<div>
You are submitting the following:
<ul>
{Object.entries(formData).map(([name, value]) => (
<li key={name}><strong>{name}</strong>: {value.toString()}</li>
))}
</ul>
</div>
}
<form onSubmit={handleSubmit}>
<fieldset disabled={submitting}>
<label>
<p>Name</p>
<input name="name" onChange={handleChange} value={formData.name ||''}/>
</label>
</fieldset>
<fieldset disabled={submitting}>
<label>
<p>Apples</p>
<select name="apple" onChange={handleChange} value={formData.apple ||''}>
<option value="">--Please Choose An Option--</option>
<option value="Spipa">Spipa</option>
<option value="Djerba">Rougeatre</option>
<option value="Assel">Assel</option>
</select>
</label>
<label>
<p>Count</p>
<input type="number" name="count" onChange={handleChange} step="1" value={formData.count || ''}/>
</label>
<label>
<p>Gift Wrap</p>
<input type="checkbox" name="gift-wrap" onChange={handleChange} checked={formData['gift-wrap'] || false} disabled={formData.apple !== 'Spipa'}/>
</label>
</fieldset>
<button type="submit" disabled={submitting}>Submit</button>
</form>
</div>
)
}
export default App;