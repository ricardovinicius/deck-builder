import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const page = () => {
  return (
    <div className="flex flex-row justify-center">
      <section className="flex w-full max-w-[40vw]">
        <Input placeholder="Search decks..." size="lg" type="search" />
        <Button />
      </section>
    </div>
  );
};

export default page;
