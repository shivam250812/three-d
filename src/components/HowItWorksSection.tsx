// const HowItWorksSection = () => {
//   const steps = [
//     {
//       icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
//       title: 'Upload Step Files',
//       description: 'Select from a wide range of materials, processes and finishing options to match your exact needs.',
//     },
//     {
//       icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
//       title: 'Get a quote & checkout',
//       description: 'No back-and-forth, transparent pricing quotes in seconds when you want your parts delivered.',
//     },
//     {
//       icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
//       title: 'We make your parts',
//       description: 'Once you place an order, our machines get to work immediately—no delays, no bottlenecks.',
//     },
//     {
//       icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="17" y1="8" x2="23" y2="8"/><line x1="20" y1="5" x2="20" y2="11"/></svg>,
//       title: 'Parts are shipped',
//       description: 'Finished parts are out the door quickly and delivered typically completed within an hour.',
//     },
//   ];
//   return (
//     // The section background is transparent
//     <section className="py-24 px-4 sm:px-6 lg:px-8">
//       {/* ADDED: A semi-transparent "frosted glass" card to hold the content */}
//       <div className="max-w-7xl mx-auto text-center bg-white/50 backdrop-blur-md rounded-2xl p-12 border border-white/20">
//         <h2 className="text-4xl font-bold tracking-tighter">CNC Machining Made Easy</h2>
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
//           {steps.map((step, index) => (
//             <div key={index}>
//               <div className="text-blue-600">{step.icon}</div>
//               <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
//               <p className="mt-2 text-sm text-gray-700">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default HowItWorksSection;

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
      title: 'Upload Step Files',
      description: 'Select from a wide range of materials, processes and finishing options to match your exact needs.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
      title: 'Get a quote & checkout',
      description: 'No back-and-forth, transparent pricing quotes in seconds when you want your parts delivered.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
      title: 'We make your parts',
      description: 'Once you place an order, our machines get to work immediately—no delays, no bottlenecks.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="17" y1="8" x2="23" y2="8"/><line x1="20" y1="5" x2="20" y2="11"/></svg>,
      title: 'Parts are shipped',
      description: 'Finished parts are out the door quickly and delivered typically completed within an hour.',
    },
  ];
  return (
    // The section background is transparent
    <section className="py-24 px-4 sm:px-6 lg:px-8 ">
      {/* ADDED: A semi-transparent "frosted glass" card to hold the content */}
      <div className="max-w-7xl mx-auto text-center bg-white/50 backdrop-blur-md rounded-2xl p-12 border border-white/20">
        <h2 className="text-4xl font-bold tracking-tighter">CNC Machining Made Easy</h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="text-blue-600">{step.icon}</div>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorksSection;