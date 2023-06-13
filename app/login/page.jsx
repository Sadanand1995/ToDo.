"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p>Or</p>
          <Link href={"/register"}>New User?</Link>
        </form>
      </section>
    </div>
  );
};

export const metadata = {
  title: "Login",
  description: "Todo App User Login Page Generated using Next.js",
};

export default page;
