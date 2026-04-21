import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Add this after your imports
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [heroTextRef, heroTextInView] = useInView();
  const [contentRef, contentInView] = useInView();

  // ============================================================================
  // Full news data – all 27 items (unchanged)
  // ============================================================================
  const newsData = [
    {
      id: 1,
      title: "HYDROBLUE® SMR 1.0 RELEASED",
      date: "JAN 10, 2026",
      category: "Innovation",
      image: "/hydriblue-smr.jpg",
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
      category: "Milestone",
      image: "/sulfex1.jpg",
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
      category: "Event",
      image: "/OTC-banner.jpg",
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
      category: "Event",
      image: "/IEW-EXPO.jpg",
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
      category: "Infrastructure",
      image: "/houston-innovation-centre.jpg",
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
      category: "Partnership",
      image: "/Press-Release.jpg",
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
      category: "Infrastructure",
      image: "/prototype-development-centre-india.jpg",
      detailContent: `
        <p>We are proud to announce the inauguration of our facility for development of reactor prototype and pilot plants for the technologies offered by Pyramid E&C in the renewable hydrocarbons segment i.e. Blue and Green Hydrogen, Methanol and Ammonia from its proprietary electric reforming technology and solid oxide electrolyzers. Here, it will be possible to test modules up to 0.5 MW. The facility also houses a testing and research laboratory.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 8,
      title: "REFINING INDIA CONFERENCE 2022",
      date: "OCT 12, 2022",
      category: "Event",
      image: "/Delhi-Conference-Banner-News-Image-2.jpg",
      detailContent: `
        <h3>Refining India 2022 conference: Pyramid E&C presents decarbonization solutions</h3>
        <p>Ms. Kavita Bodh, Chief Engineer Process, presented our Electric Reformer concept coupled with Carbon dioxide liquefaction system to eliminate production of flue gases by heating fuels, thus reducing carbon intensity in refining operations by 40%. Makrand Palkar and Pankaj Narkhede also attended the conference and interacted with very important personnel from Indian public and private sector. The contents of presentation can be accessed by the link below.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 9,
      title: "DECARBONIZATION SOLUTIONS PORTFOLIO",
      date: "AUG 01, 2022",
      category: "Sustainability",
      image: "/nwes22.jpg",
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
      category: "Innovation",
      image: "/news-4.jpg",
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
      category: "Product",
      image: "/Oil-And-Gas-Production-Solutions.jpg",
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
      category: "Achievement",
      image: "/Pyramid-EC-25-Years.jpg",
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
      category: "Product",
      image: "/Modular-Refining-Solutions.jpg",
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
      category: "Milestone",
      image: "/Ecomar_Refinery_Fujairah.jpg",
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
      category: "Operations",
      image: "/COVID-19-2.jpg",
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
      category: "Partnership",
      image: "/Taqa3.jpg",
      detailContent: `
        <p>Pyramid E&C secured an engineering Master Service agreement with Taqa Atrush BV, through a competitive bidding process by Ministry of Natural Resources, Kurdistan. The work entails engineering and project management services for upgrade of their existing production facilities which are producing 30000 BPD to add another 30000 BPD and associated natural gas for delivery to the domestic market. TAQA is the operator of the Atrush Block, which is located 85 km northwest of Erbil City.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 17,
      title: "140 MTPA CARBON BLACK PLANT COMMISSIONED",
      date: "JUL 18, 2019",
      category: "Project",
      image: "/Press-Release-Website.jpg",
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
      category: "Milestone",
      image: "/Press-Release-Website-version.jpg",
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
      category: "Certification",
      image: "/ISN-logo.jpg",
      detailContent: `
        <p>Rapidly moving into the US hydrocarbon industry, Pyramid E&C is now geared up to deliver full EPC services complying with the US Hydrocarbon industry safety standards and ISNET Certification is a testimony to that. ISNetworld is the main US online contractor and supplier management platform to mitigate risk and corporate liability of the customers. ISNET is used by 650 asset owners and 75,000 active contractors and suppliers mainly in the United States construction industry.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 20,
      title: "CENTENNIAL GAS PLANT DELIVERED",
      date: "MAR 10, 2016",
      category: "Project",
      image: "/Centennial-Gas-Plant2.jpg",
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
      category: "Corporate",
      image: "/TSI4.jpg",
      detailContent: `
        <p>Pyramid E&C completed the acquisition of Turnkey Specialists Inc., Houston (TSI). Founded in 1996, TSI has completed 270 projects in Midstream segment comprising of Gas Plants, Compressor Stations, Hydrocarbon storage facilities and pipelines in 10 US states. TSI has prestigious long standing clientele e.g. Kinder Morgan, Mark West partners, Crestwood Midstream and a number of service firms. With this acquisition, Pyramid E&C gets a foothold in US midstream industry as well as ability to utilise the Midstream know how and experience internationally.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 22,
      title: "PYRAMID E&C, INDIA INAUGURATES ENGINEERING CENTRE OF EXCELLENCE",
      date: "SEP 04, 2014",
      category: "Infrastructure",
      image: "/Engineering-Centre-of-Excellence.jpg",
      detailContent: `
        <p>Pyramid E&C unveiled the new, state of the art engineering facility at Thane in Mumbai, India. Thane is one of the main hubs for hydrocarbon engineering and manufacturing in India. This facility admeasures 50 000 ft² and can seat 476 project managers, engineers and designers. The working space is equipped with state of the art communication systems and special provision for large scale training. With a 50 personnel capacity auditorium and exclusive design workshop facility, this centre is geared to handle the larger, global hydrocarbon projects with ease.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 23,
      title: "GKP AWARDS FEED CONTRACT TO PYRAMID E&C, ME",
      date: "NOV 11, 2013",
      category: "Contract",
      image: "/GKP3.jpg",
      detailContent: `
        <p>Pyramid E&C secured an engineering Master Service agreement with Gulf Keystone Partners Ltd., Erbil through a competitive bidding process by Ministry of Natural Resources (MNR). The work entails engineering and project management services for upgrade of their existing production facilities PF1/ PF2 at Shaikan field in Kurdistan Region of Iraq and FEED for a new Central production facility. Pyramid E&C had been working for several international oil companies in Iraq since 2008 and this will be the 47th assignment in Kurdistan. The duration of FEED will be about 6 Months followed by a cost estimation phase of 2 months.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    },
    {
      id: 24,
      title: "MODULAR REFINERY AWARD TO PYRAMID E&C, ME",
      date: "JUL 02, 2012",
      category: "Project",
      image: "/MiniRefinery3.jpg",
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
      category: "Milestone",
      image: "/newsimg250.jpg",
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
      category: "Infrastructure",
      image: "/mundra-yard.png",
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
      category: "Certification",
      image: "/jsrs3.jpg",
      detailContent: `
        <p>After working for several years in Europe, Pyramid E&C applied into Achilles / FPAL Joint Qualification System used by several energy asset owners in UK and Scandinavia for supplier due diligence. Achilles / FPAL places strong emphasis to Management Systems, Information security and business continuity of the supplier organisation in which Pyramid E&C fared with ease and success.</p>
        <p>The Achilles JQS community, created in 1991, provides operators, main contractors and suppliers with an industry accepted procurement service that streamlines procurement, manages risk and enables compliance with the relevant EU procurement directives. Achilles has a controlling interest in FPAL.</p>
        <p>Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider comprising of research, engineering, automation, digitalization, manufacturing and construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals where it supplies sustainable, low carbon impact, blue and green processing solutions.</p>
      `
    }
  ];

  const newsItem = newsData.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">News article not found</h2>
        <Link to="/news" className="text-amber-500 hover:text-amber-600 font-semibold">← Back to all news</Link>
      </div>
    );
  }



  // Generate random bubbles for hero
  const generateBubbles = (count, baseSize = 20, sizeRange = 40) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * sizeRange + baseSize,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 8,
      opacity: Math.random() * 0.3 + 0.2,
    }));
  };

  const heroBubbles = generateBubbles(18, 15, 50);

  const animationStyles = `
    @keyframes bubbleFloat {
      0% { transform: translateY(0) scale(0.2); opacity: 0; }
      20% { opacity: 0.6; }
      80% { opacity: 0.4; }
      100% { transform: translateY(-100vh) scale(1); opacity: 0; }
    }
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp { animation: fadeUp 0.6s ease-out forwards; }
  `;

  return (
    <div className="bg-white min-h-screen">
      <style>{animationStyles}</style>

      {/* Hero Section – Navbar gradient + bubbles (no image) */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {heroBubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                bottom: "-50px",
                opacity: bubble.opacity,
                animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
                animationDelay: `${bubble.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <button
            onClick={() => navigate('/news')}
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-amber-400 transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all news
          </button>

          <div
            ref={heroTextRef}
            className="text-center transition-all duration-700"
            style={{
              opacity: heroTextInView ? 1 : 0,
              transform: heroTextInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Pill badge – brand style */}
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)] mb-4">
              {newsItem.category}
            </span>

            {/* Gradient heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              {newsItem.title}
            </h1>

            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />

            {/* Date */}
            <div className="flex items-center justify-center gap-2 text-gray-300 text-sm mt-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {newsItem.date}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section – unchanged */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={contentRef}
            className="bg-white rounded-2xl border-l-4 border-amber-500 shadow-md overflow-hidden transition-all duration-700"
            style={{
              opacity: contentInView ? 1 : 0,
              transform: contentInView ? "translateY(0)" : "translateY(40px)",
            }}
          >
            {newsItem.image && (
              <div className="w-full overflow-hidden">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-auto max-h-[500px] object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            )}
            <div className="p-6 md:p-8 lg:p-10">
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-amber-600 prose-a:text-amber-500 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: newsItem.detailContent }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional styles for rendered HTML (unchanged) */}
      <style>{`
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          border-left: 4px solid #F5B400;
          padding-left: 1rem;
        }
        .prose ul, .prose ol {
          margin: 1.25rem 0;
          padding-left: 1.8rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose a {
          color: #F5B400;
          text-decoration: none;
          border-bottom: 1px dashed #F5B400;
        }
        .prose a:hover {
          color: #D99A00;
          border-bottom-style: solid;
        }
        .prose p:last-of-type {
          background: #fefce8;
          padding: 1.2rem 1.5rem;
          border-radius: 1rem;
          margin-top: 2rem;
          font-size: 0.95rem;
          border-left: 4px solid #F5B400;
          color: #1e293b;
        }
        @media (max-width: 768px) {
          .prose p:last-of-type {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsDetail;