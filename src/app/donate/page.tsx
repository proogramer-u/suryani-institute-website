import { organization } from "@/data/organization";

export default function Page() {
  return (
    <section className="placeholder-section donation-page" aria-labelledby="donate-title">
      <div className="page-container reading-width">
        <p className="section-label">Support SIMH</p>
        <h1 id="donate-title">Help support mental health care rooted in community.</h1>
        <p className="placeholder-section__message">The following donation details are currently available. Currency and receipt procedures remain pending confirmation.</p>
        <div className="donation-details" aria-labelledby="donation-details-title">
          <h2 id="donation-details-title">Bank transfer details</h2>
          <dl>
            <div><dt>Recipient</dt><dd>{organization.donation.recipient}</dd></div>
            <div><dt>Bank</dt><dd>{organization.donation.bank}</dd></div>
            <div><dt>Branch</dt><dd>{organization.donation.branch}</dd></div>
            <div><dt>Account number</dt><dd>{organization.donation.accountNumber}</dd></div>
            <div><dt>Currency</dt><dd>{organization.donation.currency}</dd></div>
            <div><dt>Receipt process</dt><dd>{organization.donation.receiptProcess}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
