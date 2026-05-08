const documents = {
    standard: {
        id: 'standard',
        name: 'Gold Standard NDA',
        summary: [
            { label: 'Parties', value: 'Company A & Undefined Counterparty' },
            { label: 'Effective Date', value: 'Upon Signature' },
            { label: 'Term', value: '3 Years' },
            { label: 'Survival Period', value: '3 Years post-termination' },
            { label: 'Governing Law', value: 'Delaware' },
            { label: 'Venue', value: 'Wilmington, Delaware' },
            { label: 'Notice Period', value: '30 Days' }
        ],
        riskScore: 0,
        riskBreakdown: [],
        clauses: [
            {
                id: 'c1', title: 'Confidential Information Definition', status: 'success',
                content: 'Includes all written and oral information marked as confidential.',
                citationText: '1. "Confidential Information" means all non-public information disclosed by one party to the other, whether orally or in writing, that is designated as confidential.'
            },
            {
                id: 'c2', title: 'Term & Survival', status: 'success',
                content: 'Obligations survive for 3 years after termination.',
                citationText: '2. Term: The obligations of confidentiality under this Agreement shall survive for a period of three (3) years from the date of disclosure.'
            },
            {
                id: 'c3', title: 'Non-Solicitation', status: 'success',
                content: 'Mutual 12-month non-solicit of employees.',
                citationText: '3. Non-Solicitation: During the term and for 12 months thereafter, neither party shall solicit the employees of the other.'
            },
            {
                id: 'c4', title: 'Permitted Purpose', status: 'success',
                content: 'Strictly limited to evaluating a potential business relationship.',
                citationText: '4. Purpose: The Receiving Party shall use the Confidential Information solely for the purpose of evaluating a potential business relationship.'
            },
            {
                id: 'c5', title: 'Required Disclosures', status: 'success',
                content: 'Requires prompt written notice prior to subpoena compliance.',
                citationText: '5. Legally Required Disclosure: If required by law, Receiving Party must provide prompt written notice to Disclosing Party prior to disclosure.'
            },
            {
                id: 'c6', title: 'Return/Destruction', status: 'success',
                content: 'Within 10 days of request, with written certification.',
                citationText: '6. Return of Materials: Upon request, all materials must be returned or destroyed within 10 days, certified in writing.'
            },
            {
                id: 'c7', title: 'Injunctive Relief', status: 'success',
                content: 'Acknowledges right to seek injunctive relief without posting bond.',
                citationText: '7. Equitable Relief: The parties agree that breach would cause irreparable harm, entitling the non-breaching party to injunctive relief without posting bond.'
            },
            {
                id: 'c8', title: 'No License Granted', status: 'success',
                content: 'Explicitly states no IP rights are transferred.',
                citationText: '8. No License: Nothing herein grants any license or rights to the Disclosing Party’s intellectual property.'
            },
            {
                id: 'c9', title: 'Integration / Entire Agreement', status: 'success',
                content: 'Standard integration clause.',
                citationText: '9. Entire Agreement: This Agreement constitutes the entire understanding between the parties.'
            },
            {
                id: 'c10', title: 'Governing Law', status: 'success',
                content: 'Delaware law applies.',
                citationText: '10. Governing Law: This Agreement shall be governed by the laws of the State of Delaware.'
            },
            {
                id: 'c11', title: 'Liability Cap', status: 'success',
                content: 'Liability capped at fees paid in the last 12 months.',
                citationText: '11. Limitation of Liability: In no event shall either party\'s aggregate liability exceed the total amounts paid under this agreement in the twelve months preceding the claim.'
            }
        ]
    },
    lowRisk: {
        id: 'lowRisk',
        name: 'Vendor NDA - ACME Corp',
        summary: [
            { label: 'Parties', value: 'Your Company & ACME Corp' },
            { label: 'Effective Date', value: 'May 1, 2026' },
            { label: 'Term', value: '5 Years' },
            { label: 'Survival Period', value: '5 Years post-termination' },
            { label: 'Governing Law', value: 'California' },
            { label: 'Venue', value: 'San Francisco, CA' },
            { label: 'Notice Period', value: '15 Days' }
        ],
        riskScore: 35,
        riskBreakdown: [
            { reason: 'Extended survival period (5 years)', score: '+15', type: 'warning' },
            { reason: 'Non-standard Governing Law (CA)', score: '+10', type: 'warning' },
            { reason: 'Missing Non-Solicitation clause', score: '+10', type: 'warning' }
        ],
        clauses: [
            { id: 'c1', title: 'Confidential Information Definition', status: 'success', content: 'Includes all written and oral information marked as confidential.', citationText: '1. Definition: "Confidential Information" includes all information marked as confidential by the disclosing party.' },
            { id: 'c2', title: 'Term & Survival', status: 'warning', content: 'Obligations survive for 5 years after termination (Deviation from 3 years).', citationText: '2. Term: <span class="highlighted-text">The obligations shall survive for five (5) years</span> post-termination.', suggestion: 'Reduce survival period to standard 3 years.' },
            { id: 'c3', title: 'Non-Solicitation', status: 'warning', content: 'Clause is entirely missing from the document.', citationText: '[No corresponding clause found in document]', suggestion: 'Insert standard mutual non-solicitation clause (12 months).' },
            { id: 'c4', title: 'Permitted Purpose', status: 'success', content: 'Strictly limited to evaluating a potential business relationship.', citationText: '4. Purpose: The Receiving Party shall use the Confidential Information solely for evaluating a business relationship.' },
            { id: 'c5', title: 'Required Disclosures', status: 'success', content: 'Requires prompt written notice prior to subpoena compliance.', citationText: '5. Legally Required Disclosure: If required by law, Receiving Party must provide prompt written notice.' },
            { id: 'c6', title: 'Return/Destruction', status: 'success', content: 'Within 10 days of request, with written certification.', citationText: '6. Return of Materials: Upon request, all materials must be returned or destroyed within 10 days.' },
            { id: 'c7', title: 'Injunctive Relief', status: 'success', content: 'Acknowledges right to seek injunctive relief without posting bond.', citationText: '7. Equitable Relief: The parties agree that breach would cause irreparable harm, entitling the non-breaching party to injunctive relief.' },
            { id: 'c8', title: 'No License Granted', status: 'success', content: 'Explicitly states no IP rights are transferred.', citationText: '8. No License: Nothing herein grants any license or rights.' },
            { id: 'c9', title: 'Integration / Entire Agreement', status: 'success', content: 'Standard integration clause.', citationText: '9. Entire Agreement: This Agreement constitutes the entire understanding.' },
            { id: 'c10', title: 'Governing Law', status: 'warning', content: 'California (Deviation from Delaware).', citationText: '10. Governing Law: This Agreement shall be governed by the laws of the <span class="highlighted-text">State of California</span>.', suggestion: 'Change governing law to Delaware.' },
            { id: 'c11', title: 'Liability Cap', status: 'success', content: 'Liability capped at fees paid in the last 12 months.', citationText: '11. Limitation of Liability: Liability shall not exceed amounts paid in the last twelve months.' }
        ]
    },
    highRisk: {
        id: 'highRisk',
        name: 'Partner NDA - Globex',
        summary: [
            { label: 'Parties', value: 'Your Company & Globex Inc.' },
            { label: 'Effective Date', value: 'April 15, 2026' },
            { label: 'Term', value: 'Indefinite' },
            { label: 'Survival Period', value: 'Indefinite' },
            { label: 'Governing Law', value: 'New York' },
            { label: 'Venue', value: 'New York, NY' },
            { label: 'Notice Period', value: '5 Days' }
        ],
        riskScore: 85,
        riskBreakdown: [
            { reason: 'Missing Liability Cap', score: '+40', type: 'danger' },
            { reason: 'Indefinite Term / Survival', score: '+25', type: 'danger' },
            { reason: 'Narrow Confidentiality Definition (Excludes Oral)', score: '+10', type: 'warning' },
            { reason: 'Missing Injunctive Relief clause', score: '+10', type: 'warning' }
        ],
        clauses: [
            { id: 'c1', title: 'Confidential Information Definition', status: 'warning', content: 'Only covers written information marked confidential. Excludes oral disclosures.', citationText: '1. "Confidential Information" means only <span class="highlighted-text">written information</span> explicitly marked as confidential. Oral disclosures are excluded unless summarized in writing within 5 days.', suggestion: 'Expand definition to include oral disclosures without written summary requirement.' },
            { id: 'c2', title: 'Term & Survival', status: 'danger', content: 'Obligations survive indefinitely. (Deal-breaker)', citationText: '2. Term: The obligations of confidentiality under this Agreement shall survive <span class="highlighted-text">indefinitely</span>.', suggestion: 'Insert standard 3-year survival clause.' },
            { id: 'c3', title: 'Non-Solicitation', status: 'success', content: 'Mutual 12-month non-solicit of employees.', citationText: '3. Non-Solicitation: During the term and for 12 months thereafter, neither party shall solicit.' },
            { id: 'c4', title: 'Permitted Purpose', status: 'success', content: 'Strictly limited to evaluating a potential business relationship.', citationText: '4. Purpose: The Receiving Party shall use the Confidential Information solely for evaluating a potential business relationship.' },
            { id: 'c5', title: 'Required Disclosures', status: 'warning', content: 'Does NOT require prompt written notice before disclosure.', citationText: '5. Legally Required Disclosure: <span class="highlighted-text">If required by law, Receiving Party may disclose</span> information without prior notice to the Disclosing Party.', suggestion: 'Require prompt written notice prior to subpoena compliance so we can seek a protective order.' },
            { id: 'c6', title: 'Return/Destruction', status: 'warning', content: 'Return required within 30 days, no written certification.', citationText: '6. Return of Materials: Upon request, all materials must be returned <span class="highlighted-text">within 30 days</span>.', suggestion: 'Change return period to 10 days and require written certification of destruction.' },
            { id: 'c7', title: 'Injunctive Relief', status: 'danger', content: 'Clause is entirely missing from the document.', citationText: '[No corresponding clause found in document]', suggestion: 'Insert standard equitable/injunctive relief clause to protect against immediate harm.' },
            { id: 'c8', title: 'No License Granted', status: 'success', content: 'Explicitly states no IP rights are transferred.', citationText: '8. No License: Nothing herein grants any license or rights.' },
            { id: 'c9', title: 'Integration / Entire Agreement', status: 'success', content: 'Standard integration clause.', citationText: '9. Entire Agreement: This Agreement constitutes the entire understanding.' },
            { id: 'c10', title: 'Governing Law', status: 'warning', content: 'New York (Deviation from Delaware).', citationText: '10. Governing Law: This Agreement shall be governed by the laws of the <span class="highlighted-text">State of New York</span>.', suggestion: 'Change governing law to Delaware.' },
            { id: 'c11', title: 'Liability Cap', status: 'danger', content: 'Missing Liability Cap clause. Exposes company to unlimited liability.', citationText: '[No corresponding clause found in document]', suggestion: 'Insert standard liability cap: "In no event shall either party\'s aggregate liability exceed the total amounts paid under this agreement in the twelve months preceding the claim."' }
        ]
    }
};

const docSelect = document.getElementById('docSelect');
const analyzeBtn = document.getElementById('analyzeBtn');

// Tab logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding pane
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Render logic
function renderDashboard(docId) {
    const doc = documents[docId];
    
    // 1. Render Summarization Tab
    const summaryContent = document.getElementById('summaryContent');
    summaryContent.innerHTML = doc.summary.map(item => `
        <div class="summary-item">
            <div class="summary-label">${item.label}</div>
            <div class="summary-value">${item.value}</div>
        </div>
    `).join('');

    // 2. Render Gap Analysis Tab
    const gapClauseList = document.getElementById('gapClauseList');
    gapClauseList.innerHTML = doc.clauses.map(clause => `
        <div class="clause-item">
            <div class="clause-header">
                <div class="clause-title">${clause.title}</div>
                <span class="badge badge-${clause.status}">${clause.status === 'success' ? 'Aligned' : (clause.status === 'warning' ? 'Unfavorable' : 'Missing/Deal-breaker')}</span>
            </div>
            <div class="clause-content">${clause.content}</div>
        </div>
    `).join('');

    // 3. Render Risk Heatmapping Tab
    const riskWidget = document.getElementById('riskWidget');
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

    const riskBreakdownContent = document.getElementById('riskBreakdownContent');
    if (doc.riskBreakdown.length === 0) {
        riskBreakdownContent.innerHTML = '<p style="color: var(--text-secondary);">No significant risks identified. Document is aligned with Gold Standard.</p>';
    } else {
        riskBreakdownContent.innerHTML = doc.riskBreakdown.map(item => `
            <div class="breakdown-item">
                <div class="breakdown-reason">${item.reason}</div>
                <div class="breakdown-score ${item.type}">${item.score > 0 ? '+' : ''}${item.score} points</div>
            </div>
        `).join('');
    }

    // 4. Render Smart Suggestions Tab
    const suggestionsList = document.getElementById('suggestionsList');
    const problematicClauses = doc.clauses.filter(c => c.suggestion);
    if (problematicClauses.length === 0) {
        suggestionsList.innerHTML = '<p style="color: var(--text-secondary); padding: 20px 0;">No deviations found. No fallback language required.</p>';
    } else {
        suggestionsList.innerHTML = problematicClauses.map(clause => `
            <div class="clause-item">
                <div class="clause-header">
                    <div class="clause-title">${clause.title}</div>
                </div>
                <div class="clause-content" style="text-decoration: line-through; opacity: 0.7;">Original: ${clause.content}</div>
                <div class="smart-suggestion">
                    <div class="suggestion-label">Gold Standard Fallback</div>
                    <div class="suggestion-text">${clause.suggestion}</div>
                </div>
            </div>
        `).join('');
    }

    // 5. Render Audit-Ready Citations Tab
    const citationsList = document.getElementById('citationsList');
    citationsList.innerHTML = doc.clauses.map(clause => `
        <div class="clause-item">
            <div class="clause-header">
                <div class="clause-title">${clause.title}</div>
            </div>
            <a class="citation-link" onclick="openCitation('${escape(clause.citationText)}')">View Extracted Source Paragraph →</a>
        </div>
    `).join('');
}

// Modal Logic
const citationModal = document.getElementById('citationModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

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
