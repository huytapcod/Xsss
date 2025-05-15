import { useState } from 'react';
import { registerUser } from '../api/auth';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async ({ name, email, password, confirmPassword }) => {
    setError('');
    setSuccessMessage('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Email không hợp lệ');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return false;
    }

    setLoading(true);
    try {
      const data = await registerUser({ name, email, password, confirmPassword });
      if (data.success) {
        setSuccessMessage(data.message); // Ví dụ: "Đăng ký thành công"
        return true;
      } else {
        setError(data.message); // Ví dụ: "Tên người dùng đã tồn tại"
        return false;
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Đăng ký thất bại');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, successMessage, handleRegister };
};