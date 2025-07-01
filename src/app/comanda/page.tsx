'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/motionVariants/motionVariants';
import { EmailSchema } from '@/lib/schemas';
import PageWrapper from '@/components/utils/PageWrapper';
import img from '@/../public/vercel.svg';
import Image from 'next/image';

const Page = () => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  //   const sendMessage = async () => {
  //     if (!email || !content) {
  //       setStatus('Fill in all fields!');
  //       return;
  //     }

  //     const validation = EmailSchema.safeParse({ email });
  //     if (!validation.success) {
  //       setStatus(validation.error.errors[0].message); // shows 'Invalid email address'
  //       return;
  //     }

  //     try {
  //       const res = await fetch('/api/chats', {
  //         method: 'POST',
  //         body: JSON.stringify({ email, content }),
  //         headers: { 'Content-Type': 'application/json' },
  //       });

  //       const data = await res.json();
  //       if (res.ok) {
  //         setStatus('Mesajul s-a trimis cu succes!');
  //         setEmail('');
  //         setContent('');
  //       } else {
  //         setStatus(data.error || 'Ceva nu a mers bine!');
  //       }
  //     } catch (error) {
  //       setStatus(`Failed to send message: ${error}`);
  //     }
  //   };

  return (
    <PageWrapper>
      <div className="flex justify-around items-center w-full">
        <section className="flex flex-col justify-center items-start gap-2 min-h-[600px] h-[87dvh] mx-auto px-32P text-start">
          <h2 className="text-3xl font-bold mb-6">Ce comanzi</h2>
          <ul>
            <li className="underline">
              <div className="flex justify-around items-center gap-10">
                <Image
                  className="w-10 h-10 bg-black z-50 rounded-full"
                  src={img}
                  alt="img"
                />
                <h3>Nimic nu ai comandat momentan</h3>
                <p>
                  Pret <span>20 + 20 = 40</span> lei
                </p>
              </div>
            </li>
            <hr className="bg-gray-400 h-1 w-full my-[1rem]" />
            <li className="underline">
              <div className="flex justify-around items-center gap-10">
                <Image
                  className="w-10 h-10 bg-black z-50 rounded-full"
                  src={img}
                  alt="img"
                />
                <h3>Nimic nu ai comandat momentan</h3>
                <p>
                  Pret <span>20 + 20 = 40</span> lei
                </p>
              </div>
            </li>
            <hr className="bg-gray-400 h-1 w-full my-[1rem]" />
            {/* Img + nume produs + cantitate/numar produse * pret = pret final */}
            {/* Separator */}
            {/* Total la final */}
          </ul>
        </section>
        <section
          className={`flex flex-col justify-center items-center gap-2 min-h-[600px] h-[87dvh] mx-auto px-32P
            
            `}
        >
          <h1 className="text-xl text-center text-white font-bold uppercase mb-32M">
            Trimite mesaj echipei!
          </h1>
          <input
            className="p-2 rounded bg-gray-800 text-white w-[32rem] border border-gray-600 appearance-none focus:outline-2 focus:outline-offset-2 focus:border-blue-600 focus:outline-solid focus:shadow-outline"
            type="email"
            placeholder="Introduce-ti emailul"
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="p-2 rounded bg-gray-800 text-white w-[32rem] max-h-[400px] border border-gray-600 appearance-none focus:outline-2 focus:outline-offset-2 focus:border-blue-600 focus:outline-solid focus:shadow-outline"
            placeholder="Mesajul tau"
            rows={5}
            value={content}
            // onChange={(e) => setContent(e.target.value)}
          />
          <motion.button
            aria-label="Open donation modal"
            className="text-lg font-bold w-[32rem] mt-16M py-16P bg-blue-600 cursor-pointer"
            variants={buttonVariants}
            initial="initial"
            whileTap="tap"
            animate="exit"
            // onClick={sendMessage}
          >
            TRIMITE
          </motion.button>
          {status && (
            <p
              className={`text-sm mt-8M
            ${
              status === 'Mesajul s-a trimis cu succes!'
                ? 'text-green-400'
                : 'text-red-400'
            }
            `}
            >
              {/* {status} */}
              Hello
            </p>
          )}
        </section>
      </div>
    </PageWrapper>
  );
};

export default Page;
