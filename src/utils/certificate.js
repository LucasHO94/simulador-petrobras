import { jsPDF } from "jspdf";

export const generateCertificate = (userName, score, date, cargo = "Analista de Sistemas") => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Fundo com gradiente simulado (faixas sutis)
  doc.setFillColor(248, 250, 252); // slate-50
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  // Bordas duplas premium
  doc.setDrawColor(22, 163, 74); // green-600
  doc.setLineWidth(2);
  doc.rect(5, 5, pageWidth - 10, pageHeight - 10);

  doc.setDrawColor(30, 41, 59); // slate-800
  doc.setLineWidth(0.5);
  doc.rect(8, 8, pageWidth - 16, pageHeight - 16);

  // Tarja verde do topo
  doc.setFillColor(22, 163, 74);
  doc.rect(5, 5, pageWidth - 10, 14, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("SIMULADO PETROBRAS 2026 — PADRÃO CESGRANRIO", pageWidth / 2, 13, { align: "center" });

  // Cabeçalho Principal
  doc.setTextColor(30, 41, 59);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  doc.text("CERTIFICADO DE APROVAÇÃO", pageWidth / 2, 42, { align: "center" });

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text("Plataforma Oficial de Preparação para o Concurso Petrobras", pageWidth / 2, 52, { align: "center" });

  // Linha divisória
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(30, 58, pageWidth - 30, 58);

  // Corpo
  doc.setTextColor(71, 85, 105); // slate-600
  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  doc.text("Certificamos que o(a) candidato(a)", pageWidth / 2, 72, { align: "center" });

  // Nome em destaque
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(22, 163, 74); // green-600
  doc.text(userName.toUpperCase(), pageWidth / 2, 90, { align: "center" });

  doc.setTextColor(30, 41, 59);
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("concluiu com êxito o Simulado Avançado — Modo Prova Real, atingindo", pageWidth / 2, 106, { align: "center" });

  // Pontuação em destaque
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(22, 163, 74);
  doc.text(`${score}% DE APROVEITAMENTO`, pageWidth / 2, 120, { align: "center" });

  // Ênfase
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(13);
  doc.setFont("helvetica", "normal");
  doc.text(`Ênfase: ${cargo}`, pageWidth / 2, 133, { align: "center" });

  doc.setFontSize(11);
  doc.setTextColor(100, 116, 139);
  doc.text("Língua Portuguesa • Língua Inglesa • Conhecimentos Específicos da Ênfase", pageWidth / 2, 143, { align: "center" });

  // Linha divisória inferior
  doc.setDrawColor(226, 232, 240);
  doc.line(30, 152, pageWidth - 30, 152);

  // Rodapé
  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105);
  doc.text(`Emitido em: ${date}`, 30, pageHeight - 22);

  // Assinatura central
  doc.setDrawColor(30, 41, 59);
  doc.line(pageWidth / 2 - 35, pageHeight - 28, pageWidth / 2 + 35, pageHeight - 28);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Plataforma Simulado Petrobras 2026", pageWidth / 2, pageHeight - 22, { align: "center" });

  // Selo de autenticidade
  doc.setFillColor(22, 163, 74);
  doc.circle(pageWidth - 38, pageHeight - 35, 16, "F");
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(1);
  doc.circle(pageWidth - 38, pageHeight - 35, 13);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.text("APROVADO", pageWidth - 38, pageHeight - 38, { align: "center" });
  doc.text("PETROBRAS", pageWidth - 38, pageHeight - 33.5, { align: "center" });
  doc.text("2026", pageWidth - 38, pageHeight - 29, { align: "center" });

  doc.save(`Certificado_Petrobras_${userName.replace(/\s/g, "_")}.pdf`);
};
