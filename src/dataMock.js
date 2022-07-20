const stockData = [
    {
        "name": "BMFBOVESPA:PRIO3",
        "description": "PETRORIO",
        "simbol": "PRIO3",
        "value": "22.09",
        "variation": "+6.71",
        "about": "Petro Rio SA is a holding company, which engages in the exploration and production of oil and natural gas through its subsidiaries. It holds interest in other companies as partner, shareholder, or quotaholder, in Brazil and abroad. Its projects include the Polvo Field, Manati Field, Frade Field, and Foz Do Amazonas. The company was founded by Marcio Rocha Mello on October 13, 2008 and is headquartered in Rio de Janeiro, Brazil."
    },
    {
        "name": "BMFBOVESPA:EZTC3",
        "description": "EZTEC ON NM",
        "simbol": "EZTC3",
        "value": "15.04",
        "variation": "-5.88",
        "about": "EZ TEC Empreendimentos e Participaçoes SA operates as a real estate development company. It operates through two segments: Commercial and Residential. The company was founded on June 6, 2007 and is headquartered in Sao Paulo, Brazil."
    },
    {
        "name": "BMFBOVESPA:BRFS3",
        "description": "BRF SA ON NM",
        "simbol": "BRFS3",
        "value": "14.65",
        "variation": "-5.67",
        "about": "BRF SA engages in the production and distribution of fresh and frozen protein foods. Its processed products include marinated and frozen chicken, rooster and turkey meats, specialty meats, frozen processed meats, frozen prepared entrees, portioned products, and sliced products. The firm also offers margarine, butter, cream cheese, sweet specialties, sandwiches, plant-based products, and animal feed. It operates through the following business segments: Brazil, International, and Other. The company was founded on August 18, 1934 and is headquartered in Sao Paulo, Brazil."
    },
    {
        "name": "BMFBOVESPA:PETZ3",
        "description": "PETZ ON NM",
        "simbol": "PETZ3",
        "value": "9.67",
        "variation": "-5.10",
        "about": "Pet Center Comércio e Participações SA engages in the sale of pet products. It offers food; toys; beds and houses; health and beauty products; medicines; collars; straps and flank straps; accessories for transportation; aquariums; cages; and grooming machine. The company was founded by Sérgio Zimerman in 2002 and is headquartered in Sao Paulo, Brazil."
    },
    {
        "name": "BMFBOVESPA:MRFG3",
        "description": "MARFRIG ON NM",
        "simbol": "MRFG3",
        "value": "11.78",
        "variation": "-4.46",
        "about": "Marfrig Global Foods SA engages in the production, processing, and trade of meat products and food made from animal proteins. It operates through the following reportable business segments: Beef and Keystone. The Beef segment engages in marketing, promotion, and export of beef. The Keystone segment is a supplier of processed food made from animal protein to global restaurant chains, with operations concentrated in the United States and Asia. The company was founded by Marcos Antônio Molina dos Santos in 1986 and is headquartered in São Paulo, Brazil."
    },
    {
        "name": "BMFBOVESPA:LWSA3",
        "description": "LOCAWEB ON NM",
        "simbol": "LWSA3",
        "value": "5.49",
        "variation": "-4.02",
        "about": "Locaweb Serviços de Internet SA engages in the provision of business to business solutions for digital business transformation. It operates through the Be Online and Software as a Service (SaaS) and Commerce segments. The Be Online & SaaS segment consists of s hosting and cloud services as well as email, marketing intelligence software and site builder. The Commerce segment deals with e-commerce solutions, platform, marketplace integration and sub-acquiring business services. The company was founded by Gilberto Mautner and Claudio Gora on October 29, 1997 and is headquartered in Sao Paulo, Brazil."
    },
    {
        "name": "BMFBOVESPA:VALE3",
        "description": "VALE ON NM",
        "simbol": "VALE3",
        "value": "68.73",
        "variation": "+0.53",
        "about": "Vale SA engages in the production and exportation of iron ore, pellets, manganese, and iron alloys. It operates through the following segments: Ferrous Minerals, Base Metals, and Coal. The Ferrous Minerals segment includes the production and extraction of iron ore, iron ore pellets, manganese, other ferrous products, and logistic services. The Base Metals segment involves the production and extraction of nickel and its by-products. The Coal segment consists of the production and extraction of metallurgical and thermal coal and its logistic services. The company was founded on June 1, 1942 and is headquartered in Rio de Janeiro, Brazil."
    },
    {
        "name": "BMFBOVESPA:PETR4",
        "description": "PETROBRAS PN N2",
        "simbol": "PETR4",
        "value": "28.60",
        "variation": "+2.29",
        "about": "Petróleo Brasileiro SA engages in oil and gas exploration, production, and distribution activities. It operates through the following segments: Exploration and Production; Refining, Transportation, and Marketing; Gas and Power; and Corporate and Other Business. The Exploration and Production segment involves crude oil, natural gas liquids, and natural gas exploration, development, and production. The Refining, Transportation and Marketing segment involves refining, logistics, transportation, trading operations, oil products and crude oil exports and imports, and petrochemical investments. The Gas and Power segment includes transportation and trading of natural and liquefied natural gas, the generation and trading of electric power, and the fertilizer business. The Corporate and Other Business segment comprises the financing activities not attributable to other segments including corporate financial management, and central administrative overhead and actuarial expenses. The company was founded on October 3, 1953 and is headquartered in Rio de Janeiro, Brazil."
    },
    {
        "name": "BMFBOVESPA:MGLU3",
        "description": "MAGAZINE LUIZA ON NM",
        "simbol": "MGLU3",
        "value": "2.77",
        "variation": "-0.36",
        "about": "Magazine Luiza SA is a technology and logistics company focused on the retail sector. It operates through the following segments: Retail; Financial operations; Insurance operations; and Other Services. The Retail segment engages in resale of goods and rendering of services in the Company’s stores and ecommerce (traditional e-commerce and marketplace) and Aiqfome acting as intermediary. The Financial operations segment engages in the offer of credit to customers of the Company for the acquisition of products. The Insurance operations segment engages in the offer of extended warranties of products purchased by the Company's customers. The Other Services segment comprises the rendering of consortium management services. The company was founded on November 16, 1957 and is headquartered in Sao Paulo, Brazil."
    },
    {
        "name": "BMFBOVESPA:ITUB4",
        "description": "ITAUUNIBANCOPN N1",
        "simbol": "ITUB4",
        "value": "22.85",
        "variation": "+1.33",
        "about": "Itaú Unibanco Holding SA provides financial products and services to individual and corporate clients in Brazil and abroad. It operates through the following segments: Retail Banking, Wholesale Banking, and Activities with the Market and Corporation. The Retail Banking segment includes credit cards, asset management, insurance, pension plan and capitalization products, and a variety of credit products and services for individuals and small companies. The Wholesale Bank segment offers corporate and investment banking activities, including its middle-market banking business. The Activities with the Market and Corporation segment deals with the result arising from capital surplus, subordinated debt surplus and the net balance of tax credits and debts. The company was founded in 1924 and is headquartered in São Paulo, Brazil."
    },
    {
        "name": "BMFBOVESPA:BBDC4",
        "description": "BRADESCO PN N1",
        "simbol": "BBDC4",
        "value": "16.65",
        "variation": "+1.28",
        "about": "Banco Bradesco SA engages in the provision of financial and insurance services. It operates through Banking, and Insurance segments. The Banking segment includes banking activities. The Insurance segment covers auto, health, life, accident and property insurance, and pension plans aw well as capitalization bonds. The company was founded by Amador Aguiar on March 10, 1943 and is headquartered in Osasco, Brazil."
    },
    {
        "name": "BMFBOVESPA:SLCE3",
        "description": "SLC AGRICOLA ON NM",
        "simbol": "SLCE3",
        "value": "41.15",
        "variation": "+4.36",
        "about": "SLC Agricola SA engages in the production and trade of agricultural products. It operates through the following segments: Agricultural Production and Land Investments. The Agricultural Production segment engages in the cultivation of primarily cotton, soybean and corn. The Land Investments segment engages in the acquisition and development of land for agriculture. The company was founded on June 3, 1977 and is headquartered in Porto Alegre, Brazil."
    },
    {
        "name": "BMFBOVESPA:CIEL3",
        "description": "CIELO ON NM",
        "simbol": "CIEL3",
        "value": "4.18",
        "variation": "+2.96",
        "about": "Cielo SA engages in the provision of payment processing solutions. The firm provides services related to credit and debit cards and other means of payment, including signing up of merchants and service providers, rental, installation and maintenance of POS (point-of-sale) terminals, data capture and processing of electronic and manual transactions, as well as the issuance and management of payment accounts. Its products include Sky Mobile with Reader, Sky ZIP, wired and wireless machine, 3G and wi-fi machine, Sky IOL, TEF, Sky mobile, and payment by Link. The company was founded on November 23, 1995 and is headquartered in Barueri, Brazil."
    },
    {
        "name": "BMFBOVESPA:JHSF3",
        "description": "JHSF PART ON NM",
        "simbol": "JHSF3",
        "value": "5.72",
        "variation": "+3.06",
        "about": "JHSF Participações SA operates as a holding company. The firm engages in the development of real estate properties. It operates through the following segments: Incorporations & Airport, Recurring Income, Hotels & Restaurants and Holding Company. The Recurring Income segment comprises of the shopping malls, shopping mall services, supply of energy and telecommunications, and retail of high-end retail brands. The Hotel & Restaurants segment consists of hotel and restaurant operations which include Angra dos Reis, Belo Horizonte, Salvador, Trancoso, Miami, Sao Paulo, Rio de Janeiro and Brasilia. The Holding Company segment refers to the administrative central office. The company was founded in 1972 and is headquartered in Sao Paulo, Brazil."
    },
    {
        "name": "BMFBOVESPA:RAIL3",
        "description": "RUMO S.A. ON NM",
        "simbol": "RAIL3",
        "value": "15.79",
        "variation": "+2.93",
        "about": "RUMO SA engages in the provision of logistics services. It offers integrated transport solution, handling, storage, and shipment from the production centers to the main southern and southeast ports. It operates through the following segments: Northern Operations, South Operations, and Container Operations. The North Operations segment comprises of the railway operations, road operations, transshipment and port elevation in the areas of the company concession, Elevações Portuárias, Rumo Malha Norte, and Rumo Malha Paulista. The South Operations segment covers railway and transshipment in the concession area of Rumo Malha Sul, and Rumo Malha Oeste. The Container Operations segment refers to the group company that focuses on container logistics either by rail or road transport, and other container operations results. The company was founded on September 30, 1997 and is headquartered in Curitiba, Brazil."
    }
]

export default stockData;