const documents = {
    standard: {
        id: 'standard',
        name: 'Gold Standard NDA',
        summary: {
            parties: 'Company A & Undefined Counterparty',
            effectiveDate: 'Upon Signature',
            term: '3 Years',
            governingLaw: 'Delaware'
        },
        riskScore: 0,
        clauses: [
            {
                id: 'c1',
                title: 'Confidential Information Definition',
                status: 'success',
                content: 'Includes all written and oral information marked as confidential.',
                citationText: '1. "Confidential Information" means all non-public information disclosed by one party to the other, whether orally or in writing, that is designated as confidential.'
            },
            {
                id: 'c2',
                title: 'Term',
                status: 'success',
                content: 'Obligations survive for 3 years after termination.',
                citationText: '2. The obligations of confidentiality under this Agreement shall survive for a period of three (3) years from the date of disclosure.'
            },
            {
                id: 'c3',
                title: 'Liability Cap',
                status: 'success',
                content: 'Liability capped at fees paid in the last 12 months.',
                citationText: '3. In no event shall either party\'s aggregate liability exceed the total amounts paid under this agreement in the twelve months preceding the claim.'
            }
        ]
    },
    lowRisk: {
        id: 'lowRisk',
        name: 'Vendor NDA - ACME Corp',
        summary: {
            parties: 'Your Company & ACME Corp',
            effectiveDate: 'May 1, 2026',
            term: '5 Years',
            governingLaw: 'California'
        },
        riskScore: 35,
        clauses: [
            {
                id: 'c1',
                title: 'Confidential Information Definition',
                status: 'success',
                content: 'Includes all written and oral information marked as confidential.',
                citationText: '1. Definition: "Confidential Information" includes all information marked as confidential by the disclosing party.'
            },
            {
                id: 'c2',
                title: 'Term',
                status: 'warning',
                content: 'Obligations survive for 5 years after termination (Deviation from 3 years).',
                citationText: '2. Term: <span class="highlighted-text">The obligations shall survive for five (5) years</span> post-termination.',
                suggestion: 'Reduce survival period to standard 3 years.'
            },
            {
                id: 'c3',
                title: 'Governing Law',
                status: 'warning',
                content: 'California (Deviation from Delaware).',
                citationText: '3. Governing Law: This Agreement shall be governed by the laws of the <span class="highlighted-text">State of California</span>.',
                suggestion: 'Change governing law to Delaware.'
            }
        ]
    },
    highRisk: {
        id: 'highRisk',
        name: 'Partner NDA - Globex',
        summary: {
            parties: 'Your Company & Globex Inc.',
            effectiveDate: 'April 15, 2026',
            term: 'Indefinite',
            governingLaw: 'New York'
        },
        riskScore: 85,
        clauses: [
            {
                id: 'c1',
                title: 'Confidential Information Definition',
                status: 'warning',
                content: 'Only covers written information marked confidential. Excludes oral disclosures.',
                citationText: '1. "Confidential Information" means only <span class="highlighted-text">written information</span> explicitly marked as confidential. Oral disclosures are excluded unless summarized in writing within 5 days.',
                suggestion: 'Expand definition to include oral disclosures.'
            },
            {
                id: 'c2',
                title: 'Term',
                status: 'danger',
                content: 'Obligations survive indefinitely. (Deal-breaker)',
                citationText: '2. Term: The obligations of confidentiality under this Agreement shall survive <span class="highlighted-text">indefinitely</span>.',
                suggestion: 'Insert standard 3-year survival clause.'
            },
            {
                id: 'c3',
                title: 'Liability Cap',
                status: 'danger',
                content: 'Missing Liability Cap clause. Exposes company to unlimited liability.',
                citationText: '[No corresponding clause found in document]',
                suggestion: 'Insert standard liability cap: "In no event shall either party\'s aggregate liability exceed the total amounts paid under this agreement in the twelve months preceding the claim."'
            }
        ]
    }
};

const docSelect = document.getElementById('docSelect');
const analyzeBtn = document.getElementById('analyzeBtn');
const summaryContent = document.getElementById('summaryContent');
const riskWidget = document.getElementById('riskWidget');
const clauseList = document.getElementById('clauseList');
const citationModal = document.getElementById('citationModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

function renderDashboard(docId) {
    const doc = documents[docId];
    
    // Render Summary
    summaryContent.innerHTML = `
        <div class="summary-item">
            <div class="summary-label">Parties</div>
            <div class="summary-value">${doc.summary.parties}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">Effective Date</div>
            <div class="summary-value">${doc.summary.effectiveDate}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">Term</div>
            <div class="summary-value">${doc.summary.term}</div>
        </div>
        <div class="summary-item">
            <div class="summary-label">Governing Law</div>
            <div class="summary-value">${doc.summary.governingLaw}</div>
        </div>
    `;

    // Render Risk Score
    let riskColor = 'var(--success)';
    if (doc.riskScore >= 65) {
        riskColor = 'var(--danger)';
    } else if (doc.riskScore > 20) {
        riskColor = 'var(--warning)';
    }

    riskWidget.innerHTML = `
        <div class="risk-circle" style="border-color: ${riskColor}">
            <div class="risk-score" style="color: ${riskColor}">${doc.riskScore}</div>
        </div>
        <div class="risk-label">${doc.riskScore >= 65 ? 'High Risk' : (doc.riskScore > 20 ? 'Medium Risk' : 'Low Risk')}</div>
    `;

    // Render Clauses
    clauseList.innerHTML = doc.clauses.map(clause => `
        <div class="clause-item">
            <div class="clause-header">
                <div class="clause-title">${clause.title}</div>
                <span class="badge badge-${clause.status}">${clause.status === 'success' ? 'Aligned' : (clause.status === 'warning' ? 'Unfavorable' : 'Missing/Deal-breaker')}</span>
            </div>
            <div class="clause-content">${clause.content}</div>
            ${clause.suggestion ? `
                <div class="smart-suggestion">
                    <div class="suggestion-label">Smart Clause Suggestion (Gold Standard Fallback)</div>
                    <div class="suggestion-text">${clause.suggestion}</div>
                </div>
            ` : ''}
            <a class="citation-link" onclick="openCitation('${escape(clause.citationText)}')">View Source Paragraph →</a>
        </div>
    `).join('');
}

window.openCitation = function(escapedHtml) {
    modalBody.innerHTML = unescape(escapedHtml);
    citationModal.classList.add('active');
}

closeModal.addEventListener('click', () => {
    citationModal.classList.remove('active');
});

analyzeBtn.addEventListener('click', () => {
    renderDashboard(docSelect.value);
});

// Initial render
renderDashboard('lowRisk');
