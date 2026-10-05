import Section from "./Section";
import SkillList from "./SkillList";
import ProjectList from "./ProjectList";

function CV() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GitHub"
  ];

  const projects = [
    {
      name: "Portfolio Website",
      description: "Website giới thiệu bản thân bằng HTML, CSS và JavaScript."
    },
    {
      name: "Virtual Calculator",
      description: "Máy tính đơn giản được làm bằng React."
    }
  ];

  return (
    <div className="cv">
      <h1>Nguyễn Văn A</h1>
      <p>Sinh viên Công nghệ thông tin</p>

      <Section title="Giới thiệu">
        <p>
          Xin chào! Mình là sinh viên đang học Công nghệ thông tin.
          Mình thích lập trình và đang tìm hiểu về phát triển web.
        </p>
      </Section>

      <Section title="Thông tin">
        <p>Email: nguyenvana@gmail.com</p>
        <p>Phone: 0123456789</p>
        <p>Địa chỉ: Hà Nội</p>
      </Section>

      <Section title="Kỹ năng">
        <SkillList skills={skills} />
      </Section>

      <Section title="Dự án">
        <ProjectList projects={projects} />
      </Section>
    </div>
  );
}

export default CV;