import React, { useState } from 'react';
import { LogIn, Lock, Mail, Eye, EyeOff, Key, Sparkles, ArrowRight } from 'lucide-react';
import './App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isKnocking, setIsKnocking] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleDoorClick = () => {
    if (isOpen) return;
    setIsKnocking(true);
    setShowRipple(true);

    setTimeout(() => {
      setShowRipple(false);
    }, 600);

    setTimeout(() => {
      setIsKnocking(false);
      setIsOpen(true);
    }, 350);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: isOpen ? '#008ee6' : '#040b06',
        backgroundImage: isOpen
          ? 'radial-gradient(circle at center, #118bee 0%, #005bb5 100%)'
          : 'radial-gradient(circle at center, #0a1f11 0%, #020804 100%)',
      }}
    >
      {/* Grid Lines Overlay */}
      <div
        className="grid-overlay"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, ${isOpen ? 0.25 : 0.08}) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, ${isOpen ? 0.25 : 0.08}) 1px, transparent 1px)
          `,
          opacity: 1,
        }}
      />

      {/* Green Moon Aura Glow */}
      <div className="moon-aura" style={{ opacity: isOpen ? 0 : 1 }} />

      {/* Top Status Pill */}
      <div
        className="status-pill"
        style={{
          marginBottom: '20px',
          backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.85)' : 'rgba(12, 30, 18, 0.85)',
          color: isOpen ? '#0077cc' : '#52d683',
          border: `1px solid ${isOpen ? 'rgba(0, 145, 255, 0.3)' : 'rgba(82, 214, 131, 0.3)'}`,
          boxShadow: isOpen ? '0 4px 15px rgba(0,0,0,0.08)' : '0 0 15px rgba(82, 214, 131, 0.2)',
        }}
      >
        <Key size={14} />
        {isOpen ? 'PINTU TERBUKA' : 'PINTU TERKUNCI'}
      </div>

      {/* Main 3D Door Arch Container */}
      <div
        className="door-frame"
        style={{
          borderColor: isOpen ? '#ffffff' : '#1b3a24',
          backgroundColor: isOpen ? '#ffffff' : '#08140c',
          boxShadow: isOpen
            ? '0 25px 50px -12px rgba(0, 119, 204, 0.35)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(45, 90, 55, 0.3)',
        }}
      >
        {/* Door Interior / Room */}
        <div className="door-interior">
          {/* Login Card inside Door */}
          <div
            className="login-card"
            style={{
              transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(20px)',
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? 'auto' : 'none',
            }}
          >
            {/* Close Button Inside Card */}
            <button
              onClick={handleClose}
              title="Tutup Pintu"
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: '#e0f2fe',
                color: '#0077cc',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>

            {/* Header */}
            <div style={{ textAlign: 'left', marginBottom: '18px' }}>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: '800',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  margin: 0,
                }}
              >
                <span style={{ color: '#0091ff' }}>|</span> MASUK
              </h2>
              <p style={{ fontSize: '11px', color: '#0077cc', margin: '4px 0 0 0', fontWeight: '500' }}>
                Silakan masukkan akun Anda
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Input Email */}
              <div style={{ marginBottom: '12px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '10px',
                    fontWeight: '700',
                    color: '#0077cc',
                    marginBottom: '4px',
                    letterSpacing: '0.5px',
                  }}
                >
                  EMAIL / USERNAME
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="nama@email.com"
                    style={{
                      width: '100%',
                      padding: '8px 32px 8px 30px',
                      borderRadius: '8px',
                      border: '1px solid #bae6fd',
                      backgroundColor: '#f8fafc',
                      fontSize: '12px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'all 0.2s',
                    }}
                  />
                  <Mail
                    size={14}
                    style={{ position: 'absolute', left: '10px', top: '10px', color: '#0077cc' }}
                  />
                </div>
              </div>

              {/* Input Password */}
              <div style={{ marginBottom: '12px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '10px',
                    fontWeight: '700',
                    color: '#0077cc',
                    marginBottom: '4px',
                    letterSpacing: '0.5px',
                  }}
                >
                  KATA SANDI
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="custom-input"
                    placeholder="••••••••"
                    style={{
                      width: '100%',
                      padding: '8px 32px 8px 30px',
                      borderRadius: '8px',
                      border: '1px solid #bae6fd',
                      backgroundColor: '#f8fafc',
                      fontSize: '12px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'all 0.2s',
                    }}
                  />
                  <Lock
                    size={14}
                    style={{ position: 'absolute', left: '10px', top: '10px', color: '#0077cc' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '8px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94a3b8',
                      padding: 0,
                    }}
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              {/* Checkbox & Forgot Password */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  fontSize: '10px',
                }}
              >
                <label style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#475569' }}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{ accentColor: '#0091ff' }}
                  />
                  Ingat Saya
                </label>
                <a href="#forgot" style={{ color: '#0091ff', textDecoration: 'none', fontWeight: '600' }}>
                  Lupa Kata Sandi?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'linear-gradient(to right, #0091ff, #0077cc)',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(0, 145, 255, 0.35)',
                }}
              >
                MASUK <ArrowRight size={14} />
              </button>

              {/* Back / Close Action Button */}
              <button
                type="button"
                onClick={handleClose}
                style={{
                  width: '100%',
                  marginTop: '8px',
                  padding: '6px',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  fontSize: '11px',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                ← Tutup Pintu
              </button>
            </form>
          </div>
        </div>

        {/* Outer Swinging 3D Door Panel */}
        <div
          className={`door-panel ${isKnocking ? 'vibrate-door' : ''}`}
          onClick={handleDoorClick}
          style={{
            cursor: isOpen ? 'default' : 'pointer',
            transform: isOpen ? 'rotateY(-115deg)' : 'rotateY(0deg)',
            backgroundColor: isOpen ? '#ffffff' : '#0c1a10',
            borderColor: isOpen ? '#0091ff' : '#2d5a37',
          }}
        >
          {/* Ripple Wave Effect on Knock */}
          {showRipple && (
            <div
              className="ripple-circle"
              style={{
                border: `2px solid ${isOpen ? '#0091ff' : '#52d683'}`,
              }}
            />
          )}

          {/* Upper Arch Panel Ornament */}
          <div
            style={{
              height: '110px',
              borderRadius: '120px 120px 8px 8px',
              border: `2px solid ${isOpen ? '#bae6fd' : '#1b3a24'}`,
              backgroundColor: isOpen ? '#f0f9ff' : '#060e08',
              transition: 'all 1.5s ease',
            }}
          />

          {/* Center Knock Button / Handle Row */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {!isOpen && (
              <div
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(82, 214, 131, 0.15)',
                  border: '1px solid #52d683',
                  color: '#52d683',
                  fontSize: '10px',
                  fontWeight: '800',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 0 12px rgba(82, 214, 131, 0.3)',
                }}
              >
                <Key size={12} /> KETUK PINTU UNTUK MASUK
              </div>
            )}

            {/* Handle Bar */}
            <div
              style={{
                position: 'absolute',
                right: '4px',
                width: '14px',
                height: '42px',
                borderRadius: '6px',
                backgroundColor: isOpen ? '#0091ff' : '#52d683',
                boxShadow: isOpen ? '0 0 10px #0091ff' : '0 0 10px #52d683',
                transition: 'all 1.5s ease',
              }}
            />
          </div>

          {/* Lower Rectangular Panel Ornament */}
          <div
            style={{
              height: '110px',
              borderRadius: '8px',
              border: `2px solid ${isOpen ? '#bae6fd' : '#1b3a24'}`,
              backgroundColor: isOpen ? '#f0f9ff' : '#060e08',
              transition: 'all 1.5s ease',
            }}
          />
        </div>
      </div>

      {/* Bottom Status Pill */}
      <div
        className="status-pill"
        style={{
          marginTop: '20px',
          backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.85)' : 'rgba(12, 30, 18, 0.85)',
          color: isOpen ? '#0077cc' : '#52d683',
          border: `1px solid ${isOpen ? 'rgba(0, 145, 255, 0.3)' : 'rgba(82, 214, 131, 0.3)'}`,
        }}
      >
        <Sparkles size={12} />
        {isOpen ? 'STATUS: Terbuka (Mode Biru Laut)' : 'STATUS: Terkunci (Mode Dark Hour)'}
      </div>
    </div>
  );
}