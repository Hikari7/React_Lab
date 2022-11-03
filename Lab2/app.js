function App() {
  const socialIcons = [
    {
      icon: "instagram",
      title: "Instagram",
    },
    {
      icon: "facebook-f",
      title: "Facbook",
    },
    {
      icon: "twitter",
      title: "Twitter",
    },
    {
      icon: "linkedin",
      title: "LinkedIn",
    },
    {
      icon: "youtube",
      title: "YouTube",
    },
    {
      icon: "github",
      title: "Github",
    },
  ];

  return (
    <div>
      {socialIcons.map(({ icon, title }) => (
        <div class="button">
          <div class="icon">
            <i class={`fa fa-${icon}`}></i>
          </div>
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
