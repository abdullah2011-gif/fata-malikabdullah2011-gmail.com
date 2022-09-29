import { useRouter } from "next/router";

const UserByID = () => {
  // router
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
};

export default UserByID;
