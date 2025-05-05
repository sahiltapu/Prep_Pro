"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { MeteorsDemo } from "./MeteorsDemo";
import { UsedTexts } from "../../constants/index";
import Link from "next/link";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import FormField from "./FormField";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        console.log("SIGN UP", values);
      } else {
        console.log("SIGN IN", values);
      }
    } catch (error) {
      console.log(error);
      toast.error(`There is an error ${error}`);
    }
  }
  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-3 card py-7 px-10">
        <div className="flex flex-row gap-1 justify-center">
          <MeteorsDemo
            img={"/logo.png"}
            title={UsedTexts.Title}
            desc={UsedTexts.Description}
          />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name={"name"}
                label={"Name"}
                placeholder="Enter your name"
                type="text"
              />
            )}
            <p>Email</p>
            <p>Password</p>

            <Button type="submit" className="btn">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
            <p className="text-center">
              {isSignIn ? "No account yet?" : "Have an account already?"}
              <Link
                href={!isSignIn ? "/sign-in" : "/sign-up"}
                className="underline px-1"
              >
                {!isSignIn ? "Sign In" : "Sign Up"}
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
