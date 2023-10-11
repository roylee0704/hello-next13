import React from "react";

type Props = {
  id: string;
};

export default function Page({ id }: Props) {
  console.log(id);
  return <div>Movie Detail</div>;
}
