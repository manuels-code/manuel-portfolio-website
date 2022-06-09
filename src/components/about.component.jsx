import Container from "./common/containers/container.component";
import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-bg-light-700 py-14">
      <Container>
        <div className="">
          <div className="w-full h-[356px] m-auto bg-center bg-top bg-[length:190%] bg-[url('https://preview.colorlib.com/theme/knuford/images/xabout.jpg.pagespeed.ic.ROjPXqaKV7.webp')]"></div>

          <div className="flex gap-2 py-10 tab-button">
            <NavLink to="">About me</NavLink>
            <NavLink to="/tab-skills">Skills</NavLink>
            <NavLink to="/tab-experience">Experience</NavLink>
          </div>
          
          <Outlet />
          
        </div>
      </Container>
    </section>
  );
};

export default About;
