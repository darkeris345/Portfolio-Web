const Footer: React.FC = () => {
  return (
    <footer className="d-flex flex-column align-items-center">
      <section className="icon-list">

        <a href="https://www.facebook.com/dmitrij.purynzin" target="_blank" ><i className="nes-icon facebook is-medium " ></i></a>

        <a href="https://github.com/darkeris345" target="_blank"> <i className="nes-icon github is-medium "></i></a>

        <a href="mailto:dmitrij.purynzin@gmail.com"><i className="nes-icon gmail is-medium"></i></a>

        <a href="https://www.linkedin.com/in/dmitrij-purynzin/" target="_blank"><i className="nes-icon linkedin is-medium"></i></a>

      </section>
      <p className="fs-6 mt-3">
        &copy; {new Date().getFullYear()} Author Dmitrij Purynzin. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
