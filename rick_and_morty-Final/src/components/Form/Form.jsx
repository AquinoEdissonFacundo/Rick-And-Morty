import React, { useState } from 'react';
import validation from '../validation/validation';
import style from './Form.module.css';

const MyForm = ({ login }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });

    setErrors(validation({ ...userData, [event.target.name]: event.target.value }));
       
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };


  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <div className={style.input}>
        <div className={style.inputcontent}>
          <div className={style.inputdist}>
            <div className={style.inputtype}>
              <label className={style.Email} htmlFor="email">Email:</label>
             
              <input
                onChange={handleChange}
                value={userData.email}
                type="text"
                id="email"
                name="email"
                className={style.inputis}
              />
              {errors.e1 ?(<p>{errors.e1}</p>)
              : errors.e2 ? (<p>{errors.e2}</p> )  
              : ( <p>{errors.e3}</p> )
            }
              
              
             <label className={style.Password} htmlFor="password">Password:</label>
              
              <input
                onChange={handleChange}
                value={userData.password}
                type="text"
                id="password"
                name="password"
                className={style.inputis}
              />
              {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}
           
            </div>
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;

