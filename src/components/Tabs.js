// import Image from 'next/image';
// import { useState } from 'react';

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState('health-tab-pane');

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   return (
//     <section className="services_area-six services_bg-six" style={{ backgroundImage: "url('/assets/img/bg/h3_services_bg.jpg')" }}>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             {/* <div className="section-title white-title mb-40">
//               <span className="sub-title">WHAT WE OFFER</span>
//               <h2 className="title">Discover Our Services For All</h2>
//             </div> */}
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="services__tab-wrap">
//               <ul className="nav nav-tabs" id="myTab" role="tablist">
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className={`nav-link ${activeTab === 'health-tab-pane' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('health-tab-pane')}
//                     type="button"
//                   >
//                     <i className="flaticon-healthcare"></i> Web Design & Development
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className={`nav-link ${activeTab === 'travel-tab-pane' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('travel-tab-pane')}
//                     type="button"
//                   >
//                     <i className="flaticon-travel-insurance"></i> Digital Marketing
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className={`nav-link ${activeTab === 'vehicle-tab-pane' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('vehicle-tab-pane')}
//                     type="button"
//                   >
//                     <i className="flaticon-protection"></i> Graphic Design
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className={`nav-link ${activeTab === 'cargo-tab-pane' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('cargo-tab-pane')}
//                     type="button"
//                   >
//                     <i className="flaticon-ship"></i> App Development
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className={`nav-link ${activeTab === 'fire-tab-pane' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('fire-tab-pane')}
//                     type="button"
//                   >
//                     <i className="flaticon-house"></i> UI / UX Design
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className={`nav-link ${activeTab === 'bike-tab-pane' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('bike-tab-pane')}
//                     type="button"
//                   >
//                     <i className="flaticon-motorbike"></i> Voice Process
//                   </button>
//                 </li>
//               </ul>
//               <div className="tab-content" id="myTabContent">
//                 <div className={`tab-pane fade ${activeTab === 'health-tab-pane' ? 'show active' : ''}`} id="health-tab-pane">
//                   <div className="services__item-four shine-animate-item">
//                     {/* <div className="services__thumb-four shine-animate">
//                       <Image src="/assets/img/services/web-design.jpg" alt="Web Design" width={500} height={300} />
//                     </div> */}
//                     <div className="services__content-four">
//                       <h2 className="title">
//                         <a href="web-design-company-coimbatore.html">Web Design & Development</a>
//                       </h2>
//                       <p>
//                         We create awesome websites from concept to launch, our web design and development service brings your online presence to life with creativity and precision.
//                       </p>
//                       <div className="about__list-box">
//                         <ul className="list-wrap">
//                           <li>
//                             <i className="fas fa-check"></i>
//                             <a href="static-website-design.html" style={{ color: 'rgb(7, 7, 95)' }}>Static website design</a>
//                           </li>
//                           <li>
//                             <i className="fas fa-check"></i>
//                             <a href="dynamic-website-design.html" style={{ color: 'rgb(7, 7, 95)' }}>Dynamic website design</a>
//                           </li>
//                           <li>
//                             <i className="fas fa-check"></i>
//                             <a href="e-commerce-website-design.html" style={{ color: 'rgb(7, 7, 95)' }}>E-commerce website design</a>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <a className="btn" href="web-design-company-coimbatore.html">Read More</a> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="tab-content" id="myTabContent">
//                 <div className={`tab-pane fade ${activeTab === 'travel-tab-pane' ? 'show active' : ''}`} id="travel-tab-pane">
//                   <div className="services__item-four shine-animate-item">
//                     {/* <div className="services__thumb-four shine-animate">
//                       <Image src="/assets/img/services/web-design.jpg" alt="Web Design" width={500} height={300} />
//                     </div> */}
//                     <div className="services__content-four">
//                       <h2 className="title">
//                         <a href="web-design-company-coimbatore.html">Web Design & Development</a>
//                       </h2>
//                       <p>
//                         We create awesome websites from concept to launch, our web design and development service brings your online presence to life with creativity and precision.
//                       </p>
//                       <div className="about__list-box">
//                         <ul className="list-wrap">
//                           <li>
//                             <i className="fas fa-check"></i>
//                             <a href="static-website-design.html" style={{ color: 'rgb(7, 7, 95)' }}>Static website design</a>
//                           </li>
//                           <li>
//                             <i className="fas fa-check"></i>
//                             <a href="dynamic-website-design.html" style={{ color: 'rgb(7, 7, 95)' }}>Dynamic website design</a>
//                           </li>
//                           <li>
//                             <i className="fas fa-check"></i>
//                             <a href="e-commerce-website-design.html" style={{ color: 'rgb(7, 7, 95)' }}> website design</a>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <a className="btn" href="web-design-company-coimbatore.html">Read More</a> */}
//                     </div>
//                   </div>
//                 </div>

              
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tabs;







import { useState } from 'react';
import Image from 'next/image';

const Tabs= () => {
  const [activeTab, setActiveTab] = useState(0);

  const benefits = [
    {
      title: 'Streamlined Operations',
      content:
        'An ERP system integrates different business processes into one platform, enabling real-time collaboration and data sharing across departments. This eliminates silos, reduces duplication of effort, and improves overall efficiency.',
      imgSrc: '/assets/img/ERP/e1.png',
    },
    {
      title: 'Enhanced Decision-Making',
      content:
        'With all business data accessible from a single system, managers and decision-makers have real-time visibility into key performance indicators (KPIs) and operational metrics. This enables data-driven decision-making and helps businesses respond to market changes more effectively.',
      imgSrc: '/assets/img/ERP/e2.png',
    },
    {
      title: 'Improved Productivity',
      content:
        'Automating routine tasks through ERP software frees employees from manual processes, allowing them to focus on higher-value activities. This leads to improved productivity and more efficient use of resources.',
      imgSrc: '/assets/img/ERP/e3.png',
    },
    {
      title: 'Regulatory Compliance',
      content:
        'Our ERP software systems can help businesses maintain compliance with industry regulations and standards. By automating compliance-related tasks, such as reporting and audit trails, businesses can reduce the risk of non-compliance and avoid costly penalties.',
      imgSrc: '/assets/img/ERP/e4.png',
    },
    {
      title: 'Scalability',
      content:
        'One of the significant advantages of ERP solutions is their scalability. As businesses grow, they can expand their ERP system by adding new modules to meet emerging needs. This makes ERP software a long-term investment that grows with the business.',
      imgSrc: '/assets/img/ERP/e5.png',
    },
  ];

  return (
    <div className="erp-container">
      <div className="erp-header">
        <h1>ERP Software Benefits</h1>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>
              <a
                className={activeTab === index ? 'active' : ''}
                onClick={() => setActiveTab(index)}
              >
                {benefit.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {benefits.map((benefit, index) => (
        <div
          key={index}
          className={`erp-content ${activeTab === index ? 'active' : ''}`}
          style={{ display: activeTab === index ? 'block' : 'none' }}
        >
          <div className="erp-benefit-section">
            <Image
              src={benefit.imgSrc}
              alt={benefit.title}
              width={400}
              height={400}
              layout="responsive"
            />
            <h2>{benefit.title}</h2>
            <p>{benefit.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
