import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center p-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold py-3">Contact</h1>
          <p className="text-2xl font-bold text-center max-w-[50rem]">
            そんなものはない
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
