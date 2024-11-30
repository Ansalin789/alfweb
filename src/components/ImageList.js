import Head from 'next/head';
import Card from './TimedContainers';

export default function Home() {
  const solutions = [
    {
      imageSrc: '/path-to-image-1',
      title: 'Project Management',
      description: 'Facilitate status tracking, accountability, and cost management...',
    },
    {
      imageSrc: '/path-to-image-2',
      title: 'Human Resource Management',
      description: 'Streamline workforce productivity and automate HR management...',
    },
    {
      imageSrc: '/path-to-image-3',
      title: 'Workflow Management',
      description: 'Achieve business goals faster with process automation software...',
    },
   
  ];

  return (
    <div className="styles.container">
      <Head>
        <title>Custom ERP Solutions</title>
      </Head>

      <main className="styles.main">
        <h1 className="styles.title">Key Areas of Our Custom ERP Solutions</h1>
        <div className="styles.grid">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              imageSrc={solution.imageSrc}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}