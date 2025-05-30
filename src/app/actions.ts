'use server';

import { sendContactEmail, EmailData } from '@/lib/email';

export async function submitContactForm(data: EmailData) {
  try {
    const result = await sendContactEmail(data);
    return result;
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    return { success: false, error: 'Failed to process form submission' };
  }
} 