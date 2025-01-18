import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosAPI from './axios';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const hash = params.get('hash');

    if (!id || !hash) {
      setError('Invalid verification link.');
      setLoading(false);
      return;
    }

    // Make request to verify email
    AxiosAPI.get(`/email/verify/${id}/${hash}`)
      .then(response => {
        setLoading(false);
        // Handle success, maybe show a success message and redirect
        navigate('/dashboard'); // Redirect to a page after successful verification
      })
      .catch(error => {
        setLoading(false);
        if (error.response && error.response.status === 422) {
          // Handle validation errors or expired/invalid links
          setError('Verification link has expired or is invalid.');
        } else {
          // General error handling
          setError('Failed to verify email. Please try again.');
        }
        console.error('Verification failed:', error);
        // Optionally redirect to login if desired
        // navigate('/login');
      });
  }, [navigate]);

  return (
    <div>
      {loading && <p>Verifying your email...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default VerifyEmail;
