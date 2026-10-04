import Container from "@/components/container/Container";
import ViewProduct from "@/components/viewProduct/ViewProduct";
import React from "react";
interface IProductProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: IProductProps) => {
  const { id } = await params;

  return (
    <Container>
      <ViewProduct id={id} />
    </Container>
  );
};

export default page;
