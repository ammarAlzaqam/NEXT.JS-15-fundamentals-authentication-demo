import { SignIn } from "@clerk/nextjs";

export default function SigninPage() {
  return (
    <div className="flex justify-center items-center py-8">
      <SignIn />
    </div>
  );
}
