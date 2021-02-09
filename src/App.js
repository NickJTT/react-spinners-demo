import React from 'react';
import style from './App.module.css';
import { ClipLoader } from 'react-spinners';

export default function App() {
  // loading = { true }
  return (
    <div className = { style.app }>
      <ClipLoader loading color = 'blue' size = '64px'/>
    </div>
  );
}
