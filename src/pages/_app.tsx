import { AppProps } from 'next/app';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SessionProvider } from 'next-auth/react';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 mt-28 mb-16">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </SessionProvider>
    );
}

export default MyApp;
