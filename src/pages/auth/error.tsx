import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage() {
  const router = useRouter();
  const { error } = router.query;

  const getErrorMessage = (error: string) => {
    switch (error) {
      case "Configuration":
        return "There is a problem with the server configuration.";
      case "AccessDenied":
        return "You do not have permission to sign in.";
      case "Verification":
        return "The sign in link is no longer valid. It may have been used already or it may have expired.";
      default:
        return "An unexpected error occurred.";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-matte-black via-matte-black/95 to-matte-black/90 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white/5 p-8 rounded-xl backdrop-blur-md border border-white/10 shadow-2xl"
      >
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-ivory">Authentication Error</h1>
          <p className="text-ivory/80">
            {error ? getErrorMessage(error as string) : "An error occurred during authentication."}
          </p>
          <Button
            onClick={() => router.push("/auth/signin")}
            className="w-full bg-gradient-to-r from-gold via-gold/90 to-gold hover:from-gold/90 hover:to-gold text-matte-black font-medium py-6 mt-4"
          >
            Try Again
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
