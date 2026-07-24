# Beacon CRM

Beacon CRM is a full-stack customer relationship management application that helps businesses manage consultation requests from initial inquiry to completion. It provides secure authentication, role-based access, and separate dashboards for users and administrators.

**Live Demo:** https://beacon-crm-beige.vercel.app

**Repository:** https://github.com/saniyanoorain03/Beacon-CRM

---

## Features

### User
- Register and log in securely
- Submit consultation requests
- View previously submitted requests
- Manage personal dashboard

### Admin
- View all consultation requests
- Update request status
- Manage incoming leads
- Access a protected admin dashboard

---

## Tech Stack

**Frontend**
- React
- Vite
- React Router
- Axios
- CSS

**Backend**
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt

**Deployment**
- Vercel
- Render

---

## Project Structure

```text
Beacon-CRM
├── client
├── server
└── README.md
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/saniyanoorain03/Beacon-CRM.git
```

Install dependencies:

```bash
cd client
npm install

cd ../server
npm install
```

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Start the backend:

```bash
npm start
```

Start the frontend:

```bash
npm run dev
```

---

## Screenshots

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/afb30840-2d0e-43e1-8592-f8cff0bc3474" />

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/57bf98cd-d49a-493a-bf5f-15bf1a3923f8" />

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/b020a011-df12-47f5-a614-58da1b05fe4f" />

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/0db49f63-aa00-4ac4-a861-b03ba67a25aa" />

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/e0a15a9b-d63a-4fbc-8be4-513a676e2f2a" />

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/746aace0-cc1b-4e79-8e53-950c8df16ffd" />

---

## Future Improvements

- Email notifications
- Search and filtering
- File attachments
- Analytics dashboard
- Calendar integration

---

## Author

**Saniya D**

GitHub: https://github.com/saniyanoorain03
