import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ShoppingBag } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import HeroImage from "../HeroImage";
import { Link, useNavigate } from "react-router-dom";

const registerSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    await axios
      .post("http://localhost:8080/api/v1/auth/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        toast.success(`Welcome ${response.data.firstName}!`);
        navigate("/home");
      })
      .catch((error) => {
        const backendMessage =
          error.response?.data?.error || error.response?.data?.message;
        toast.error(backendMessage || "Registration failed. Please try again.");
      });
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-xl space-y-8 shadow-lg p-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-tight">Forme</span>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-none">
            <CardHeader className="space-y-3 pb-6">
              <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
                Create Account
              </CardTitle>
              <CardDescription className="text-base text-gray-600">
                Join us to discover your perfect style
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className={`h-12 border-gray-200 focus:border-black focus:ring-0 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className={`h-12 pr-10 border-gray-200 focus:border-black focus:ring-0 ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-black hover:opacity-85 cursor-pointer text-white font-medium text-base transition-all duration-200 mt-6"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Logging in...
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pt-4">
              {/* Login Link */}
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-black hover:underline"
                >
                  Register here
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <HeroImage />
    </div>
  );
};

export default Login;
