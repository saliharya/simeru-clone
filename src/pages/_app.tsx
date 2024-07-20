import { AppProps } from 'next/app';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="mt-28 mb-28" style={{ zIndex: 10 }}> {/* Tambah margin dan z-index */}
            <Header />
            <Component {...pageProps} />
            <Footer />
        </main>
    );
}

export default MyApp;
