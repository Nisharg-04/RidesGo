# 🚗 RidesGo

A full-stack ride-sharing application built with modern web technologies, enabling users to book rides and drivers to accept ride requests with real-time tracking capabilities.

## 🌟 Features

### For Users
- 👤 User registration and authentication
- 📍 Real-time location-based ride booking
- 🚗 Multiple vehicle options (car, motorcycle, auto)
- 🔍 Live ride tracking
- 💰 Fare estimation
- 📱 Responsive mobile-first design

### For Drivers (Captains)
- 👨‍✈️ Driver registration with vehicle details
- 📳 Real-time ride request notifications
- ✅ Accept/decline ride requests
- 🗺️ GPS navigation integration
- 💼 Earnings tracking
- 📊 Driver dashboard

### Technical Features
- 🔄 Real-time communication with Socket.io
- 🗺️ Google Maps integration
- 🔐 JWT-based authentication
- 📱 Mobile-responsive UI with Tailwind CSS
- 🚀 Modern React with hooks and context
- 📊 MongoDB database with Mongoose ODM

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Fast build tool and development server
- **React Router Dom** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - High-performance animations
- **Google Maps API** - Maps and location services
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client for API requests
- **Remix Icons** - Beautiful icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Parse HTTP request cookies

## 📁 Project Structure

```
RidesGo/
├── backend/                    # Node.js backend server
│   ├── controllers/           # Request handlers
│   │   ├── captain.controller.js
│   │   ├── maps.controller.js
│   │   ├── ride.controller.js
│   │   └── user.controller.js
│   ├── models/               # Database schemas
│   │   ├── blacklistToken.modal.js
│   │   ├── captain.model.js
│   │   ├── ride.model.js
│   │   └── user.model.js
│   ├── routes/               # API routes
│   │   ├── captain.routes.js
│   │   ├── maps.routes.js
│   │   ├── ride.routes.js
│   │   └── user.routes.js
│   ├── services/             # Business logic
│   │   ├── captain.service.js
│   │   ├── maps.service.js
│   │   ├── ride.service.js
│   │   └── user.service.js
│   ├── middlewares/          # Custom middleware
│   │   └── auth.middleware.js
│   ├── db/                   # Database configuration
│   │   └── db.js
│   ├── app.js               # Express app configuration
│   ├── server.js            # Server entry point
│   └── socket.js            # Socket.io configuration
│
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── CaptainDetails.jsx
│   │   │   ├── ConfirmedVehicle.jsx
│   │   │   ├── ConfirmRidePopUp.jsx
│   │   │   ├── LiveTracking.jsx
│   │   │   ├── LocationSearchPanel.jsx
│   │   │   ├── LookingForDrivers.jsx
│   │   │   ├── RidePopUp.jsx
│   │   │   ├── Riding.jsx
│   │   │   ├── VehiclePanel.jsx
│   │   │   └── WaitingForDriver.jsx
│   │   ├── context/          # React context providers
│   │   │   ├── CaptainContext.jsx
│   │   │   ├── SocketContext.jsx
│   │   │   └── UserContext.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── CaptainHome.jsx
│   │   │   ├── CaptainLogin.jsx
│   │   │   ├── CaptainLogout.jsx
│   │   │   ├── CaptainProtectedWrapper.jsx
│   │   │   ├── CaptainRiding.jsx
│   │   │   ├── CaptainSignup.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Start.jsx
│   │   │   ├── UserLogin.jsx
│   │   │   ├── UserLogout.jsx
│   │   │   ├── UserProtectedWrapper.jsx
│   │   │   └── UserSignup.jsx
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # App entry point
│   ├── public/               # Static assets
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   └── tailwind.config.js   # Tailwind CSS configuration
│
├── .env                     # Environment variables
└── package.json            # Root dependencies
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas)
- **Google Maps API Key**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ridesgo.git
   cd ridesgo
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

6. **Start the application**
   
   **Backend** (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   
   **Frontend** (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

7. **Open your browser**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:4000`

## 🗺️ API Endpoints

### Authentication
- `POST /users/register` - User registration
- `POST /users/login` - User login
- `POST /users/logout` - User logout
- `POST /captains/register` - Captain registration
- `POST /captains/login` - Captain login
- `POST /captains/logout` - Captain logout

### Rides
- `POST /rides/create` - Create a new ride
- `GET /rides/:id` - Get ride details
- `POST /rides/confirm` - Confirm a ride
- `POST /rides/start-ride` - Start a ride
- `POST /rides/end-ride` - End a ride

### Maps
- `GET /maps/get-coordinates` - Get coordinates for an address
- `GET /maps/get-distance-time` - Calculate distance and time
- `GET /maps/get-suggestions` - Get location suggestions

## 📱 Key Features Explained

### Real-time Communication
The app uses Socket.io for real-time features:
- Live ride requests for drivers
- Real-time location updates
- Instant ride status notifications
- Live chat between users and drivers

### Authentication & Security
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes for both users and captains
- Token blacklisting for secure logout

### Location Services
- Google Maps integration for accurate locations
- Real-time GPS tracking
- Route optimization
- Distance and fare calculation

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Smooth animations with GSAP
- Modern UI components
- Cross-platform compatibility

## 🔧 Development

### Available Scripts

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (not implemented yet)

**Frontend:**
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure Guidelines
- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic
- **Models**: Define database schemas
- **Middlewares**: Handle authentication and validation
- **Routes**: Define API endpoints

## 🚀 Deployment

### Backend Deployment
1. Build the application
2. Set environment variables on your hosting platform
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- **Your Name** - *Initial work* - [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Google Maps API for location services
- Socket.io for real-time communication
- MongoDB for database services
- React and Node.js communities for excellent documentation

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact the development team.

---

**Made with ❤️ by the RidesGo Team**
