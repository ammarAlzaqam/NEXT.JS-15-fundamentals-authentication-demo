import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
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
              <SignOutButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
