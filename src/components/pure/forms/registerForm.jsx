import React, {useState} from 'react';

const RegisterForm = () => {
    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: '',
        }
    ]
    const [data, setdata] = useState(initialData);

    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
