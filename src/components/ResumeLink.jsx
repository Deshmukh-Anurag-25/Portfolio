const RESUME_PATH = '/assets/Anurag_Deshmukh_Resume.pdf';

function triggerResume(e) {
  e.preventDefault();
  window.open(RESUME_PATH, '_blank');
  const a = document.createElement('a');
  a.href = RESUME_PATH;
  a.download = 'Anurag_Deshmukh_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function ResumeLink({ className, children }) {
  return (
    <a className={className} href={RESUME_PATH} onClick={triggerResume}>
      {children}
    </a>
  );
}
