import "../styles/globals.css";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
