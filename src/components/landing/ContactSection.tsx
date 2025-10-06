'use client';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { AnimatedSection } from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Send } from 'lucide-react';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full sm:w-auto">
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                </>
            ) : (
                <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                </>
            )}
        </Button>
    );
}

export function ContactSection() {
    const { toast } = useToast();
    const initialState: ContactFormState = { message: '', success: false };
    const [state, formAction] = useFormState(submitContactForm, initialState);

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.success ? "Success!" : "Error",
                description: state.message,
                variant: state.success ? "default" : "destructive",
            });
        }
    }, [state, toast]);

    return (
        <AnimatedSection id="contact">
            <div className="text-center">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Get in Touch</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Have a question or want to work together? Feel free to reach out.
                </p>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
                <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your Name" required />
                        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="Your Email" required />
                        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="Your Message" rows={5} required />
                        {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(', ')}</p>}
                    </div>
                    <div className="text-right">
                       <SubmitButton />
                    </div>
                </form>
            </div>
        </AnimatedSection>
    );
}
