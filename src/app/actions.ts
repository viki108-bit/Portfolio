
'use server';
import { z } from 'zod';

// This is a mock implementation. In a real app, you'd use a database.
let visitCount = Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500;

export async function getVisitCount() {
  visitCount++;
  return visitCount;
}

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    success: boolean;
};

export async function submitContactForm(
    prevState: ContactFormState, 
    formData: FormData
): Promise<ContactFormState> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }

  console.log('Contact form submitted:', validatedFields.data);

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    success: true,
  };
}
