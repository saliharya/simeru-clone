import { AppProps } from 'next/app';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 mt-28 mb-16"> {/* Flex-grow to take remaining space */}
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MyApp;
