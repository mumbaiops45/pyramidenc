import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "HYDROBLUE® SMR 1.0 RELEASED",
      date: "JAN 10, 2026",
      shortDesc: "Pyramid E&C Group has developed Hydroblue® SMR, a novel inductive steam methane reforming technology that eliminates natural gas combustion, drastically reducing CO₂ emissions while improving hydrogen production efficiency.",
      category: "Innovation",
      icon: "🌊",
      image: "/images/hydroblue.jpg",
      detailContent: `
        <p>Pyramid E&C Group has developed Hydroblue® SMR, a novel inductive steam methane reforming technology that eliminates natural gas combustion and thus flue gas emission, while delivering higher efficiency than conventional reforming. The key benefits of Hydroblue® SMR are:</p>
        <ul>
          <li>30% saving of natural gas</li>
          <li>Zero Carbon dioxide emission</li>
          <li>Carbon credits</li>
          <li>Carbon dioxide revenue</li>
          <li>Compact, lower OPEX</li>
          <li>Higher availability than conventional SMR</li>
        </ul>
        <p>Hydroblue® operates on modest voltage and works easily with BESS and photovoltaic power. Hydroblue® SMR has achieved TRL 7 and is ready for commercial deployment. Pyramid E&C supplies the complete steam methane reforming solution integrated with Battery Energy Storage System to provide round the clock operation.</p>
        <p>Pyramid E&C delivered Sulfex-1000 in a Modular EPC approach. The plant was divided into 14 modules and an E-House. The modules complete with structures, equipment, piping and E&I items were integrated and tested in Mumbai, India at Sphinx Process Systems, a division of Pyramid E&C. All modules were shipped from Mumbai port and arrived safely at Richmond.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 2,
      title: "FIRST COMMERCIAL SULFEX® UNIT DELIVERED",
      date: "DEC 04, 2025",
      shortDesc: "Pyramid E&C LLC delivers the first ever commercial unit i.e. Sulfex-1000 to AET. The unit will be deployed for advanced sulfur removal and environmental compliance.",
      category: "Milestone",
      icon: "⚙️",
      image: "/images/sulfex-delivery.jpg",
      detailContent: `
        <p>Pyramid E&C LLC delivers the first ever commercial unit i.e. Sulfex-1000 to AET (<a href="https://www.alt-enviro-tech.com" target="_blank" rel="noopener noreferrer">www.alt-enviro-tech.com</a>). The unit will be installed in a midstream operator facility in Richmond, Virginia.</p>
        <p>Sulfex technology, developed by AET, is a low severity desulfurization process for light hydrocarbons to meet ultra-low sulfur specifications. The process also overcomes several shortcomings of conventional hydrodesulfurization (HDS or hydrotreating) technology, including:</p>
        <ul>
          <li>Severe operating conditions</li>
          <li>Potential for a runaway reaction</li>
          <li>High capital and operating expenditures</li>
          <li>Hazardous hydrogen environment</li>
          <li>Toxic hydrogen sulfide production</li>
          <li>Massive carbon dioxide emissions</li>
        </ul>
        <p>Sulfex® is the advanced form of oxidative desulfurization (oxytreating), has following competitive and environmental advantages over HDS:</p>
        <ul>
          <li>Moderate operating conditions</li>
          <li>One tenth of the CAPEX and lower OPEX compared to HDS</li>
          <li>Less inflammable reagents and inert liquid byproducts</li>
          <li>Negligible environmental impact</li>
          <li>Smaller, modular, and/or mobile installation options</li>
        </ul>
        <p>Pyramid E&C delivered Sulfex-1000 in a Modular EPC approach. The plant was divided into 14 modules and an E-House. The modules complete with structures, equipment, piping and E&I items were integrated and tested in Mumbai, India at Sphinx Process Systems, a division of Pyramid E&C. All modules were shipped from Mumbai port and arrived safely at Richmond.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 3,
      title: "OFFSHORE TECHNOLOGY CONFERENCE 2025 #OTC2025",
      date: "FEB 11, 2025",
      shortDesc: "The Offshore Technology Conference (OTC) 2025 served as an exceptional platform to explore emerging technologies, industry trends, and collaborative opportunities in offshore energy.",
      category: "Event",
      icon: "🛢️",
      image: "/images/otc2025.jpg",
      detailContent: `
        <p>The Offshore Technology Conference (OTC) 2025 served as an exceptional platform to explore emerging technologies, industry trends, and strategic insights shaping the future of the offshore energy sector. We had good experience attending the event, engaging with thought leaders, and deepening our understanding of the innovations driving progress across the industry.</p>
        <p>The event offered a valuable opportunity to observe the latest advancements in digitalization, automation, and sustainable offshore technologies. We gained meaningful insights from industry leaders and engaged in informative discussions that highlighted the evolving dynamics of the global energy landscape.</p>
        <p>Our experience at OTC 2025 reinforces our commitment to staying informed, connected, and aligned with the future of offshore innovation and collaboration.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 4,
      title: "IEW INDIA ENERGY WEEK | New Delhi, India",
      date: "FEB 11, 2025",
      shortDesc: "Our company had an exceptional experience at IEW 2025, where we showcased our innovative solutions that are Modular, cost-effective, and tailored for rapid deployment.",
      category: "Event",
      icon: "🇮🇳",
      image: "/images/iew2025.jpg",
      detailContent: `
        <p>Our company had an exceptional experience at IEW 2025, where we showcased our innovative solutions that are Modular, Digital and Sustainable and also connected with industry leaders from around the world.</p>
        <p>The event provided us with invaluable opportunities to network, exchange ideas, and gain insights into the latest trends shaping the future of Oil & Gas, Green and Blue products.</p>
        <p>We were thrilled by the positive feedback we received on our offerings and are proud to have contributed to the dynamic discussions that took place. IEW 2025 truly reinforced our commitment to excellence and collaboration in driving industry progress.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 5,
      title: "HOUSTON INNOVATION CENTRE",
      date: "AUG 01, 2025",
      shortDesc: "Pyramid E&C completed the land acquisition at Eldridge Parkway in the Energy Corridor for the proposed Innovation Center.",
      category: "Infrastructure",
      icon: "🏗️",
      image: "/images/houston-innovation.jpg",
      detailContent: `
        <p>Pyramid E&C completed the land acquisition at Eldridge Parkway in the Energy Corridor for the proposed Innovation Center. Overlooking Buffalo bayou, Kendall library and Terry Hershey park, the center is ideal for fresh ideas, clear thinking and collaboration of best minds.</p>
        <p>The facility covers about 25000 sq. ft., and houses Engineering, FAT and aftersales support facilities for SPHINX® range of conventional Oil & Gas process packages as well as demonstration facilities for Blue and Green Hydrogen. Methanol and Ammonia prototypes.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 6,
      title: "SULFEX® TECHNOLOGY COMMERCIALIZATION",
      date: "JAN 18, 2025",
      shortDesc: "Pyramid has partnered with AET to build and install the first Sulfex™ plant in the USA.",
      category: "Partnership",
      icon: "🤝",
      image: "/images/sulfex-commercialization.jpg",
      detailContent: `
        <p>Pyramid E&C LLC is pleased to announce that it has been chosen by Alternative Environmental Technologies (<a href="https://www.alt-enviro-tech.com" target="_blank" rel="noopener noreferrer">www.alt-enviro-tech.com</a>) to build and install the first commercial Sulfex™ plant in the US. AET has partnered with one of the largest energy companies in North America to operate the facility.</p>
        <p>Sulfex™, developed by AET, is designed to reduce sulfur content in sour hydrocarbons to meet ultra-low sulfur specifications. The process also overcomes several shortcomings of conventional hydrodesulfurization (HDS or hydrotreating) technology. These include:</p>
        <ul>
          <li>Severe operating conditions, such as high temperatures (~800°F) and pressures (~3500 psig)</li>
          <li>Potential for a runaway reaction</li>
          <li>High capital and operating expenditures</li>
          <li>A hazardous hydrogen environment</li>
          <li>Toxic hydrogen sulfide production</li>
          <li>Massive carbon dioxide emissions</li>
        </ul>
        <p>Sulfex™, the most advanced form of oxidative desulfurization (oxytreating), has the following competitive and environmental advantages over HDS:</p>
        <ul>
          <li>Moderate operating conditions at atmospheric pressure, with a maximum operating temperature of 212ºF.</li>
          <li>Economical: about one tenth of the CAPEX and lower OPEX compared to HDS</li>
          <li>Safety: less inflammable reagents and inert liquid byproducts</li>
          <li>Negligible environmental impact</li>
          <li>Smaller, modular, and/or mobile installation options</li>
        </ul>
        <p>The plant will process 5,000 barrels of diesel per day, starting from an initial capacity of 1,000 barrels per day. AET has previously operated two pilot plants at its Reno, NV facility and one in the Asia Pacific region to validate the technology. The Sulfex™ process has also been independently verified by the U.S. Department of Energy’s Argonne National Laboratory.</p>
        <p>Pyramid E&C has been providing full EPC scope worldwide for conventional and renewable hydrocarbon facilities for more than 25 years, with a spotless track record of delivering more than 700 projects fully meet Safety, Quality and Performance expectations. The company’s plants and processes are defined by full modularization, decarbonization and digitalization to support stakeholder goals in Mobility, Operational Simplicity and ESG initiatives.</p>
        <p><em>“We are honored and excited to partner with Pyramid E&C to continue our eco-friendly, sustainable business mission and introduce cutting edge technologies to the hydrocarbon fuels industry.”</em><br />Steve G. Stevanovich, Director, AET</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 7,
      title: "INDIAN RESEARCH CENTRE INAUGURATION",
      date: "OCT 12, 2025",
      shortDesc: "We are proud to announce the inauguration of our facility for development of reactor prototypes and pilot plants for advanced hydrocarbon processing, carbon capture, and modular refining technologies in India.",
      category: "Infrastructure",
      icon: "🔬",
      image: "/images/indian-research-centre.jpg",
      detailContent: `
        <p>We are proud to announce the inauguration of our facility for development of reactor prototype and pilot plants for the technologies offered by Pyramid E&C in the renewable hydrocarbons segment i.e. Blue and Green Hydrogen, Methanol and Ammonia from its proprietary electric reforming technology and solid oxide electrolyzers. Here, it will be possible to test modules up to 0.5 MW. The facility also houses a testing and research laboratory.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 8,
      title: "REFINING INDIA CONFERENCE 2022",
      date: "OCT 12, 2022",
      shortDesc: "Ms. Kavita Bodh, Chief Engineer Process, presented our Electric Reformer concept coupled with Carbon dioxide liquefaction system, showcasing breakthrough low-emission hydrogen and CO₂ management solutions.",
      category: "Event",
      icon: "🎤",
      image: "/images/refining-india.jpg",
      detailContent: `
        <p>Ms. Kavita Bodh, Chief Engineer Process, presented our Electric Reformer concept coupled with Carbon dioxide liquefaction system to eliminate production of flue gases by heating fuels, thus reducing carbon intensity in refining operations by 40%. Makrand Palkar and Pankaj Narkhede also attended the conference and interacted with very important personnel from Indian public and private sector. The contents of presentation can be accessed by the link below.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 9,
      title: "DECARBONIZATION SOLUTIONS PORTFOLIO",
      date: "AUG 01, 2022",
      shortDesc: "Pyramid E&C offers several solutions to reduce carbon impact of hydrocarbon processing: Flared & Stranded Gas Solutions (Hydrogen, Methanol), modular carbon capture integration, and low-emission reforming technologies.",
      category: "Sustainability",
      icon: "🌿",
      image: "/images/decarbonization.jpg",
      detailContent: `
        <p>Pyramid E&C offers several solutions to reduce Carbon impact of Hydrocarbon processing as below:</p>
        <ul>
          <li><strong>Electric Reforming:</strong> Novel NICR® Reactor and Reformer designs for temperature up to 1100°C replacing combustion of Natural gas by alternative energy.</li>
          <li><strong>CO2 Liquefaction:</strong> As combustion is eliminated, the concentrated CO2 available in the process stream can be efficiently liquefied or converted into dry ice.</li>
          <li><strong>Flare Mitigation:</strong> Modularized solutions to liquefy the flared hydrocarbons into ‘Blue” Ammonia or Methanol, thus creating value from the wasted resources.</li>
          <li><strong>Carbon Sequestration:</strong> Standard compression and reinjection system to store CO2 in subsurface reservoirs.</li>
          <li><strong>Fuel Ethanol:</strong> Produce anhydrous Bio-Ethanol by fermentation of grains, sugar cane or cellulosic feedstock for blending into Gasoline.</li>
          <li><strong>Green Petrochemicals:</strong> The Bio-Ethanol thus produced form the feedstock for several downstream petrochemicals, plastics and Hydrogen.</li>
          <li><strong>Alternative Energy Integration:</strong> Energy audit and replacement of conventional power applications with Solar, Wind or other forms of alternative energy.</li>
        </ul>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 10,
      title: "STRANDED AND FLARED GAS SOLUTIONS LAUNCHED",
      date: "MAY 10, 2021",
      shortDesc: "Pyramid E&C now offers compact, modular solutions to monetize flared or stranded natural gas into Syngas and thereafter into valuable products like hydrogen, methanol, and clean fuels — reducing emissions and adding value.",
      category: "Innovation",
      icon: "🔥",
      image: "/images/stranded-gas.jpg",
      detailContent: `
        <p>Pyramid E&C now offers compact, modular solutions to monetize flared or stranded natural gas into Syngas and thereafter into Hydrogen, Methanol or Ammonia by proprietary NICR® technology using electricity to power the endothermic reaction hence eliminating open flame, associated hazards, and pollution at the installation. All the plants are performance tested at our manufacturing facilities and supplied in containerized modules.</p>
        <p>LinkedIn users may download the full brochure by clicking on the link.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 11,
      title: "NEW RANGE OF OIL & GAS PRODUCTION SOLUTIONS",
      date: "FEB 02, 2021",
      shortDesc: "Pyramid E&C Solution development teams at Houston and India operations enhanced the range of production facilities to add modular, rapid-deployment oil & gas processing units for onshore and offshore applications.",
      category: "Product",
      icon: "⚡",
      image: "/images/production-solutions.jpg",
      detailContent: `
        <p>Pyramid E&C Solution development teams at Houston and India operation enhanced the range of production facilities to add standard topsides for offshore production on FPSO, Platforms and Jack up rigs.</p>
        <p>These facilities are modular and built in full compliance with ASME and API specifications for sour service. Besides ex-works delivery from our Houston and India fabrication yards, Pyramid E&C will be pleased to undertake EPC as well as BOOT basis.</p>
        <p>LinkedIn users may download the full brochure by clicking on the link below.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 12,
      title: "PYRAMID E&C CELEBRATES SILVER JUBILEE",
      date: "AUG 15, 2020",
      shortDesc: "Pyramid E&C completes 25 years in business under the leadership of Ashish Bajpai, Founder and Chairman. Starting with a DNA of innovation and engineering excellence, the company has delivered over 1000 projects globally.",
      category: "Achievement",
      icon: "🎂",
      image: "/images/silver-jubilee.jpg",
      detailContent: `
        <p>Pyramid E&C completes 25 years in business under the leadership of Ashish Bajpai, Founder and Chairman.</p>
        <p>Starting with a DNA of a specialist process design firm, today Pyramid E&C delivers Services, Products and solutions for hydrocarbon industry worldwide through its offices in Americas, Europe, Middle East and India.</p>
        <p>The company still has full focus on energy business and strives to enhance knowledge and manufacturing capabilities in conventional as well as renewable hydrocarbon.</p>
        <p>LinkedIn users may download the full brochure by clicking on the link below.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 13,
      title: "ENHANCEMENT IN THE RANGE OF MINI REFINERIES",
      date: "JUL 24, 2020",
      shortDesc: "Pyramid E&C solution teams expanded the portfolio of mini refineries to produce fuels up to Euro V standards, enabling cost-effective, modular refining for remote and emerging markets.",
      category: "Product",
      icon: "⛽",
      image: "/images/mini-refineries.jpg",
      detailContent: `
        <p>Pyramid E&C Solution development teams at Houston and India operation enhanced the range of solutions to produce fuels to Euro V and MARPOL 2020 specifications.</p>
        <p>Now, the standard configurations are available for Hydroskimming as well as Full Conversion refineries up to 50000 BPD. While large part of these refineries comprises of standard open art units previously supplied by Pyramid E&C, the company is working closely with experienced suppliers of licensed technologies and catalysts for Reforming and FCC units.</p>
        <p>LinkedIn users may download the full brochure by clicking on the link below.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 14,
      title: "FUJAIRAH REFINERY PERFORMANCE TRIAL SUCCESSFUL",
      date: "JUN 02, 2020",
      shortDesc: "The 7500 BPD refinery supplied to Ecomar Energy Solutions in Fujairah was commissioned successfully and underwent rigorous performance trials, meeting all design specifications and product quality targets.",
      category: "Milestone",
      icon: "✅",
      image: "/images/fujairah-refinery.jpg",
      detailContent: `
        <p>The 7500 BPD refinery supplied to Ecomar Energy Solutions in Fujairah was commissioned successfully and underwent performance trials by a reputed third party in May 2020. The unit fully met the design throughput parameters and produced Naphtha, Kerosene, Diesel and Fuel oil according to the agreed specifications.</p>
        <p>The refinery is designed for continuous operations and built in full conformance to API specifications. It has sophisticated features of Desalting and Steam stripping to process several varieties of Crude Oil and achieve rigorous product specifications.</p>
        <p>This is the third successful refinery by Pyramid E&C in the MENA region and the continued success reinforces the company’s competence in mini and modular refineries as well as the ability to successfully build hydrocarbon processing facilities in the region.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 15,
      title: "INFRASTRUCTURE COMPLIANCE IN RESPONSE TO COVID-19",
      date: "MAY 03, 2020",
      shortDesc: "Pyramid E&C completed audit of its facilities and implemented several measures to reduce social transfer of virus, ensuring workforce safety while maintaining operational continuity during the pandemic.",
      category: "Operations",
      icon: "🦠",
      image: "/images/covid-compliance.jpg",
      detailContent: `
        <p>Pyramid E&C has completed audit of its facilities and implemented several measures to reduce the social transfer of virus as below:</p>
        <ul>
          <li>Partition the office for maximum 20 personnel workspace</li>
          <li>Hand free entry to premises by facial recognition</li>
          <li>Thermal sensors at entry and key office locations</li>
          <li>Automatic faucets in washrooms</li>
          <li>Only zero contact deliveries allowed</li>
          <li>Visitors allowed in designated sections only</li>
        </ul>
        <p>The work from home model will continue for certain category of staff till the outbreak is suitably contained.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 16,
      title: "ENGINEERING FRAME AGREEMENT WITH TAQA",
      date: "OCT 21, 2019",
      shortDesc: "Pyramid E&C secured an engineering Master Service agreement with Taqa Atrush BV, through a competitive bidding process, to provide comprehensive engineering and technical services for upstream and midstream assets.",
      category: "Partnership",
      icon: "📄",
      image: "/images/taqa-agreement.jpg",
      detailContent: `
        <p>Pyramid E&C secured an engineering Master Service agreement with Taqa Atrush BV, through a competitive bidding process by Ministry of Natural Resources, Kurdistan. The work entails engineering and project management services for upgrade of their existing production facilities which are producing 30000 BPD to add another 30000 BPD and associated natural gas for delivery to the domestic market. TAQA is the operator of the Atrush Block, which is located 85 km northwest of Erbil City.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 17,
      title: "140 MTPA CARBON BLACK PLANT COMMISSIONED",
      date: "JUL 18, 2019",
      shortDesc: "The 140 MTPA Carbon Black plant engineered by Pyramid E&C is successfully commissioned by Bal Krishna Tyres at their Bhuj facility, delivering high-quality carbon black with optimized energy efficiency.",
      category: "Project",
      icon: "🏭",
      image: "/images/carbon-black.jpg",
      detailContent: `
        <p>The 140 MTPA Carbon Black plant engineered by Pyramid E&C is successfully commissioned by Bal Krishna Tyres at their Bhuj manufacturing units at Gujarat, India in May 2019. The plant uses Fuel oil as the feedstock to produce Carcass and Tread grades of Carbon Black suitable for off road tyres.</p>
        <p>Pyramid E&C carried out the Process Design, Basic and Detailed Engineering, Procurement and Construction Management services for the project to achieve completion in 12 months from the ground breaking.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 18,
      title: "PYRAMID E&C, USA DELIVERS PROJECT #1000 TO P&G, SACRAMENTO, USA",
      date: "MAY 15, 2018",
      shortDesc: "The project #1000 for Pyramid E&C turns out to be for Procter & Gamble Oleochemicals facility at Sacramento, California, a new modular unit that underscores Pyramid’s reliability and engineering excellence.",
      category: "Milestone",
      icon: "🎯",
      image: "/images/project-1000.jpg",
      detailContent: `
        <p>The project #1000 for Pyramid E&C turns out to be for Procter & Gamble Oleochemicals facility at Sacramento, California, a new customer and a new territory. This facility was setup in 1952 and produces natural alcohols of several grades for use in personal products.</p>
        <p>The scope of the project is onsite and offsite deployment of process engineers to carry out studies for plant performance optimisation and debottlenecking.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 19,
      title: "PYRAMID E&C, USA OBTAINS ISNET CERTIFICATION",
      date: "APR 05, 2017",
      shortDesc: "Rapidly moving into the US hydrocarbon industry, Pyramid E&C is now geared up to deliver full EPC services complying with US safety and quality standards after obtaining ISNetworld certification.",
      category: "Certification",
      icon: "📜",
      image: "/images/isnet-certification.jpg",
      detailContent: `
        <p>Rapidly moving into the US hydrocarbon industry, Pyramid E&C is now geared up to deliver full EPC services complying with the US Hydrocarbon industry safety standards and ISNET Certification is a testimony to that. ISNetworld is the main US online contractor and supplier management platform to mitigate risk and corporate liability of the customers. ISNET is used by 650 asset owners and 75,000 active contractors and suppliers mainly in the United States construction industry.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 20,
      title: "CENTENNIAL GAS PLANT DELIVERED",
      date: "MAR 10, 2016",
      shortDesc: "TSI (Turnkey Specialists Inc.) had the full scope of Engineering, Procurement, Construction and Commissioning services. The plant is operating successfully, processing natural gas with high reliability.",
      category: "Project",
      icon: "⛽",
      image: "/images/centennial-gas.jpg",
      detailContent: `
        <p>TSI, Houston, a subsidiary of Pyramid E&C delivered the 30 MMSCFD Gas Plant to Centennial project of Sterling Energy, Denver Colorado.</p>
        <p>TSI had the full scope of Engineering, Procurement, Construction and Commissioning services. The plant is operating satisfactorily since commissioning.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 21,
      title: "PYRAMID E&C, USA ACQUIRES TSI, HOUSTON",
      date: "JUL 18, 2015",
      shortDesc: "Pyramid E&C completed the acquisition of Turnkey Specialists Inc., Houston (TSI). Founded in 1996, TSI has completed 270+ projects, strengthening Pyramid's modular execution capabilities in North America.",
      category: "Corporate",
      icon: "🏢",
      image: "/images/tsi-acquisition.jpg",
      detailContent: `
        <p>Pyramid E&C completed the acquisition of Turnkey Specialists Inc., Houston (TSI). Founded in 1996, TSI has completed 270 projects in Midstream segment comprising of Gas Plants, Compressor Stations, Hydrocarbon storage facilities and pipelines in 10 US states. TSI has prestigious long standing clientele e.g. Kinder Morgan, Mark West partners, Crestwood Midstream and a number of service firms. With this acquisition, Pyramid E&C gets a foothold in US midstream industry as well as ability to utilise the Midstream know how and experience internationally.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 22,
      title: "PYRAMID E&C, INDIA INAUGURATES ENGINEERING CENTRE OF EXCELLENCE",
      date: "SEP 04, 2014",
      shortDesc: "Pyramid E&C India inaugurated a new engineering centre of excellence, expanding process design, detailed engineering, and modular skid design capabilities for global energy projects.",
      category: "Infrastructure",
      icon: "🏛️",
      image: "/images/india-engineering-centre.jpg",
      detailContent: `
        <p>Pyramid E&C unveiled the new, state of the art engineering facility at Thane in Mumbai, India. Thane is one of the main hubs for hydrocarbon engineering and manufacturing in India. This facility admeasures 50 000 ft² and can seat 476 project managers, engineers and designers. The working space is equipped with state of the art communication systems and special provision for large scale training. With a 50 personnel capacity auditorium and exclusive design workshop facility, this centre is geared to handle the larger, global hydrocarbon projects with ease.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 23,
      title: "GKP AWARDS FEED CONTRACT TO PYRAMID E&C, ME",
      date: "NOV 11, 2013",
      shortDesc: "Pyramid E&C secured an engineering Master Service agreement with Gulf Keystone Partners Ltd. Erbil through a competitive tender, providing front-end engineering design (FEED) for key production facilities.",
      category: "Contract",
      icon: "✍️",
      image: "/images/gkp-feed.jpg",
      detailContent: `
        <p>Pyramid E&C secured an engineering Master Service agreement with Gulf Keystone Partners Ltd., Erbil through a competitive bidding process by Ministry of Natural Resources (MNR). The work entails engineering and project management services for upgrade of their existing production facilities PF1/ PF2 at Shaikan field in Kurdistan Region of Iraq and FEED for a new Central production facility. Pyramid E&C had been working for several international oil companies in Iraq since 2008 and this will be the 47th assignment in Kurdistan. The duration of FEED will be about 6 Months followed by a cost estimation phase of 2 months.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 24,
      title: "MODULAR REFINERY AWARD TO PYRAMID E&C, ME",
      date: "JUL 02, 2012",
      shortDesc: "This unit will process medium heavy API 29° Crude oil and produce Naphtha, Diesel, Jet Fuel and Fuel oil for bunkering. The modular refinery is designed for rapid deployment and operational efficiency.",
      category: "Project",
      icon: "🛢️",
      image: "/images/modular-refinery-award.jpg",
      detailContent: `
        <p>Ecomar Energy, Fujairah awarded Pyramid E&C UAE, a contract for Engineering, Procurement, Installation, Construction and Commissioning of 7500 BPD topping unit to be set up in the Emirate of Fujairah. The duration of contract will be 12 months.</p>
        <p>This unit will process medium heavy API 29° Crude oil and produce Naphtha, Diesel, Jet Fuel and Fuel oil for bunkering. The design will comply to API/ ASME standards and will have a sophisticated Distributed Control System for safe and continuous operation. The refinery will be designed according to the environmental standards of UAE for lowest possible emissions.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 25,
      title: "PROJECT #500 DELIVERED TO DNO ASA, IRAQ",
      date: "OCT 10, 2011",
      shortDesc: "From its inception in 1995 Pyramid E&C achieved a significant milestone in delivering project #500, which happens to be the central processing facility for DNO ASA in Iraq, demonstrating consistent growth and delivery excellence.",
      category: "Milestone",
      icon: "🏆",
      image: "/images/project-500.jpg",
      detailContent: `
        <p>From its inception in 1995 Pyramid E&C achieved a significant milestone in delivering the project #500, which happens to be the Field Development Study for Tawke fields near Erbil in Kurdistan Region of Iraq.</p>
        <p>DNO International ASA is an Oslo-listed oil and gas company focused on interests in the Middle East and North Africa. Pyramid E&C is advising DNO on development of several prospects in Kurdistan by Field Development Planning, Front End Studies, Procurement support and Brownfield operations.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 26,
      title: "MUNDRA MODULAR FABRICATION YARD COMPLETED",
      date: "AUG 10, 2010",
      shortDesc: "Pyramid E&C completes the construction of Modular Fabrication yard at Mundra Port & Special Economic Zone in Gujarat, enabling large-scale skid assembly and logistics for global project deliveries.",
      category: "Infrastructure",
      icon: "🚢",
      image: "/images/mundra-yard.jpg",
      detailContent: `
        <p>Pyramid E&C completes the construction of Modular Fabrication yard at Mundra Port & Special Economic Zone in Gujarat, Western India. Mundra is an all weather port with a draft of about 18 m. This location is very much suitable for shipment to Middle East and Africa with voyage time of 2 to 7 days.</p>
        <p>The facility admeasuring 200 000 ft² has a robust infrastructure for Mechanical and I&E works, it can ship modules with a maximum size 10 m x 10 m x 30 m and maximum weight of 1000 Tons. It has added advantage of being free from customer duty transactions and minimal time to transfer the goods and modules onto the ship.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 27,
      title: "ACHILLES / FPAL JOINT QUALIFICATION SYSTEM REGISTERED",
      date: "MAR 21, 2009",
      shortDesc: "After working for several years in Europe, Pyramid E&C applied into Achilles / FPAL Joint Qualification System used by several energy companies, strengthening supplier credentials for North Sea and European operations.",
      category: "Certification",
      icon: "✅",
      image: "/images/achilles-certification.jpg",
      detailContent: `
        <p>After working for several years in Europe, Pyramid E&C applied into Achilles / FPAL Joint Qualification System used by several energy asset owners in UK and Scandinavia for supplier due diligence. Achilles / FPAL places strong emphasis to Management Systems, Information security and business continuity of the supplier organisation in which Pyramid E&C fared with ease and success.</p>
        <p>The Achilles JQS community, created in 1991, provides operators, main contractors and suppliers with an industry accepted procurement service that streamlines procurement, manages risk and enables compliance with the relevant EU procurement directives. Achilles has a controlling interest in FPAL.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    }
  ];

  // Sort by date descending
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const getCategoryColor = (category) => {
    const colors = {
      Innovation: "#F5B400",
      Milestone: "#FFC107",
      Event: "#D99A00",
      Infrastructure: "#E6A817",
      Partnership: "#F5B400",
      Sustainability: "#F5B400",
      Product: "#FFC107",
      Achievement: "#F5B400",
      Operations: "#D99A00",
      Contract: "#F5B400",
      Corporate: "#FFC107",
      Certification: "#E6A817",
      Project: "#F5B400"
    };
    return colors[category] || "#F5B400";
  };

  return (
    <div className="news-container">
      {/* Hero Section */}
      <div className="news-hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <span className="hero-badge">Latest Intelligence</span>
          <h1 className="hero-title">
            News & <span className="text-gradient">Achievements</span>
          </h1>
          <p className="hero-description">
            Stay updated with Pyramid E&C’s latest achievements and industry engagements, including
            global energy events, strategic partnerships, and key technological milestones shaping
            the future of sustainable hydrocarbon solutions.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="news-grid">
        {sortedNews.map((item) => (
          <Link to={`/news/${item.id}`} key={item.id} className="news-card-link">
            <article className="news-card">
              <div className="card-icon">{item.icon}</div>
              <div className="card-content">
                <div className="card-meta">
                  <span
                    className="category-badge"
                    style={{ backgroundColor: getCategoryColor(item.category) }}
                  >
                    {item.category}
                  </span>
                  <span className="date-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 14H16M8 18H12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {item.date}
                  </span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.shortDesc}</p>
                <div className="card-footer">
                  <span className="read-more">Read announcement →</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="news-footer">
        <div className="footer-line"></div>
        <p className="footer-text">
          Pyramid E&C — Engineering sustainable solutions for tomorrow's energy landscape
        </p>
      </div>

      <style>{`
        .news-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2  rem 2rem 4rem;
          background: #ffffff;
          font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .news-hero {
          position: relative;
          margin-bottom: 4rem;
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 2rem;
          border: 1px solid rgba(245, 180, 0, 0.3);
          box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        .hero-glow {
          position: absolute;
          top: -30%;
          left: 10%;
          width: 80%;
          height: 160%;
          background: radial-gradient(circle, rgba(245, 180, 0, 0.06) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }
        .hero-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          background: linear-gradient(135deg, #F5B400, #D99A00);
          color: #000;
          padding: 0.3rem 1rem;
          border-radius: 40px;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-size: 3.2rem;
          font-weight: 800;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
          color: #1a1a1a;
        }
        .text-gradient {
          background: linear-gradient(90deg, #F5B400, #FFC107);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #4a5568;
          max-width: 780px;
          margin: 0 auto;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
          gap: 2rem;
          margin: 2rem 0 3rem;
        }
        .news-card-link {
          text-decoration: none;
          display: block;
        }
        .news-card {
          background: #ffffff;
          border-radius: 1.5rem;
          transition: all 0.35s cubic-bezier(0.2, 0, 0, 1);
          box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.06);
          display: flex;
          gap: 1.5rem;
          padding: 1.75rem;
          border: 1px solid #F5B400;
          position: relative;
          cursor: pointer;
          height: 100%;
        }
        .news-card:hover {
          transform: translateY(-6px);
          border-color: #FFC107;
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.12);
        }
        .news-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: #F5B400;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .news-card:hover::before {
          opacity: 1;
        }
        .card-icon {
          font-size: 2.5rem;
          background: rgba(245, 180, 0, 0.08);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1.2rem;
          transition: transform 0.2s;
          flex-shrink: 0;
          border: 1px solid rgba(245, 180, 0, 0.2);
        }
        .news-card:hover .card-icon {
          transform: scale(1.05);
          background: rgba(245, 180, 0, 0.15);
        }
        .card-content {
          flex: 1;
        }
        .card-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .category-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.9rem;
          border-radius: 40px;
          color: #000;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .date-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: #6c757d;
          background: #f8f9fa;
          padding: 0.25rem 0.85rem;
          border-radius: 30px;
        }
        .news-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0.5rem 0 0.8rem;
          line-height: 1.3;
          color: #1e2a3a;
          letter-spacing: -0.3px;
        }
        .news-description {
          font-size: 0.9rem;
          line-height: 1.55;
          color: #4b5563;
          margin-bottom: 1.2rem;
        }
        .read-more {
          font-size: 0.85rem;
          font-weight: 600;
          color: #F5B400;
          opacity: 0.8;
          transition: opacity 0.2s, transform 0.2s;
          display: inline-block;
        }
        .news-card:hover .read-more {
          opacity: 1;
          transform: translateX(4px);
        }
        .news-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          text-align: center;
        }
        .footer-line {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #F5B400, #FFC107, #F5B400);
          margin: 0 auto 1.5rem auto;
          border-radius: 4px;
        }
        .footer-text {
          font-size: 0.85rem;
          color: #6c757d;
          letter-spacing: 0.3px;
        }
        @media (max-width: 680px) {
          .news-container { padding: 1rem 1rem 2.5rem; }
          .news-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .news-card { flex-direction: column; padding: 1.5rem; }
          .card-icon { width: 50px; height: 50px; font-size: 2rem; }
          .hero-title { font-size: 2.3rem; }
          .news-title { font-size: 1.2rem; }
        }
        @media (max-width: 480px) {
          .card-meta { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
};

export default News;