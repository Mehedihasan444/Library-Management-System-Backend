# Library Management System

## Project Name & Description
The Library Management System is a backend application designed to manage the borrowing and returning of books in a library. It tracks borrowed books, calculates overdue days, and provides detailed information about borrowers and books.

## Live URL
[Live Deployment](https://library-management-system-backend-sigma.vercel.app/)

## Technology Stack & Packages
- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **Prisma**: ORM for database management
- **Zod**: Schema validation
- **TypeScript**: Typed superset of JavaScript
- **PostgreSQL**: Database

## Setup Instructions
1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-repo/library-management-system.git
   cd library-management-system
2. **Install dependencies:**:

   ```sh
   npm install
3. **Set up environment variables:** Create a .env file in the root directory and add the following:
   ```sh
   DATABASE_URL=your-database-url
   PORT=3000
4. **Run database migrations:**:

   ```sh
   npx prisma migrate dev

## Key Features & Functionality
- **Borrow a Book**: Allows users to borrow books and records the borrow date.
- **Return a Book**: Allows users to return books and records the return date.
- **Overdue Books**: Tracks books that are overdue and calculates the number of overdue days.
- **Detailed Information**: Provides detailed information about borrowed books and borrowers.

## Known Issues/Bugs
No known issues at the moment. Please report any issues [here](https://github.com/your-repo/library-management-system/issues).