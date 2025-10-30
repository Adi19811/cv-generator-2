import React, { useState } from 'react';
import CvForm from './components/CvForm';
import CvPreview from './components/CvPreview';
import { CvData } from './types';
import { generatePdf } from './services/pdfGenerator';
import { CoveboLogo } from './components/icons';

const initialCvData: CvData = {
  name: 'Marcin Adamczyk',
  profilePictureUrl: 'https://i.ibb.co/6n0hK5Q/profile-pic.jpg',
  dob: '16/10/1985',
  personalDetails: [
    { id: '1', label: 'EUROPEAN CERTIFICATE', value: 'forklift driver' },
    { id: '2', label: 'DRIVING', value: 'Ept, Heftruck' },
    { id: '3', label: 'EXPERIENCE', value: '4y' },
    { id: '4', label: 'ENGLISH LEVEL', value: 'communicative' },
    { id: '5', label: 'BSN', value: 'No' },
    { id: '6', label: 'NOW', value: 'PL' },
  ],
  skillsSummary: 'HEFTRUCK, PACKAGES, LOADING/UNLOADING',
  workExperience: [
    {
      id: 'work1',
      jobTitle: 'WAREHOUSE WORKER/FORKLIFT DRIVER/MACHINE OPERATOR',
      company: 'EKO FORMA',
      dateRange: '03.2023 - 12.2024',
      tasks: [
        'Machine Operation',
        'Unloading goods according to the schedule and transport',
        'Work at the computer, handling returns',
        "Daily check of the vehicle's technical condition",
      ],
    },
    {
      id: 'work2',
      jobTitle: 'WAREHOUSE WORKER/FORKLIFT DRIVER/MACHINE OPERATOR',
      company: 'EKO FORMA',
      dateRange: '03.2023 - 12.2024',
      tasks: [
        'Machine Operation',
        'Unloading goods according to the schedule and transport',
        'Work at the computer, handling returns',
        "Daily check of the vehicle's technical condition",
      ],
    },
    {
      id: 'work3',
      jobTitle: 'WAREHOUSE WORKER/FORKLIFT DRIVER/MACHINE OPERATOR',
      company: 'EKO FORMA',
      dateRange: '03.2023 - 12.2024',
      tasks: [
        'Machine Operation',
        'Unloading goods according to the schedule and transport',
        'Work at the computer, handling returns',
        "Daily check of the vehicle's technical condition",
      ],
    },
  ],
};

function App() {
  const [cvData, setCvData] = useState<CvData>(initialCvData);

  const handleDownloadPdf = async () => {
    try {
      await generatePdf('cv-to-print');
    } catch (error) {
      console.error("Failed to generate PDF", error);
      alert("Błąd podczas generowania PDF. Sprawdź konsolę, aby uzyskać więcej informacji.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
       <header className="bg-white p-4 shadow-md flex justify-between items-center sticky top-0 z-20 border-b">
          <div className="flex items-center gap-3">
             <a href="#" aria-label="Strona główna Covebo">
                <CoveboLogo className="h-8 w-auto text-[#CE0031]" />
             </a>
             <h1 className="text-xl font-bold text-gray-700 hidden sm:block">Generator CV</h1>
          </div>
          <button
            onClick={handleDownloadPdf}
            className="bg-[#CE0031] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md flex items-center gap-2 transition-colors"
          >
            Pobierz PDF
          </button>
        </header>
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-[450px] lg:w-[500px] p-4 md:p-6 bg-white overflow-y-auto">
          <CvForm cvData={cvData} setCvData={setCvData} />
        </div>
        <div className="w-full flex-grow p-4 md:p-10 flex items-start justify-center bg-gray-200 overflow-auto">
          <div className="transform scale-[0.6] sm:scale-[0.7] lg:scale-[0.8] origin-top">
            <CvPreview cvData={cvData} id="cv-to-print" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;