import "@farcaster/auth-kit/styles.css";
import { AuthKitProvider, SignInButton, useProfile } from "@farcaster/auth-kit";
import DryRunButton from "./DryRunButton";
import styles from "./App.module.css"; // Importing the CSS module

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
    <main className={styles.app}>
      {" "}
      {/* Applying the black background */}
      <AuthKitProvider config={config}>
        <div style={{ position: "fixed", top: "12px", right: "12px" }}>
          <SignInButton />
        </div>
        <div className={styles.center}>
          <img
            src="/banner.jpg"
            alt="Banner"
            style={{ width: "75%", height: "auto", margin: "auto" }}
          />
        </div>
        <div style={{ paddingTop: "20vh", textAlign: "center" }}>
          <h1 className={styles.whiteText}>Planet Keeper</h1>
          <p className={styles.whiteText}>
            An app for our pollinators, utilizing Arweave, ao, and Farcaster.
          </p>
          <Profile />
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
          <p className={styles.whiteText}>
            Hello, {displayName}! Your FID is {fid}.
          </p>
          <p className={styles.whiteText}>
            Your custody address is: <pre>{custody}</pre>
          </p>
          <DryRunButton />
        </div>
      ) : (
        <p className={styles.whiteText}>
          Click the "Sign in with Farcaster" button above, then scan the QR code
          to sign in.
        </p>
      )}
    </>
  );
}

export default App;
