from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib import colors
from datetime import datetime

# Criar PDF
pdf_path = "cv-edson-hagmayer.pdf"
doc = SimpleDocTemplate(pdf_path, pagesize=letter, topMargin=0.5*inch, bottomMargin=0.5*inch)

# Lista de elementos
elements = []

# Estilos
styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=24,
    textColor=colors.HexColor('#a78bfa'),
    spaceAfter=6,
    alignment=1
)

heading_style = ParagraphStyle(
    'CustomHeading',
    parent=styles['Heading2'],
    fontSize=12,
    textColor=colors.HexColor('#8b5cf6'),
    spaceAfter=6,
    spaceBefore=10
)

body_style = ParagraphStyle(
    'CustomBody',
    parent=styles['BodyText'],
    fontSize=10,
    spaceAfter=4
)

# Título
elements.append(Paragraph("EDSON HAGMAYER", title_style))
elements.append(Paragraph("Desenvolvedor de Software | Programador em Formação", styles['Normal']))
elements.append(Spacer(1, 0.2*inch))

# Informações de Contato
contact_data = [
    ['Email:', 'edson.hagmayer@email.com'],
    ['GitHub:', 'github.com/Hagmayer1969'],
    ['LinkedIn:', 'linkedin.com/in/edson-hagmayer'],
    ['WhatsApp:', '+55 (48) 99999-9999']
]
contact_table = Table(contact_data, colWidths=[1.5*inch, 4.5*inch])
contact_table.setStyle(TableStyle([
    ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('TEXTCOLOR', (0, 0), (0, -1), colors.HexColor('#a78bfa')),
]))
elements.append(contact_table)
elements.append(Spacer(1, 0.15*inch))

# Profissional
elements.append(Paragraph("RESUMO PROFISSIONAL", heading_style))
elements.append(Paragraph(
    "Desenvolvedor em formação com grande paixão por programação e tecnologia. Possuo conhecimento em HTML5, CSS3 e JavaScript, com experiência em desenvolvimento de projetos responsivos e modernos. Sou dedicado, proativo e sempre em busca de aprimorar minhas habilidades técnicas e comportamentais.",
    body_style
))
elements.append(Spacer(1, 0.1*inch))

# Habilidades Técnicas
elements.append(Paragraph("HABILIDADES TÉCNICAS", heading_style))
tech_skills = [
    "HTML5 (Estrutura Semântica)",
    "CSS3 (Responsive Design, Grid, Flexbox)",
    "JavaScript (ES6+, Manipulação DOM)",
    "Python (Fundamentos)",
    "Git & GitHub (Versionamento)",
    "Figma (Design Web)"
]
for skill in tech_skills:
    elements.append(Paragraph(f"• {skill}", body_style))
elements.append(Spacer(1, 0.1*inch))

# Habilidades Comportamentais
elements.append(Paragraph("HABILIDADES COMPORTAMENTAIS", heading_style))
soft_skills = [
    "Comunicação Efetiva",
    "Trabalho em Equipe",
    "Resolução de Problemas",
    "Proatividade",
    "Organização",
    "Adaptabilidade"
]
for skill in soft_skills:
    elements.append(Paragraph(f"• {skill}", body_style))
elements.append(Spacer(1, 0.1*inch))

# Projetos Desenvolvidos
elements.append(Paragraph("PROJETOS DESENVOLVIDOS", heading_style))
projects = [
    ("Portfólio Responsivo", "Landing page profissional com HTML5, CSS3 e JavaScript. Design moderno com paleta de cores púrpura, animações e responsividade total."),
    ("Calculadora Web", "Aplicação web interativa para cálculos matemáticos com interface intuitiva desenvolvida em JavaScript puro."),
    ("To-Do App", "Gerenciador de tarefas com funcionalidades de adicionar, remover e marcar tarefas como concluídas usando JavaScript."),
    ("Conversor de Moedas", "Ferramenta para conversão de moedas em tempo real utilizando API externa e JavaScript."),
    ("Galeria de Fotos", "Galeria interativa com lightbox e animações suaves implementadas em JavaScript."),
    ("Jogo da Memória", "Jogo interativo com múltiplos níveis de dificuldade e sistema de pontuação.")
]
for title, desc in projects:
    elements.append(Paragraph(f"<b>{title}:</b> {desc}", body_style))
elements.append(Spacer(1, 0.1*inch))

# Formação
elements.append(Paragraph("FORMAÇÃO ACADÊMICA", heading_style))
elements.append(Paragraph("<b>Desenvolvimento de Software</b> - SENAI/SC LAB365 (2024-2026)", body_style))
elements.append(Paragraph("Curso intensivo com foco em programação, desenvolvimento web e tecnologias modernas.", body_style))
elements.append(Spacer(1, 0.1*inch))

# Certificações
elements.append(Paragraph("CERTIFICAÇÕES E CURSOS", heading_style))
certs = [
    "HTML5 e CSS3 - Fundamentos do Desenvolvimento Web",
    "JavaScript Essencial - Manipulação do DOM",
    "Responsive Web Design",
    "Fundamentos de Git e GitHub"
]
for cert in certs:
    elements.append(Paragraph(f"• {cert}", body_style))
elements.append(Spacer(1, 0.2*inch))

# Rodapé
elements.append(Paragraph(f"<i>Currículo atualizado em {datetime.now().strftime('%d de %B de %Y')}</i>", styles['Normal']))

# Construir PDF
doc.build(elements)
print(f"PDF gerado com sucesso: {pdf_path}")
