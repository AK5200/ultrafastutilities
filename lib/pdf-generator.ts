import jsPDF from "jspdf";

export function generatePDF(privacyPolicy: string, termsOfService: string, cookiePolicy: string, isPaid: boolean): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  let yPos = margin;

  // Helper to add text with word wrap
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", isBold ? "bold" : "normal");
    
    const lines = doc.splitTextToSize(text, maxWidth);
    
    lines.forEach((line: string) => {
      if (yPos > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
      }
      doc.text(line, margin, yPos);
      yPos += fontSize * 0.5;
    });
    yPos += fontSize * 0.3;
  };

  // Privacy Policy
  addText("PRIVACY POLICY", 16, true);
  yPos += 5;
  privacyPolicy.split("\n").forEach(line => {
    if (line.trim()) {
      const isHeading = line.match(/^[0-9]+\./) || (line.length < 100 && line.match(/^[A-Z]/));
      addText(line, isHeading ? 12 : 10, !!isHeading);
    } else {
      yPos += 3;
    }
  });

  // Terms of Service
  doc.addPage();
  yPos = margin;
  addText("TERMS OF SERVICE", 16, true);
  yPos += 5;
  termsOfService.split("\n").forEach(line => {
    if (line.trim()) {
      const isHeading = line.match(/^[0-9]+\./) || (line.length < 100 && line.match(/^[A-Z]/));
      addText(line, isHeading ? 12 : 10, !!isHeading);
    } else {
      yPos += 3;
    }
  });

  // Cookie Policy
  doc.addPage();
  yPos = margin;
  addText("COOKIE POLICY", 16, true);
  yPos += 5;
  cookiePolicy.split("\n").forEach(line => {
    if (line.trim()) {
      const isHeading = line.match(/^[0-9]+\./) || (line.length < 100 && line.match(/^[A-Z]/));
      addText(line, isHeading ? 12 : 10, !!isHeading);
    } else {
      yPos += 3;
    }
  });


  doc.save("ultrafastutilities-documents.pdf");
}
