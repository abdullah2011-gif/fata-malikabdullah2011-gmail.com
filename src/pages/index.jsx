import Spinner from "components/Spinner/Spinner";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Grid } from "@mui/material";
import img from "../../public/images/landing.png";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/");
  //   router.push("/landing");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <Link href="/landing">
        <a className="text-blue-500 hover:underline">
          <Button size="large" variant="contained" className="btn">
            🎉 Create Event
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default Home;
