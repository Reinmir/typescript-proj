export const loginFormConfig = {
  email: {
    name: 'email',
    type: 'email',
    validations: [
      {
        name: 'maxLength',
        validValue: 20
      },
      {
        name: 'minLength',
        validValue: 2
      },
    ]
  },
  password: {
    name: 'password',
    type: 'password',
    validations: [
      {
        name: 'maxLength',
        validValue: 10
      },
      {
        name: 'minLength',
        validValue: 3
      },
    ]
  }
}

export const registerFormConfig = {
  email:{
   name: 'email',
   type: 'email', 
    validations:[
        {
            name: `maxLength`,
            validValue: 20
        },
        {
        name: 'minLength',
        validValue:2       
        }   
     ]
},
password: {
    name: 'password',
    type: 'password',
    validations: [
      {
        name: 'maxLength',
        validValue: 10
      },
      {
        name: 'minLength',
        validValue: 3
      },
    ]
}
}