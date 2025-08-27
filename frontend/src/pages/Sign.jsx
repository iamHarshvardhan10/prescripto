// import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ACCOUNT_TYPE } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setError, setLoading, setUser } from "@/redux/userSlice/userSlice";
import { AUTH_API } from "@/utils/apis";

const Sign = () => {
  const [account_type, setAccount_type] = useState(ACCOUNT_TYPE.user);
  // console.log("ACCOUNT_TYPE :- ", account_type);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
  });

  const handleOnChange = (e) => {
    console.log(e);
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };
  console.log(formData);

  const handleSumbit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password must be same!");
      return;
    }

    const registerData = {
      ...formData,
      account_type,
    };
    console.log(registerData);

    dispatch(setUser(registerData));
    try {
      const res = await fetch(AUTH_API.SEND_OTP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      // console.log(res);
      const data = await res.json();
      console.log("res", data);
      if (!res.ok) {
        dispatch(setError(data.message));
        console.log(data.message);
      }
      console.log(data);
      navigate("/verify-otp");
      toast.success("OTP SENT SUCCESSFULLY");
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <Tabs
          value={account_type}
          onValueChange={(val) => setAccount_type(val)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-transparent">
            <TabsTrigger
              value={ACCOUNT_TYPE.user}
              className="relative px-4 py-2 text-sm font-medium text-gray-600
               transition-all hover:text-blue-600
               data-[state=active]:text-blue-600
               data-[state=active]:font-semibold
               after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
               after:bg-blue-600 after:scale-x-0 
               data-[state=active]:after:scale-x-100 
               after:transition-transform after:duration-300"
            >
              User
            </TabsTrigger>
            <TabsTrigger
              value={ACCOUNT_TYPE.doctor}
              className="relative px-4 py-2 text-sm font-medium text-gray-600
               transition-all hover:text-blue-600
               data-[state=active]:text-blue-600
               data-[state=active]:font-semibold
               after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
               after:bg-blue-600 after:scale-x-0 
               data-[state=active]:after:scale-x-100 
               after:transition-transform after:duration-300"
            >
              Doctor
            </TabsTrigger>
          </TabsList>

          <TabsContent value={ACCOUNT_TYPE.user}>
            <Card className="bg-transparent shadow-none border-none">
              <form action="" onSubmit={handleSumbit}>
                <CardHeader>
                  <CardTitle className="text-center text-xl font-semibold text-blue-700">
                    Register As New User!
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleOnChange}
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleOnChange}
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleOnChange}
                      placeholder="johndoe@example.com"
                      className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleOnChange}
                        placeholder="********"
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleOnChange}
                        placeholder="********"
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone_number">Phone Number</Label>
                    <Input
                      id="phone_number"
                      value={formData.phone_number}
                      onChange={handleOnChange}
                      type="tel"
                      placeholder="+91 9876543210"
                      className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition-all">
                    Submit
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value={ACCOUNT_TYPE.doctor}>
            <Card className="bg-transparent shadow-none border-none">
              <CardHeader>
                <CardTitle className="text-center text-xl font-semibold text-blue-700">
                  Be A Member of our Easy to prescribe
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="********"
                      className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="********"
                      className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone_number">Phone Number</Label>
                  <Input
                    id="phone_number"
                    type="tel"
                    placeholder="+91 9876543210"
                    className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition-all">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Sign;
