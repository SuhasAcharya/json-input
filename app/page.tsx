import Image from "next/image";
import Input from "./components/input";
import Query from "./components/query";
import Request from "./components/request";
import Response from "./components/response";

export default function Home() {
  return (
    <div className="">
      <Input />
      <Query />
      <Request />
      <Response />
    </div>
  );
}
