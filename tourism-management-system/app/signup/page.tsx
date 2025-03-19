"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './signup.module.css';
import axios from 'axios';


const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Clear previous errors
    setError('');
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the Terms & Conditions");
      return;
    }

    try {
      setIsLoading(true);
      
      // Call the backend API to register the user
      const response = await axios.post(`${API_URL}/signup`, {
        fullName,
        email,
        password
      });

      // Handle successful signup
      console.log('Signup successful:', response.data);
      
      // Store the JWT token in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        
        // Store basic user info
        localStorage.setItem('user', JSON.stringify({
          id: response.data.user.id,
          fullName: response.data.user.fullName,
          email: response.data.user.email
        }));
      }
      
      // Redirect to dashboard or home page
      router.push('/destination');
      
    } catch (err) {
      // Handle signup error
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Registration failed');
      } else {
        setError('An error occurred during signup. Please try again.');
      }
      console.error('Signup error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', { callbackUrl: '/dashboard' });
    } catch (err) {
      console.error('Google sign in error:', err);
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  return (
    <>
      <div className={styles.signupContainer}>
        <div className={styles.signupCard}>
          <div className={styles.signupFormContainer}>
            <div className={styles.logoContainer}>
              <Image
                src="/images/logo.png"
                alt="Bon Voyage Logo"
                width={100}
                height={100}
                className={styles.logo}
              />
              <h1>We are Bon Voyage Team</h1>
            </div>
           
            <form onSubmit={handleSubmit}>
              <p className={styles.signupInstruction}>Create your free account</p>
              
              {error && <div className={styles.errorMessage}>{error}</div>}
             
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
             
              <div className={`${styles.inputGroup} ${styles.passwordGroup}`}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "🔒"}
                </button>
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className={styles.termsCheckbox}>
                <label>
                  <input 
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                    required
                    disabled={isLoading}
                  />
                  <span>I agree to the <Link href="/terms">Terms & Conditions</Link></span>
                </label>
              </div>
             
              <button 
                type="submit" 
                className={styles.signupButton}
                disabled={isLoading}
              >
                {isLoading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
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
                <span className={styles.googleButtonText}>Sign up with Google</span>
              </button>
             
              <div className={styles.loginAccount}>
                <p>Already have an account?</p>
                <Link href="/login" className={styles.loginButton}>LOG IN</Link>
              </div>
            </form>
          </div>
         
          <div className={styles.gradientContainer}>
            <h2>Join Us for Amazing Travel Adventures</h2>
            <p>
              ✈️ Create an account today and discover personalized travel packages that match your preferences, budget, and dream destinations.
            </p>
            <ul className={styles.benefitsList}>
              <li>🌟 Exclusive deals for members</li>
              <li>🔔 Travel alerts for your favorite destinations</li>
              <li>💼 Store your travel preferences</li>
              <li>📱 Manage bookings on any device</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;