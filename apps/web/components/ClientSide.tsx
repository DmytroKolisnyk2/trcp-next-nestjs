"use client";

import { useEffect, useState } from "react";
import { trpc } from "../app/trpc";

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    trpc.hello.query({ name: `test data` }).then(({ greeting }) => setGreeting(greeting));
  }, []);
  return <p>Client side greeting: {greeting}</p>;
}
