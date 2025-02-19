'use client';
import { useToastStore } from '@/store/tost';
import React from 'react';
import Toast from '../atom/tost';

const ToastTemplate = () => {
  const { isVisible } = useToastStore();

  return isVisible ? <Toast /> : null;
};

export default ToastTemplate;
