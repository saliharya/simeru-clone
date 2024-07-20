import { AppProps } from 'next/app';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="min-h-screen mt-28 mb-28" style={{ zIndex: 10 }}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </main>
    );
}

export default MyApp;
