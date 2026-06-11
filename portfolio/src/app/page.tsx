import clientEnv from "@/env/client";
import serverEnv from "@/env/server";

export default async function Home() {
  const data: any = await fetch("http://localhost:2000/api/Category", {
    method: "GET",
  }).then((res) => res.json());

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {data.data?.map((item: any) => <div key={item.id}>{item.name}</div>) ||
        "Loading..."}
    </div>
  );
}
