import Link from "next/link";

const AboutPage_Layout = ({ children }) => {
  return (
    <div>
      <div className="bg-slate-100 p-10 mb-6 border-l-8 border-green-500">
        <h5>About Layout</h5>
        <p>
          To change the <strong>About Layout</strong> go to{" "}
          <code className="text-green-600 underline underline-offset-2">
            ./src/components/Layouts/AboutLayout.jsx
          </code>
          .
        </p>
        <p className="my-3">Or</p>
        <p>
          You can create your own page layout by creating it in Layouts
          directory and attaching a <strong>Layout</strong> property to the
          components in pages directory. <br />
          Example in <strong>./src/pages/about/index.jsx</strong>
        </p>
      </div>
      <ui>
        <li>
          <Link href="/dashboard" passHref>
            <a className="text-blue-500 hover:underline">Go to Dashboard</a>
          </Link>
        </li>
      </ui>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default AboutPage_Layout;
