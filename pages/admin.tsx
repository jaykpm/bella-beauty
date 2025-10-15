import { AdminPage } from "@/pages/AdminPage";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface AdminProps {
  isProduction: boolean;
}

export default function Admin({ isProduction }: AdminProps) {
  if (isProduction) {
    return (
      <>
        <Head>
          <title>Admin - Bella Beauty</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-6xl mb-4">🚫</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Admin Panel Not Available
            </h1>
            <p className="text-gray-600 mb-6">
              Content editing is only available in development mode for security reasons.
            </p>
            <div className="space-y-3 text-sm text-gray-500">
              <p>To make content changes:</p>
              <ol className="list-decimal list-inside space-y-1 text-left">
                <li>Run the project locally in development mode</li>
                <li>Make your content changes through the admin panel</li>
                <li>Commit and push your changes to Git</li>
                <li>Deploy the updated site</li>
              </ol>
            </div>
            <Link 
              href="/" 
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Back to Site
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin - Bella Beauty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AdminPage />
    </>
  );
}

// Allow admin in production if GitHub is configured
export const getServerSideProps: GetServerSideProps = async () => {
  const hasGitHubConfig = !!(
    process.env.GITHUB_TOKEN && 
    process.env.GITHUB_OWNER && 
    process.env.GITHUB_REPO
  );
  
  const isProduction = process.env.NODE_ENV === 'production';
  const adminEnabled = process.env.ENABLE_ADMIN === 'true' || hasGitHubConfig;
  
  if (isProduction && !adminEnabled) {
    return {
      props: {
        isProduction: true,
      },
    };
  }
  
  return { 
    props: {
      isProduction: false,
    } 
  };
};
