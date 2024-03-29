import "@farcaster/auth-kit/styles.css";
import { AuthKitProvider, SignInButton, useProfile } from "@farcaster/auth-kit";
import DryRunButton from "./DryRunButton";
import styles from "./App.module.css";
import Header from "./components/Header";

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
    <main className={styles.root}>
      <Header />
      {/* Applying the black background */}
      <div className={styles.imageContainer}>
        <img src="/banner.jpg" alt="Banner" className={styles.bannerImage} />
        <div className={styles.textOverlay}>
          <h1 className="akaya text-white text-5xl md:text-6xl lg:text-8xl">
            Planet Keeper
          </h1>
          <p
            className={`${styles.whiteText} akaya text-lg md:text-xl lg:text-4xl`}
          >
            An app for our pollinators.
            <br /> Built with Arweave and ao.
          </p>
        </div>
      </div>
      <div style={{ paddingTop: "5vh", textAlign: "center" }}></div>
      <AuthKitProvider config={config}>
        <div
          style={{
            position: "fixed",
            top: "12px",
            right: "12px",
            backgroundColor: "#462A91",
            borderRadius: "8px",
          }}
        >
          <SignInButton />
        </div>
        <Profile />
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
    <div className="flex mt-10 mb-20 justify-center items-center ">
      {isAuthenticated ? (
        <div className="text-center">
          <p className={`${styles.whiteText} text-lg md:text-xl lg:text-2xl`}>
            Hello, {displayName}! Your FID is {fid}.
          </p>
          <div className={`${styles.whiteText} text-lg md:text-xl lg:text-2xl`}>
            Your custody address is: <pre>{custody}</pre>
          </div>
          <DryRunButton />
        </div>
      ) : (
        <p className={`${styles.whiteText} text-lg md:text-xl lg:text-2xl`}>
          Click the Farcaster "Sign in" button above, then scan the QR code to
          sign in. If you want
        </p>
      )}
    </div>
  );
}

export default App;
