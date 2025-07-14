import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
              Next.js App
            </h1>
          </div>
          <div className="flex gap-5">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/admin">Admin</Link>
          </div>
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="user-profile">Profile</Link>
              <SignOutButton>
                <button className="cursor-pointer">Sign out</button>
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="px-2 py-1 border border-gray-700 cursor-pointer hover:bg-neutral-700 transition">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-2 py-1 border border-gray-700 cursor-pointer hover:bg-neutral-700 transition">
                  Sign up
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
