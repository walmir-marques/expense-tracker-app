"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const Hero = () => {
  const { isSignIn } = useUser();

  {
    isSignIn && redirect("/dashboard");
  }

  return (
    <section className="bg-gray-900 text-white flex items-center flex-col">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Gerencie Suas Despesas
            <span className="sm:block"> Controle seu Dinheiro. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Comece gerenciando o seu orçamento e salvando um monte de dinheiro.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/dashboard"
            >
              Entrar no App
            </a>
          </div>
        </div>
      </div>
      <Image
        src="/dashboard.png"
        width={1000}
        height={700}
        alt="dashboard"
        className="- mt-9 rounded-xl border-2"
      />
    </section>
  );
};
export default Hero;
