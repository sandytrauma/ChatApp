function downloadResume() {
    const resumeContent = document.getElementById('resume-content').innerHTML;
    const fileName = 'resume_template.png';

    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'application/png' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }