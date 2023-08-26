import React, { useState } from 'react';

const PasswordPrompt = ({ correctPassword, onSuccess }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === correctPassword) {
            onSuccess();
        } else {
            setError(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-6 bg-white rounded shadow-md w-96">
                <h2 className="text-2xl mb-4 text-center">Enter Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter password"
                        className="w-full p-2 border rounded"
                    />
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
                {error && <p className="mt-4 text-red-500 text-center">Incorrect password!</p>}
            </div>
        </div>
    );
};

export default PasswordPrompt;
