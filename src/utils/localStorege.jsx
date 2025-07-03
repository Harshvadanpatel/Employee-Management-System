const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Homepage",
        "description": "Create a responsive homepage layout",
        "date": "2025-07-03",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Login Bug",
        "description": "Resolve authentication issue on login page",
        "date": "2025-07-01",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Weekly sync-up call with frontend team",
        "date": "2025-07-04",
        "category": "Meeting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "API Integration",
        "description": "Connect the backend APIs to frontend",
        "date": "2025-07-02",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Create Dashboard",
        "description": "Build the admin dashboard UI",
        "date": "2025-07-05",
        "category": "UI/UX",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review PRs from teammates",
        "date": "2025-07-03",
        "category": "Review",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix GraphQL Bug",
        "description": "Resolve GraphQL query issues",
        "date": "2025-07-01",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Documentation",
        "description": "Write developer onboarding guide",
        "date": "2025-07-02",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Migration",
        "description": "Migrate from MongoDB v4 to v6",
        "date": "2025-07-03",
        "category": "Database",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix UI Padding Issue",
        "description": "Align all cards with equal padding",
        "date": "2025-07-01",
        "category": "UI Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Add Notifications",
        "description": "Implement toast notifications for errors",
        "date": "2025-07-03",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Optimize Images",
        "description": "Compress images for faster load",
        "date": "2025-07-01",
        "category": "Performance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix Logout Redirect",
        "description": "Ensure logout redirects properly",
        "date": "2025-07-02",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Color Palette Update",
        "description": "Update theme colors as per brand guidelines",
        "date": "2025-07-04",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Create Landing Page",
        "description": "Build landing page with hero section",
        "date": "2025-07-01",
        "category": "Frontend",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Setup CI/CD",
        "description": "Configure GitHub Actions pipeline",
        "date": "2025-07-03",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Environment Setup",
        "description": "Prepare project setup for new devs",
        "date": "2025-07-02",
        "category": "Setup",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees= JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(employees, admin);
}
