
const employees = [
    {
      id: 1,
      fullname : 'Kishore Kumar',
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "SEO audit",
          description: "Check SEO performance",
          date: "2025-01-02",
          category: "Marketing",
          stat : 'pending'
        }  
      ]
    },
    {
      id: 2,
      fullname : "Amitabh Bachhan",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Design homepage",
          description: "Create new homepage layout",
          date: "2025-01-04",
          category: "Design",
          stat : 'pending'
        },
        
      ]
    },
    {
      id: 3,
      fullname : "Dilip Kumar",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Write blog post",
          description: "Draft blog on new features",
          date: "2025-01-06",
          category: "Content",
          stat : 'pending'
        },
        
      ]
    },
    {
      id: 4,
      fullname : "Sashi Kaapor",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Server monitoring",
          description: "Check server health",
          date: "2025-01-05",
          category: "IT",
          stat : 'pending'
        },
        
      ]
    },
    {
      id: 5,
      fullname : "Mohammed Raafi",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Team meeting",
          description: "Conduct weekly team meeting",
          date: "2025-01-06",
          category: "Management",
          stat : 'pending'
        },

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
      