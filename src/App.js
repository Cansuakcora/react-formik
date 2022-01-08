import './App.css';
import { Formik , useFormik} from 'formik';

function App() {
  return (
    <div className="App">
  <Formik
      initialValues={{  //state gibi girilecek değerleri boş atadık
        firstName: 'cansu',
        lastName: 'test',
        email: 'test@test.com',
        extra1: 'male',
        hobies: [],
        country: "",
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2)); //girilen değerleri alert ile göstermek için
      }}>
        
      { ({handleSubmit, handleChange, values}) =>(
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input 
        name='firstName' 
        onChange={handleChange} 
        value={values.firstName}/>

        <br/> <br/> 

        <label htmlFor="lastName">Last Name</label>
        <input 
        name='lastName' 
        required 
        value={values.lastName} 
        onChange={handleChange}/>

        <br/> <br/> 

        <label htmlFor="email">Email</label>
        <input 
        name='email' 
        type="email" 
        onChange={handleChange} 
        value={values.email}/>

        <br/> <br/> 

        <span>Male</span>
        <input 
        name='extra1' 
        type="radio" 
        value="male" 
        onChange={handleChange}
        checked={values.extra1 === "male"}/>

        <span>Female</span>
        <input 
        name='extra1' 
        type="radio"  
        value="female" 
        onChange={handleChange}
        checked={values.extra1 === "female"}/>

        <br/> <br/> 

        <div>
          Football
        <input type="checkbox" value="Football" name='hobies' onChange={handleChange}/>
        </div>

        <div>
          Cinema
          <input type="checkbox" value="Cinema" name='hobies' onChange={handleChange}/>
        </div>
       
       <div>
         Photography
         <input type="checkbox" value="Photograpghy" name='hobies' onChange={handleChange}/>
       </div>

        <br/><br/>

        <select name='country' onChange={handleChange}>
          <option value="" disabled selected></option>
          <option value="Turkey">Turkey</option>
          <option value="Germany">Germany</option>
          <option value="USA">USA</option>
          <option value="England">England</option>

        </select>

        <br/><br/>

        <button type="submit">Submit</button>

        <br/><br/>
        {JSON.stringify(values)}
      </form>
      )}
    </Formik>
    </div>
  );
}

export default App;
