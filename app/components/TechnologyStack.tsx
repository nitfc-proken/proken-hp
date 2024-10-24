import Image from "next/image";

export function TechnologyStack() {
  const techStack = [
    {
      name: "Unity",
      icon: "https://cdn.icon-icons.com/icons2/2248/PNG/512/unity_icon_136074.png",
    },
    {
      name: "OpenSiv3D",
      icon: "https://avatars.githubusercontent.com/u/7557228?v=4",
    },
    {
      name: "Next.js",
      icon: "https://logo.assets.newt.so/v1/7a92cf83-992c-4fc1-a6ab-81979c6ec25a/nextjs.png",
    },
    {
      name: "C#",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/640px-C_Sharp_Logo_2023.svg.png",
    },
    {
      name: "C++",
      icon: "https://avatars.githubusercontent.com/u/13841574?v=4",
    },
    {
      name: "Python",
      icon: "https://cdn.icon-icons.com/icons2/1508/PNG/512/python_104451.png",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
    },
    {
      name: "HTML",
      icon: "https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png",
    },
    {
      name: "CSS",
      icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png",
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold py-3">Technology Stack</h1>
      </div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <div
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {techStack.slice(0, 3).map((tech) => (
            <li
              key={tech.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "25%",
              }}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={100} // 適切な幅を指定
                height={100} // 適切な高さを指定
                style={{
                  margin: "1vmin",
                }}
              />
              <span style={{ fontWeight: "bold" }}>{tech.name}</span>
            </li>
          ))}
        </div>
        <div
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {techStack.slice(3, 6).map((tech) => (
            <li
              key={tech.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "25%",
              }}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={100}
                height={100}
                style={{
                  margin: "1vmin",
                }}
              />
              <span style={{ fontWeight: "bold" }}>{tech.name}</span>
            </li>
          ))}
        </div>
        <div
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {techStack.slice(6, 10).map((tech) => (
            <li
              key={tech.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "25%",
              }}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={100}
                height={100}
                style={{
                  margin: "1vmin",
                }}
              />
              <span style={{ fontWeight: "bold" }}>{tech.name}</span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
