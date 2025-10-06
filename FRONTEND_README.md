# 🔐 AuthApp - React + Vite Frontend

A modern, themeable authentication UI built with React, Vite, and TypeScript that integrates seamlessly with FastAPI backends.

## ✨ Features

- 🎨 **Beautiful UI** - Modern SaaS-inspired design with smooth animations
- 🔒 **Secure Auth** - JWT-based authentication with localStorage persistence
- 📧 **Email Verification** - Complete email verification flow
- 🛡️ **Protected Routes** - Route guards for authenticated pages
- 🎯 **Context API** - Clean authentication state management
- 🌈 **Themeable** - Centralized design system with HSL colors
- 📱 **Responsive** - Mobile-first design that works everywhere

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Backend API running (FastAPI)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your backend URL:**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=http://localhost:8000/api/v1
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:8080
   ```

## 📁 Project Structure

```
src/
├── api/
│   └── authApi.ts          # API integration layer
├── context/
│   └── AuthContext.tsx     # Authentication state management
├── components/
│   ├── LoginForm.tsx       # Login form component
│   ├── RegisterForm.tsx    # Registration form
│   ├── VerifyEmail.tsx     # Email verification handler
│   ├── Navbar.tsx          # Navigation with auth state
│   └── ProtectedRoute.tsx  # Route guard component
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── Login.tsx          # Login page
│   ├── Register.tsx       # Registration page
│   └── Dashboard.tsx      # Protected dashboard
├── config/
│   └── theme.ts           # Theme configuration
└── index.css              # Design system tokens
```

## 🎨 Design System

All styles are managed through a centralized design system using CSS custom properties (HSL colors):

### Colors
- **Primary**: Modern blue (`hsl(207 90% 54%)`)
- **Accent**: Warm orange (`hsl(24 95% 53%)`)
- **Semantic tokens**: Background, foreground, muted, etc.

### Customization

Edit `src/index.css` to modify:
- Color schemes (light & dark mode)
- Gradients and shadows
- Border radius and spacing
- Transitions and animations

Edit `src/config/theme.ts` to modify:
- Font family
- API configuration
- Shadow utilities

## 🔌 Backend Integration

The app expects these API endpoints:

| Action | Method | Endpoint | Body | Response |
|--------|--------|----------|------|----------|
| Register | POST | `/auth/register` | `{name, email, password}` | `{message}` |
| Verify | GET | `/auth/verify/:token` | - | `{message}` |
| Login | POST | `/auth/login` | `{email, password}` | `{access_token, user}` |
| Logout | POST | `/auth/logout` | - | `{message}` |
| Get User | GET | `/auth/me` | - | `{user}` |

### Authentication Flow

1. User registers → verification email sent
2. User clicks verification link → email verified
3. User logs in → JWT token stored in localStorage
4. Token automatically included in authenticated requests
5. Protected routes check auth state via Context

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Security Features

- JWT token management
- Protected route guards
- Automatic token refresh handling
- Secure localStorage token storage
- Input validation on all forms
- Error handling and user feedback

## 🎯 Key Components

### AuthContext
Manages authentication state and provides:
- `user` - Current user object
- `isAuthenticated` - Boolean auth status
- `login(email, password)` - Login method
- `register(name, email, password)` - Registration method
- `logout()` - Logout method
- `getUser()` - Fetch current user

### ProtectedRoute
Wraps routes that require authentication:
```tsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing
- **Sonner** - Toast notifications
- **Lucide React** - Icons

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains your production-ready files

3. Deploy to your preferred hosting:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - Any static hosting service

4. Update environment variables in your hosting platform

## 🤝 Integration Tips

- Set `VITE_API_BASE_URL` to your backend URL
- Ensure CORS is configured on your backend
- Backend must return JWT token on successful login
- User object should include `{id, email, name}`
- Error responses should include `{error: "message"}`

## 📝 License

MIT License - feel free to use this in your projects!

---

Built with ❤️ using React, Vite, and TypeScript
