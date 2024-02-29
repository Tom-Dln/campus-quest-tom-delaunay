import { useEffect, useState } from 'react';
import { succesList } from '../data/succesList';
import { obtenirSuccesObtenus } from '../utils/storage';
import { Succes } from '../types/Succes';
import Page from '@layouts/Page';
import Section from '@layouts/Section';

export default function SuccesPage() {
  const [succesObtenus, setSuccesObtenus] = useState<string[]>([]);

  useEffect(() => {
    // Cette fonction est appelée uniquement côté client
    setSuccesObtenus(obtenirSuccesObtenus());
  }, []);
  return (
    <Page title="Mes Succès">
      <Section className="flex items-center justify-center space-y-4">
        <div>
          <h1>Succès obtenus</h1>
          <ul>
            {succesList.filter((succes: Succes) => succesObtenus.includes(succes.id)).map((succes: Succes) => (
              <div key={succes.id} className='block max-w-sm my-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{succes.titre}</h5>
                <p className='font-normal text-gray-700 dark:text-gray-400'>{succes.description}</p>
              </div>
            ))}
          </ul>
        </div>
      </Section>
    </Page>
  );
}
