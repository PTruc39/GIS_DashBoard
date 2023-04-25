import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
const UpdateNew = ({ inputs, titlee, type}) => {




  let dynamicInpVal;
  switch (type) {
    case 'CUSTOMER':
        dynamicInpVal = {
            username: '',
            name: '',
            email: '',
            password: '',
            address: '',
        };
        break;
    case 'PRODUCT':
        dynamicInpVal = {
            title: '',
            description: '',
            category: '',
            price: '',
            stock: '',
        };
        break;
    case 'BLOG':
        dynamicInpVal = {
            title: '',
            description: '',
            tags: '',
        };
        break;
    default:
        break;
  }
  const [userInp, setUserInp] = useState(dynamicInpVal);
  const handleChange = (e) => {
    setUserInp({ ...userInp, [e.target.name]: e.target.value });
};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInp);
  };

  return (
    <div className="new_page_main">
      
      <h2>Update</h2>
          <form onSubmit={handleSubmit}>
          {inputs.map((detail) => (
                                    <Input
                                        key={detail.id}
                                        {...detail}
                                        value={userInp[detail.name]}
                                        onChange={handleChange}
                                    />
                                ))}
            <button type="submit">Update</button>
          </form>
   
    </div>
      
    
  );
};

export default UpdateNew;