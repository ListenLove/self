import network from "@/assets/api/network";

export const getDescription = () => {
  return network.get("/description")
}
