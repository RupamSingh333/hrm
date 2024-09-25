import dbConnect from '@/utils/db';  // Adjust the path if necessary
import User from '@/models/users';   // Adjust the path if necessary
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing and comparison

// Default export for handling the requests
export default async function handler(req, res) {
    await dbConnect(); // Ensure the database is connected

    switch (req.method) {
        case 'GET':
            return await GET(req, res);
        case 'POST':
            const action = req.query.action || 'register';
            if (action === 'register') {
                return await register(req, res);  // Register the user
            } else if (action === 'login') {
                return await login(req, res);  // Login the user
            }
            return res.status(400).json({ message: 'Invalid action' });
        default:
            return res.status(405).json({ message: 'Method not allowed' });
    }
}

// Named export for POST request (User Registration)
async function register(req, res) {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newUser = new User({
            name,
            email,
            password: hashedPassword, // Save hashed password
        });

        // Save the user to the database
        await newUser.save();

        // Respond with the created user
        return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating user', error });
    }
}

// Named export for POST request (User Login)
async function login(req, res) {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Login successful (you can issue a token here if needed)
        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error logging in', error });
    }
}

// Named export for GET request
async function GET(req, res) {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to fetch users', error });
    }
}




