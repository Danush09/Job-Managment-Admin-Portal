Job Management Admin Interface

A full-stack job management portal for admins to create, manage, and filter job postings.  
Built with **React.js** (frontend), **Node.js/Express** (backend), and **MongoDB** (database).

---

## Features

- **Job List Page**
  - View all job postings in a modern, responsive grid
  - Filter by job title, location, job type, and salary range
- **Job Creation Page**
  - Create new job postings with a beautiful modal form
  - Form validation with React Hook Form
  - Fields: Job Title, Company Name, Company Logo, Location, Job Type, Salary Range, Experience Range, Description, Application Deadline
- **Live Filtering**
  - Instantly filter jobs by role, location, type, and salary range
- **Modern UI**
  - Responsive, clean design with styled-components and CSS modules
  - Icons and interactive elements for a great user experience

---

## Tech Stack

- **Frontend:** React.js, React Hook Form, styled-components, CSS Modules, Axios, react-icons, MUI Slider
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, CORS
- **Other:** Modern CSS, Responsive Design

- ## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/job-management-portal.git
cd job-management-portal
```

### 2. Install dependencies

#### Backend
```bash
cd Backend
npm install
```

#### Frontend
```bash
cd ../Frontend/job-portal-frontend
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `Backend` directory:
```
MONGODB_URI=mongodb://localhost:27017/jobportal
PORT=5000
```

### 4. Run the application

#### Start the backend server
```bash
cd Backend
npm start
```

#### Start the frontend
```bash
cd ../Frontend/job-portal-frontend
npm start
```

