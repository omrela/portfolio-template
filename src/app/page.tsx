import Image from 'next/image';
import Link from 'next/link';

import { GoArrowUpRight } from 'react-icons/go';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import type { Metadata } from 'next';

import Data from '@/app/data';

if (!Data.name || !Data.position || !Data.about || !Data.bannerImage) {
  throw new Error('Please fill in the data.ts file before running the app');
}

export const metadata: Metadata = {
  title: Data.name,
  description: Data.position,
  icons: {
    icon: Data.bannerImage,
  },
  openGraph: {
    images: Data.bannerImage,
  },
};

const ProjectCard = ({
  name,
  description,
  image,
  link,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <div className='mt-10 flex flex-col md:flex-row gap-x-4 gap-y-2 md:h-36 w-full h-full'>
      <div className='relative h-40 md:h-full w-full min-w-40 '>
        <Image
          src={image}
          fill
          alt='project image'
          className='rounded-lg object-cover'
        />
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
          <h3 className='text-md font-medium font-mono'>{name}</h3>
          <Link href={link} target='_blank' rel='noopener noreferrer'>
            <GoArrowUpRight className='text-sm font-medium text-neutral-500 font-mono' />
          </Link>
        </div>

        <p className='text-neutral-500 text-md font-light line-clamp-5'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className='w-screen h-screen '>
      <header className='p-4 border-b border-neutral-100 font-mono flex flex-row justify-between text-sm'>
        <h1>{Data.name}</h1>
        <h1>{Data.position}</h1>
      </header>

      <main className='px-4 mt-5 flex h-[90%] my-auto flex-col md:flex-row gap-x-8'>
        <section className='md:w-1/2 mb-5 md:mb-0'>
          <div className='relative h-full w-full rounded-lg min-h-[400px]'>
            <Image
              src={Data.bannerImage}
              alt='image'
              className='rounded-lg object-cover'
              fill
            />
          </div>
        </section>
        <section className='w-full md:w-1/2 rounded-lg relative scrollbar-hide min-h-fit md:overflow-y-auto'>
          <div>
            <div className='flex flex-row gap-x-4 items-center'>
              <h1 className='text-xl font-medium font-mono'>About me</h1>

              <span className='text-neutral-300 text-md font-light'> | </span>

              <div className='flex flex-row gap-x-2 items-center'>
                {Data.twitter && (
                  <Link
                    href={Data.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaXTwitter className='text-md font-medium text-black font-mono' />
                  </Link>
                )}

                {Data.github && (
                  <Link
                    href={Data.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <SiGithub className='text-md font-medium text-black font-mono' />
                  </Link>
                )}
              </div>
            </div>

            <p className='text-neutral-500 text-md font-light'>{Data.about}</p>

            {Data.projects &&
              Data.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
