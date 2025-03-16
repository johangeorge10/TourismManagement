"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
// require('dotenv').config({ path: '../../.env' });

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Use the email field instead of username for the API call
      const backend_url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${backend_url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
        credentials: 'include'
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Store the token in localStorage
      localStorage.setItem('token', data.token);
      
      // Redirect to dashboard or home page
      router.push('/dashboard');
    } catch (err) {
      // setError(err.message || 'An error occurred during login');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', { callbackUrl: '/dashboard' });
    } catch (err) {
      setError('Google sign-in failed. Please try again.');
      console.error('Google sign-in error:', err);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Login form */}
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginFormContainer}>
            <div className={styles.logoContainer}>
              <Image
                src="/images/logo.png"
                alt="Bon Voyage Logo"
                width={120}
                height={120}
                className={styles.logo}
              />
              <h1>We are Bon Voyage Team</h1>
            </div>
           
            <form onSubmit={handleSubmit}>
              <p className={styles.loginInstruction}>Please login to your account</p>
              
              {error && <p className={styles.errorMessage}>{error}</p>}
             
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
             
              <div className={`${styles.inputGroup} ${styles.passwordGroup}`}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "🔒"}
                </button>
              </div>
             
              <button 
                type="submit" 
                className={styles.loginButton}
                disabled={isLoading}
              >
                {isLoading ? "LOGGING IN..." : "LOG IN"}
              </button>
              
              <div className={styles.orDivider}>
                <span>OR</span>
              </div>
              
              <button 
                type="button" 
                className={styles.googleButton} 
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                <div className={styles.googleIconWrapper}>
                  <Image 
                    src="/images/glogo.svg" 
                    alt="Google logo" 
                    width={18} 
                    height={18} 
                    className={styles.googleIcon} 
                  />
                </div>
                <span className={styles.googleButtonText}>Sign in with Google</span>
              </button>
             
              <p className={styles.forgotPassword}>
                <Link href="/forgot-password">Forgot password?</Link>
              </p>
             
              <div className={styles.createAccount}>
                <p>Don't have an account?</p>
                <Link href="/signup" className={styles.createButton}>CREATE NEW</Link>
              </div>
            </form>
          </div>
         
          <div className={styles.gradientContainer}>
            <h2>Crafting Unforgettable Journeys, Tailored Just for You</h2>
            <p>
              🌍 Helping you find the best and most affordable travel packages, curated to deliver incredible experiences based on your unique preferences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;