
const employees = [
    {
      id: 1,
      fullname : 'Kishore Kumar',
      email: "employee1@example.com",
      password: "123",
      tasks: [
        
      ]
    },
    {
      id: 2,
      fullname : "Amitabh Bachhan",
      email: "employee2@example.com",
      password: "123",
      tasks: [
       
        
      ]
    },
    {
      id: 3,
      fullname : "Dilip Kumar",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        
        
      ]
    },
    {
      id: 4,
      fullname : "Sashi Kaapor",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        
      ]
    },
    {
      id: 5,
      fullname : "Mohammed Raafi",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        

      ]
    }
  ];
    
        const admin = {
          id: 1,
          email: "admin@example.com",
          password: "123"
        }

export const setLocalStorage = () => {
  localStorage.setItem('admin',JSON.stringify(admin))
  localStorage.setItem('employees', JSON.stringify(employees))
}

export const getLocalStorage = () => {
    const admin = JSON.parse(localStorage.getItem('admin'))
    const employees = JSON.parse(localStorage.getItem('employees'))
    return{admin, employees}
}        
      