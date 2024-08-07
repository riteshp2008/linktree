import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex my-20 justify-center mx-auto">
      <SignUp path="/sign-up" />
    </div>
  );
}
