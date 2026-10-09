import { createFileRoute } from "@tanstack/react-router";
import { BookElectrician } from "@/pages/BookElectrician";

export const Route = createFileRoute("/book-electrician")({
  component: BookElectrician,
});

