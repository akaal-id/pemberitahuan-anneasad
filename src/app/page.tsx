import { HomeClient } from "@/components/HomeClient";

interface PageProps {
  searchParams: {
    to?: string;
  };
}

export default function Home({ searchParams }: PageProps) {
  const guestName = searchParams.to || "Bapak/Ibu/Saudara/i";
  
  return <HomeClient guestName={guestName} />;
}
