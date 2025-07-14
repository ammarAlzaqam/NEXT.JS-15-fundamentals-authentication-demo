import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "./actions";

export default async function Admin() {
  const actionButtonStyle =
    "px-2 py-1 text-white border border-gray-700 cursor-pointer hover:bg-neutral-700 transition";

  const client = await clerkClient();

  const users = (await client.users.getUserList()).data;

  return (
    <>
      {users.map((user) => {
        console.log(user);
        return (
          <section
            key={user.id}
            className={`flex gap-4 px-6 py-3 justify-between items-center text-white
        ${users.indexOf(user) % 2 === 0 ? "bg-neutral-800" : "bg-neutral-900"}
        `}
          >
            <div className="flex gap-10">
              <p>
                {
                  user.emailAddresses.find(
                    (email) => email.id === user.primaryEmailAddressId
                  )?.emailAddress
                }
              </p>
              <p>{user.publicMetadata.role as string}</p>
            </div>
            <div className="flex gap-2 items-center">
              <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="admin" />
                <button type="submit" className={`${actionButtonStyle}`}>
                  Make Admin
                </button>
              </form>
              <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="moderator" />
                <button type="submit" className={actionButtonStyle}>
                  Make Moderator
                </button>
              </form>
              <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <button type="submit" className={actionButtonStyle}>
                  Remove Role
                </button>
              </form>
            </div>
          </section>
        );
      })}
    </>
  );
}
