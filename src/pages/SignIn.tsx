import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Mail, Lock, Loader2, ArrowRight } from "lucide-react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}`,
        },
      });

      if (error) {
        toast.error(error.message);
      } else {
        setCodeSent(true);
        toast.success("Verification code sent to your email!");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: code,
        type: 'email',
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Successfully signed in!");
        navigate("/");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}`,
        },
      });

      if (error) {
        toast.error(error.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-matte-black via-matte-black/95 to-matte-black/90 p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/20 via-gold/10 to-ivory/5 z-0 opacity-30" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 bg-white/5 p-8 rounded-xl backdrop-blur-md border border-white/10 shadow-2xl relative z-10"
      >
        <div className="text-center space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gold"
          >
            Welcome to Julie's Luxe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-ivory/80"
          >
            {codeSent ? "Enter the verification code sent to your email" : "Sign in to your account"}
          </motion.p>
        </div>

        {!codeSent ? (
          <form onSubmit={handleSendCode} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-ivory">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ivory/40" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-white/5 border-white/10 text-ivory placeholder:text-ivory/30 focus:border-gold/50 focus:ring-gold/50"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-gold via-gold/90 to-gold hover:from-gold/90 hover:to-gold text-matte-black font-medium py-6"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Send Verification Code"
                )}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-matte-black text-ivory/60">Or continue with</span>
                </div>
              </div>

              <Button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full bg-white/5 hover:bg-white/10 text-ivory border border-white/10 py-6"
              >
                <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                Sign in with Google
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-ivory">Verification Code</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ivory/40" />
                <Input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  className="pl-10 bg-white/5 border-white/10 text-ivory placeholder:text-ivory/30 focus:border-gold/50 focus:ring-gold/50"
                  placeholder="Enter verification code"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-gold via-gold/90 to-gold hover:from-gold/90 hover:to-gold text-matte-black font-medium py-6"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Verify and Sign In"
              )}
            </Button>

            <button
              type="button"
              onClick={() => setCodeSent(false)}
              className="w-full text-ivory/60 hover:text-ivory text-sm"
            >
              Back to Email Input
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default SignIn;
