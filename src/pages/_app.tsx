import { AppProps } from 'next/app';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MyApp;
