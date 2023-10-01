const investments = [
    // Large companies
    { name: 'Vedanta', size: 'Large', industry: 'Metal & Mining', currentPrice: 222.5, week52High: 340.75, volume: 27711678 },
    { name: 'NTPC', size: 'Large', industry: 'Energy', currentPrice: 251.50, week52High: 251.50, volume: 35038887 },
    { name: 'Torrent Enterprises', size: 'Large', industry: 'Pharma', currentPrice: 1945, week52High: 2094.55, volume: 509887 },
    { name: 'Piramal Enterprises', size: 'Large', industry: 'Finance', currentPrice: 1056.95, week52High: 1139.95, volume: 952731 },
    { name: 'Hero Motocorp', size: 'Large', industry: 'Auto Manufacturers', currentPrice: 3070, week52High: 3244, volume: 375842 },
    
    // Medium companies
    { name: 'Glenmark Pharma', size: 'Medium', industry: 'Pharma', currentPrice: 861.70, week52High: 880.00, volume: 9406251 },
    { name: 'Sun TV Network', size: 'Medium', industry: 'Media', currentPrice: 615, week52High: 628.50, volume: 2784168 },
    { name: 'L&T Fin Holdings', size: 'Medium', industry: 'Finance', currentPrice: 133.50, week52High: 140.20, volume: 19676085 },
    { name: 'JSW Energy', size: 'Medium', industry: 'Energy', currentPrice: 440.29, week52High: 444.90, volume: 3958186 },
    { name: 'Bank of India', size: 'Medium', industry: 'Banks', currentPrice: 110.10, week52High: 113.80, volume: 13059779 },
    
    // Small companies
    { name: 'JBCPL', size: 'Small', industry: 'Pharma', currentPrice: 1489.50, week52High: 1524.50, volume: 180320 },
    { name: 'Sun Pharma Adv Res', size: 'Small', industry: 'Pharma', currentPrice: 233.10, week52High: 265.85, volume: 1045630 },
    { name: 'India Cements', size: 'Small', industry: 'Building Materials', currentPrice: 235.90, week52High: 282.50, volume: 6787018 },
    { name: 'Thyrocare Technologies', size: 'Small', industry: 'Healthcare', currentPrice: 574.95, week52High: 768.25, volume: 70186 },
    { name: 'Cochin Shipyard', size: 'Small', industry: 'Machinery', currentPrice: 1117.90, week52High: 1258.50, volume: 6430593 }
    // Add more investment options here
];

const sizeFilter = document.getElementById('size-filter');
const industryFilter = document.getElementById('industry-filter');
const investmentList = document.getElementById('investment-list');

function filterInvestments() {
    const selectedSize = sizeFilter.value;
    const selectedIndustry = industryFilter.value;

    const filteredInvestments = investments.filter(investment => {
        const sizeMatch = selectedSize === 'All' || investment.size === selectedSize;
        const industryMatch = selectedIndustry === 'All' || investment.industry === selectedIndustry;
        return sizeMatch && industryMatch;
    });

    displayInvestments(filteredInvestments);
}

function displayInvestments(investmentsToDisplay) {
    investmentList.innerHTML = '';
    investmentsToDisplay.forEach(investment => {
        const listItem = document.createElement('li');
        const companyLink = document.createElement('a');
        companyLink.href = `company/${investment.name.toLowerCase().replace(' ', '-')}.html`;
        companyLink.textContent = `${investment.name}`;
        listItem.appendChild(companyLink);
        listItem.innerHTML += ` - Size: ${investment.size}, Industry: ${investment.industry}, Current Price: ${investment.currentPrice}, 52-Week High: ${investment.week52High}, Volume: ${investment.volume}`;
        investmentList.appendChild(listItem);
    });
}

// Initial display of investments
displayInvestments(investments);

// Add event listeners for filter changes
sizeFilter.addEventListener('change', filterInvestments);
industryFilter.addEventListener('change', filterInvestments);
