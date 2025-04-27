# HumanChain AI Safety Incident Log API

This project is a simple RESTful API service designed to log and manage hypothetical AI safety incidents, built for the Backend Intern Take-Home Assignment for HumanChain AI Safety Startup.

---

## 🚀 Tech Stack

- **Language**: JavaScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (using Mongoose ODM)

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Narasimhagupta2004/Home_Assignment.git
cd Home_Assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas or local MongoDB connection string.

---

### 4. Run the server

Since your main file is `server.js`, run:

```bash
node server.js
```

The server will run on `http://localhost:5000/`

---

## 🛠️ Database Setup

- No manual schema setup required.  
- The **Incident** model will automatically create the `incidents` collection in MongoDB.
- To pre-populate the database, you can manually create a few incidents using the **POST /incidents** endpoint (instructions below).

---

## 📚 API Endpoints

All API endpoints use **JSON** for both requests and responses.

### 1. Get all incidents

- **Endpoint**: `GET /incidents`
- **Description**: Retrieve all incidents.
- **Response**: 200 OK

```bash
curl -X GET http://localhost:5000/incidents
```

---

### 2. Create a new incident

- **Endpoint**: `POST /incidents`
- **Description**: Log a new AI safety incident.
- **Request Body**:

```json
{
  "title": "New Incident Title",
  "description": "Detailed description here.",
  "severity": "Medium"
}
```

- **Response**: 201 Created

```bash
curl -X POST http://localhost:5000/incidents \
-H "Content-Type: application/json" \
-d '{"title":"New Incident","description":"Description here","severity":"High"}'
```

---

### 3. Get incident by ID

- **Endpoint**: `GET /incidents/{id}`
- **Description**: Retrieve a specific incident by its ID.
- **Response**: 200 OK or 404 Not Found

```bash
curl -X GET http://localhost:5000/incidents/your_incident_id
```

---

### 4. Delete incident by ID

- **Endpoint**: `DELETE /incidents/{id}`
- **Description**: Delete a specific incident.
- **Response**: 200 OK (with confirmation) or 404 Not Found

```bash
curl -X DELETE http://localhost:5000/incidents/your_incident_id
```

---

## ⚙️ Validation and Error Handling

- Validates that:
  - `title`, `description`, and `severity` are provided during creation.
  - `severity` must be one of: `"Low"`, `"Medium"`, `"High"`.
  - ObjectId is validated for `GET` and `DELETE` endpoints.
- Handles:
  - 400 Bad Request for invalid inputs
  - 404 Not Found if incident does not exist
  - 500 Internal Server Error for unexpected issues

---

## 🧐 Design Decisions

- **Mongoose ODM** is used for easy MongoDB schema management.
- **Environment Variables** are used for flexible configuration.
- **Error handling** is implemented properly to avoid server crashes and give meaningful responses.
- API follows **REST principles** with clear request/response formats.

---

## ✨ Sample Data (Optional)

You can use the following sample incident data to quickly create entries:

```json
{
  "title": "Autonomous car failure",
  "description": "AI car failed to detect a pedestrian.",
  "severity": "High"
}
```
```json
{
  "title": "Bias in hiring algorithm",
  "description": "Recruitment AI favored certain demographics unfairly.",
  "severity": "Medium"
}
```

---

## 📞 Contact

If you have any questions, feel free to reach out.
email : narasimhagupta2004@gmail.com
---

# ✅ Done!

