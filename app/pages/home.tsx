"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const hadleTeamChoice = (team: string) => {
    router.push(`/quiz?team=${team}`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center pt-9">Escolha quem vai começar!</h1>
      <div className="flex justify-center items-center mt-10 space-x-8">
        {/* Time azul botãozão */}
        <div onClick={() => hadleTeamChoice("blue")} className="bg-blue-500 w-[400px] h-[400px] flex justify-center items-center rounded-md text-white text-xl font-bold cursor-pointer hover:scale-110 transition-transform">
        </div>

        {/* Time vermelho botãozão */}
        <div onClick={() => hadleTeamChoice("red")} className="bg-red-500 w-[400px] h-[400px] flex justify-center items-center rounded-md text-white text-xl font-bold cursor-pointer hover:scale-110 transition-transform">
        </div>
      </div>
    </>
  );
}
