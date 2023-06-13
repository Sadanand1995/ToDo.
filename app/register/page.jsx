"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">SignUp</button>
          <p>Or</p>
          <Link href={"/login"}>Already have an account?</Link>
        </form>
      </section>
    </div>
  );
};

export const metadata = {
  title: "Register",
  description: "Todo App User Registeration Page Generated using Next.js",
};

export default page;
