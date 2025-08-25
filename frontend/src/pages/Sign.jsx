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

const Sign = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <Tabs defaultValue="User" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-transparent">
            <TabsTrigger
              value="User"
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
              value="Doctor"
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

          <TabsContent value="User">
            <Card className="bg-transparent shadow-none border-none">
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
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
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

          <TabsContent value="Doctor">
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
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
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
