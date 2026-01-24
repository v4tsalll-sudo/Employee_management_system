
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
        {
          title: "Design homepage",
          description: "Create new homepage layout",
          date: "2025-01-04",
          category: "Design",
          active: true,
          isNew: true,
          completed: false,
          failed: false
        },
        {
          title: "Fix navbar bug",
          description: "Resolve navbar alignment issue",
          date: "2025-01-01",
          category: "Development",
          active: false,
          isNew: false,
          completed: true,
          failed: false
        },
        {
          title: "Image optimization",
          description: "Compress website images",
          date: "2025-01-03",
          category: "Performance",
          active: false,
          isNew: false,
          completed: false,
          failed: true
        }
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
          active: true,
          isNew: true,
          completed: false,
          failed: false
        },
        {
          title: "SEO audit",
          description: "Check SEO performance",
          date: "2025-01-02",
          category: "Marketing",
          active: false,
          isNew: false,
          completed: true,
          failed: false
        },
        {
          title: "Keyword research",
          description: "Find keywords for next campaign",
          date: "2025-01-01",
          category: "Marketing",
          active: false,
          isNew: false,
          completed: false,
          failed: true
        }
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
          active: true,
          isNew: true,
          completed: false,
          failed: false
        },
        {
          title: "Backup database",
          description: "Create weekly backup",
          date: "2025-01-03",
          category: "IT",
          active: false,
          isNew: false,
          completed: true,
          failed: false
        },
        {
          title: "Security patch",
          description: "Apply security updates",
          date: "2025-01-01",
          category: "Security",
          active: false,
          isNew: false,
          completed: false,
          failed: true
        }
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
          active: true,
          isNew: true,
          completed: false,
          failed: false
        },
        {
          title: "Performance review",
          description: "Review team performance",
          date: "2025-01-04",
          category: "HR",
          active: false,
          isNew: false,
          completed: true,
          failed: false
        },
        {
          title: "Hiring plan",
          description: "Prepare hiring roadmap",
          date: "2025-01-02",
          category: "HR",
          active: false,
          isNew: false,
          completed: false,
          failed: true
        }
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
      