import React, { useState, useEffect } from "react";

export default function Hero() {
  const quotes = [
    {
      text: "کوم قام ته چې خپله ژبه سپکه شي هغه قام سپک شي، او کم قام نه چې خپله ژبه ورکه شي هغه قام ورک شي ",
      author: "خان عبدالغفار خان - باچا خان",
    },
    {
      text: "كه ته يو چا سره په داسې ژبه كښې خبرې كوې چې هغه پرې پوهېږي، هغه د دهغه سر ته كوزېږي. او كه ته هغه سره د هغه په ژبه كښې خبرې وكړې نو هغه به د هغه زړه ته كوزېږي",
      author: "نېلسن منډېلا",
    },
    {
      text: "زه نه شرمیږم چې تاسو ته په خپله مورنۍ ژبه ځواب ورکړم، که څه هم نیمګړی وي، او خوښ یم چې وتوانیدم چې دا وښیم چې زما پلرنی ټاټوبی زما لپاره تر بل هر څه ډیر ارزښت لري",
      author: "(Bedrich Smetana) بیدریچ سمیتانا",
    },
    {
      text: "If the English educated neglect, as they have done and even now continue, as some do, to be ignorant of their mother tongue, linguistic starvation will abide",
      author: "Mahathma Gandhi",
    },
  ];

  const [quote, setQuote] = useState({});

  useEffect(() => {
    generateQuote();
  }, []); // Empty dependency array means this effect runs only once on component mount

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            {quote.text && (
              <h1 className="rtl font-Kapisa text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:leading-tight">
                "{quote.text}"
              </h1>
            )}

            <p className="mt-16 text-lg font-AGT leading-8 text-left text-gray-400">
              {quote.author}
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
