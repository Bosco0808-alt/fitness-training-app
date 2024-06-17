"use server";
import dotenv from "dotenv";
dotenv.config();

import prisma from "@/lib/prisma";

import { pbkdf2Sync } from "crypto";
import { cookies } from "next/headers";
const cookie = cookies();

export async function signUp(username: string, password: string) {
  if (username.length < 3) {
    return "USERNAME_LENGTH_SHORT";
  }
  if (password.length < 3) {
    return "PASSWORD_LENGTH_SHORT";
  }

  const hash = pbkdf2Sync(
    password,
    process.env.SALT || "testsalt",
    100000,
    512,
    "sha512"
  ).toString("hex");

  const user = await prisma.users.create({
    data: {
      username,
      password: hash,
    },
  });

  cookie.set({
    name: "username",
    value: username,
    maxAge: 604800,
  });
  cookie.set({
    name: "token",
    value: hash,
    maxAge: 604800,
  });

  return "SUCCESS";
}
