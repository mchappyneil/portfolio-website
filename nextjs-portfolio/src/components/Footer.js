// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="p-4 text-center border-t mt-8 dark:border-gray-700">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            LinkedIn
          </a>
        </div>
      </footer>
    );
  }
  