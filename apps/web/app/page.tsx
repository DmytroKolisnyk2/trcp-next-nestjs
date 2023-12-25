import ClientSide from "../components/ClientSide";
import { trpc } from "./trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `` });
  return (
    <div>
      {greeting}

      <ClientSide></ClientSide>
    </div>
  );
}
