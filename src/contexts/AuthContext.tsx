import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { Customer } from '../types';

interface AuthContextType {
  customer: Customer | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string, phone?: string) => Promise<{ success: boolean; error?: string }>;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const customerId = localStorage.getItem('customer_id');
      if (customerId) {
        const { data, error } = await supabase
          .from('customers')
          .select('*')
          .eq('id', customerId)
          .maybeSingle();

        if (data && !error) {
          setCustomer(data);
        } else {
          localStorage.removeItem('customer_id');
        }
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string, phone?: string) => {
    try {
      const { data: existingCustomer } = await supabase
        .from('customers')
        .select('id')
        .eq('email', email)
        .maybeSingle();

      if (existingCustomer) {
        return { success: false, error: 'Email already registered' };
      }

      const passwordHash = btoa(password);

      const { data, error } = await supabase
        .from('customers')
        .insert([{ email, password_hash: passwordHash, name, phone }])
        .select()
        .single();

      if (error) throw error;

      localStorage.setItem('customer_id', data.id);
      setCustomer(data);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const passwordHash = btoa(password);

      const { data, error } = await supabase
        .from('customers')
        .select('*')
        .eq('email', email)
        .eq('password_hash', passwordHash)
        .maybeSingle();

      if (error || !data) {
        return { success: false, error: 'Invalid email or password' };
      }

      localStorage.setItem('customer_id', data.id);
      setCustomer(data);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const signOut = async () => {
    localStorage.removeItem('customer_id');
    setCustomer(null);
  };

  return (
    <AuthContext.Provider
      value={{
        customer,
        loading,
        signUp,
        signIn,
        signOut,
        isAuthenticated: !!customer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
