# Public Post Hub

A full-stack CRUD web application built using React and Django REST Framework that allows users to create, edit, delete, and manage public posts through a clean and interactive interface.

---

## Features

* Create public posts
* Edit existing posts
* Delete posts
* View all posts dynamically
* Modal-based create/edit forms
* REST API integration
* SQLite database persistence
* React frontend with Axios API communication

---

## Tech Stack

### Frontend

* React
* Axios
* JavaScript
* CSS

### Backend

* Python
* Django
* Django REST Framework
* Django CORS Headers

### Database

* SQLite

---

## Project Workflow

1. User interacts with the React frontend.
2. Frontend sends API requests using Axios.
3. Django REST API processes CRUD operations.
4. Data is stored and retrieved from SQLite database.
5. Updated data is returned dynamically to the frontend.

---

## Folder Structure

```bash
public_post_hub/
│
├── backend/
├── frontend/
├── project_assets/
├── README.md
├── requirements.txt
└── .gitignore
```

---

## Installation & Setup

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r ../requirements.txt
python manage.py runserver
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## API Endpoints

| Endpoint           | Method | Description     |
| ------------------ | ------ | --------------- |
| `/api/posts/`      | GET    | Fetch all posts |
| `/api/posts/`      | POST   | Create new post |
| `/api/posts/<id>/` | PUT    | Edit post       |
| `/api/posts/<id>/` | DELETE | Delete post     |

---

## Screenshots

Project screenshots are available in:

```bash
project_assets/screenshots/
```

---

## Future Improvements

* User authentication
* Rich text editor
* Search and filtering
* Pagination
* Cloud deployment
* Image upload support

---

## Notes

* This project demonstrates CRUD operations, REST API integration, frontend-backend communication, and full-stack application architecture.
* Environment-specific files and dependencies are excluded from GitHub using `.gitignore`.

---

## Author

Developed as a full-stack CRUD application for learning frontend-backend integration and REST API development.
