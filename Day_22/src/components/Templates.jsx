import styled from "styled-components";

const MemeImage = styled.div`
  background: url(${(props) => props.url});
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
`;
function Templates({ templates, setMeme }) {
  return (
    <main>
      {templates.map((template) => (
        <div
          key={template.id}
          className="meme-template"
          onClick={() => {
            setMeme(template);
          }}
        >
          <MemeImage url={template.url} />
        </div>
      ))}
    </main>
  );
}

export default Templates;
