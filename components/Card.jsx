import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Card({ title, link }) {
  const router = useRouter();
  return (
    <div className="" onClick={() => router.push(link)}>
      <h2>{title}</h2>
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
        style={{
          borderRadius: "1rem",
        }}
      />
    </div>
  );
}

export default Card;
