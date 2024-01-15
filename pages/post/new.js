import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout";

export default function NewPost(props) {
  console.log(props);

  const handleClick = async () => {
    const response = await fetch(`/api/generatePost`, {
      method: "POST",
      // headers: {
      //   "content-type": "application/json",
      // },
    });

    const json = await response.json();
    console.log(json);
  };
  return (
    <div>
      <h1>new page</h1>
      <button className="btn" onClick={handleClick}>
        {" "}
        Generate
      </button>
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
