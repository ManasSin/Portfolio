"use server";

import { headers } from "next/headers";

function UserTime() {
  const userTime = headers().get("Sec-Fetch-Site");
  console.log(userTime);
  return userTime;
}

export default UserTime;
