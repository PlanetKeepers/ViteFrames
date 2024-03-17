import "@farcaster/auth-kit/styles.css";
import { AuthKitProvider, SignInButton, useProfile } from "@farcaster/auth-kit";
import DryRunButton from "./DryRunButton";

const config = {
  // For a production app, replace this with an Optimism Mainnet
  // RPC URL from a provider like Alchemy or Infura.
  relay: "https://relay.farcaster.xyz",
  rpcUrl: "https://mainnet.optimism.io",
  domain: "planetkeepers.vercel.app",
  siweUri: "https://planetkeepers.vercel.app",
};

function App() {
  return (
    <main style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}>
      <AuthKitProvider config={config}>
        <div style={{ position: "fixed", top: "12px", right: "12px" }}>
          <SignInButton />
        </div>
        <div style={{ paddingTop: "20vh", textAlign: "center" }}>
          <h1>Planet Keeper</h1>
          <p>
            An app for our pollinators, utilizing Arweave, ao, and Farcaster.
          </p>
          <Profile />
          <DryRunButton />
        </div>
      </AuthKitProvider>
    </main>
  );
}

function Profile() {
  const profile = useProfile();
  const {
    isAuthenticated,
    profile: { fid, displayName, custody },
  } = profile;

  return (
    <>
      {isAuthenticated ? (
        <div>
          <p>
            Hello, {displayName}! Your FID is {fid}.
          </p>
          <p>
            Your custody address is: <pre>{custody}</pre>
          </p>
        </div>
      ) : (
        <p>
          Click the "Sign in with Farcaster" button above, then scan the QR code
          to sign in.
        </p>
      )}
    </>
  );
}

export default App;
