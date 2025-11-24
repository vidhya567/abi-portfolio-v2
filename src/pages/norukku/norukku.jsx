import indianCart from "./assets/cart.svg";
import avatar from "./assets/avatar.svg";
import aarthiPriya from "./assets/aarthi-priya.svg";
import paperCart from "./assets/paper-cart.svg";

import interview from "./assets/interview.svg";
import oldman from "./assets/old-man.svg";
import ia from "./assets/ia.svg";
import paperHome from "./assets/paper-home.svg";
import paperMenu from "./assets/paper-menu.svg";
import paperItem from "./assets/paper-item.svg";
import logo from "./assets/logo.svg";
import lofi from "./assets/low-fidelity-design.svg";
import menuCloud from "./assets/menu-cloud.svg";
import pscolor from "./assets/colors.svg";

import { Footer } from "../../imports/HomePage";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import React, { useState, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./index.css";

const Mockup = lazy(() => import("./mockup"));

const THEME = createTheme({
  typography: {
    fontFamily: "Fredoka",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function Norukku() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="norukku white-back">
        <Header />
        <Body />
        <div className="bio-page-footer">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

function DrawerContent(props) {
  const { closeDrawer } = props;
  const linksList = [
    { label: "Introduction", link: "#introduction" },
    { label: "Research", link: "#research" },
    { label: "User persona", link: "#userpersona" },
    { label: "Information Architechture", link: "#infoarch" },
    { label: "Wireframes", link: "#wireframe" },
    { label: "Mockup", link: "#mockup" },
    { label: "Usability studies", link: "#usf" },
    { label: "Final design", link: "#finaldesign" },
    { label: "Takeaway", link: "#takeaway" },
  ];

  return (
    <Box sx={{ overflow: "auto" }}>
      <List>
        {linksList.map(({ label, link }, index) => (
          <Link key={label} href={link} underline="none" color="inherit">
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  closeDrawer();
                }}
              >
                <ListItemText
                  style={{ fontFamily: "Fredoka" }}
                  primary={label}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <Link
          key={"Back to projects"}
          href={"/project"}
          underline="none"
          color="inherit"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Bact to projects"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          onClick={() => {
            const footer = document.querySelector("#contact-footer");
            if (footer) {
              footer.classList.remove("bounce");
              void footer.offsetWidth;
              footer.classList.add("bounce");
            }
          }}
          key={"contact"}
          href={"#contact-footer"}
          underline="none"
          color="inherit"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 1180px)" });
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  function onDrawerClose(event) {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowDrawer(false);
  }

  if (isMobile) {
    return (
      <>
        <header class="app-header">
          <a className="app-logo-wrapper" href="/" rel="noreferrer">
            <img className="logo" src={logo} alt="abi" />
          </a>
          <img
            onClick={toggleDrawer}
            className="logo"
            src={menuCloud}
            alt="menuCloud"
            style={{
              position: "fixed",
              top: "0px",
              right: "5px",
            }}
          />
        </header>
        <Drawer
          anchor={"right"}
          open={showDrawer}
          onClose={onDrawerClose}
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: "border-box",
            },
          }}
        >
          <DrawerContent
            closeDrawer={() => {
              setShowDrawer(false);
            }}
          />
        </Drawer>
      </>
    );
  }
  return (
    <>
      <Drawer
        anchor={"left"}
        variant="permanent"
        sx={{
          width: 360,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 360,
            boxSizing: "border-box",
          },
        }}
      >
        <header class="app-header">
          <a className="app-logo-wrapper" href="/" rel="noreferrer">
            <img className="logo" src={logo} alt="abi" />
          </a>
        </header>
        <DrawerContent />
      </Drawer>
    </>
  );
}

function NavigationBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 1180px)" });
  if (isMobile) {
    return null;
  }
  return (
    <ul className="solid-menu stick list norruku-contents">
      <li>
        <a className="space-cadet" href="#introduction">
          Introduction
        </a>
      </li>
      <li>
        <a className="space-cadet" href="#research">
          Research
        </a>
      </li>
      <li>
        <a className="space-cadet" href="#userpersona">
          UserPersona
        </a>
      </li>
      <li>
        <a className="space-cadet" href="#infoarch">
          Information Architechture
        </a>
      </li>
      <li>
        <a className="space-cadet" href="#wireframe">
          Wireframes
        </a>
      </li>
      <li>
        <a className="space-cadet" href="#mockup">
          Mockup
        </a>
      </li>
      <li>
        <a className="space-cadet" href="#usf">
          Usability study
        </a>
      </li>
      <li>
        <a className="space-cadet" href="#finaldesign">
          Final Design
        </a>
      </li>
      <li>
        <a className="space-cadet" href="#takeaway">
          Take Away
        </a>
      </li>

      <li>
        <a
          className="space-cadet"
          href="#contact-footer"
          onClick={() => {
            const footer = document.querySelector("#contact-footer");
            if (footer) {
              footer.classList.remove("bounce");
              void footer.offsetWidth;
              footer.classList.add("bounce");
            }
          }}
        >
          Contact
        </a>
      </li>
      <li>
        <a className="space-cadet" href="/project">
          Bact to Projects
        </a>
      </li>
    </ul>
  );
}

function Body() {
  return (
    <div className="full-page">
      <NavigationBar />
      <div className="content">
        <div className="norruku-logo">
          <img className="norukku-avatar" src={avatar} alt="avatar" />
          <p className="text-norruku">NORRUKU</p>
        </div>
        <div className="bio-body2">
          <div style={{ textAlign: "right" }} className="text-column p1">
            <p className="dark-orange project-meta-info">Project duration : </p>
            <p className="dark-orange project-meta-info">Team : </p>
            <p className="dark-orange project-meta-info">Tools : </p>
          </div>
          <div style={{ textAlign: "left" }} className="text-column p1">
            <p className="project-meta-info">Dec 2021 - June 2022</p>
            <p className="project-meta-info">Solo</p>
            <p className="project-meta-info">Figma</p>
          </div>
        </div>

        <img className="cart" src={indianCart} alt="Indian-cart" />

        <Intro />
        <BreakLine />
        <Research />
        <BreakLine />
        <UserPersona />
        <BreakLine />
        <InfoArch />
        <BreakLine />
        <Wireframes />
        <Digitalcarousel />
        <LowFidelityPrototype />
        <BreakLine />
        <Mockup />
        <BreakLine />
        <UsabilityStudyFindings />
        <BreakLine />
        <FinalDesign />
        <BreakLine />
        <TakeAway />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div id="introduction" className="display-center h1-font">
      <h2>Introduction</h2>
      <p className="p1">
        Chaat is Small, often fried food preparation eaten as snacks in South
        Asian cuisine and traditionally sold by street vendors. One such vendor
        named his shop Norruku."Norruku" is a Tamil word used to describe food
        when it is crunchy. It is run on a food cart in a metropolitan area's
        suburbs, serving various chaat food items.
      </p>
      <h3 className="dark-orange h1-font">Problem</h3>
      <p className="p1">
        It has been jam-packed, especially at sundown, since its opening. Day by
        day, it's getting difficult for Chaat lovers to eat food waiting in a
        queue. Sometimes the shop closes early or gets relocated or the food
        that the customer wants becomes unavailable.
      </p>
      <h3 className="dark-orange h1-font">Solution</h3>
      <p className="p1">
        An app for Norruku that allows users to easily order and pick up/dine in
        their fresh, tasty chaat will solve all the problems.
      </p>
    </div>
  );
}

function Research() {
  return (
    <div id="research" className="display-center h1-font">
      <h2>Research</h2>
      <br />
      <img
        style={{ width: "50%" }}
        className="interview"
        src={interview}
        alt="interview"
      />
      <br />
      <h2 className="text h1-font">Interview</h2>
      <p className="p1">
        To understand user , i started research and conduct interviews about
        their online ordering <br /> experience and love for chaat.The questions
        includes:
      </p>
      <ul className="list p1">
        <li>How much they like chaat?</li>

        <li>What is their favourite chaat?</li>

        <li>How often they eat chaat from food carts?</li>

        <li>
          What are the challenges they encounter while placing an order in a
          busy food cart?
        </li>

        <li>What are they like and dislike about ordering apps?</li>

        <li>What apps they usually use?</li>

        <li>How much do they favor placing a takeout order using an app?</li>

        <li>If chaat orders are placed online, will they enjoy it more?</li>
      </ul>

      <h2 className="text h1-font">Conclusions</h2>
      <ul className="list p1">
        <li>
          Initial theories regarding Norruku clients were confirmed by this user
          group. However, the <br /> investigation also uncovered further user
          issues, such as challenges communicating <br /> delivery instructions
          or customizing food products.
        </li>

        <li>
          Additionally, users mentioned that watching an item prepared makes
          them more excited <br /> to try it. Giving them a list of the
          ingredients used in the food offers them assurance <br /> and enables
          them to determine whether any items to which they are allergic are
          present.
        </li>
      </ul>
    </div>
  );
}

function InfoArch() {
  return (
    <div id="infoarch" className="display-center h1-font">
      <h2>Information Architechture</h2>
      <img
        className="infoarch-image"
        src={ia}
        alt="information-architechture"
      />
    </div>
  );
}

function UserPersona() {
  return (
    <div id="userpersona" className="display-center h1-font">
      <h2>User persona</h2>
      <br />
      <div className="rectangle-box">
        <div className="image-Name">
          <img className="persona-image" src={oldman} alt="oldman" />
          <div className="Name">
            <h3 className="dark-orange">Raja Ganapathi</h3>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Age : </span>65
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Education : </span>
              Ph.D.World history
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Hometown : </span>Chennai
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Family : </span>Wife and dog
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Occupation : </span>Retired
              professor
            </p>
          </div>
        </div>

        <div className="persona-description">
          <p className="quotes">
            “All i ever want is to eat my favourite street food with my wife
            watching the sky turn yellow as the sun sets.”
          </p>
          <div className="goal-frustration">
            <div className="goals">
              <h3 style={{ margin: "0px" }} className="dark-orange">
                Goals
              </h3>
              <ul className="list">
                <li>Enjoy relaxed and healthy retired life</li>
                <li>To eat my favourite street food without waiting in line</li>
              </ul>
            </div>
            <div className="frustration">
              <h3 style={{ margin: "0px" }} className="dark-orange">
                Frustrations
              </h3>
              <ul className="list">
                <li>The street food shop being crowded.</li>
                <li>Having to wait for long to order and eat.</li>
                <li>Sometime the shop is closed which is not known to him.</li>
                <li>The food he comes for is not available sometime.</li>
              </ul>
            </div>
          </div>
          <p className="about-persona">
            Dr.Raja Ganapathy is a retired history professor.He enjoys having
            street food from his young age. Now on at least once in a week he
            likes to enjoy street food. Due to old age he is not able to stand
            or wait for long hours in street food shop. He likes it if he can
            pre-order the food and pick up the food.
          </p>
        </div>
      </div>
      <br />
      <div className="rectangle-box">
        <div className="image-Name">
          <img className="persona-image" src={aarthiPriya} alt="women" />
          <div className="Name">
            <h3 className="dark-orange">Aarthi priya</h3>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Age : </span>28
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Education : </span>
              BE-computer science
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Hometown : </span>
              Pondicherry
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Family : </span>Husband and
              child
            </p>
            <p
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                fontWeight: "lighter",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Occupation : </span>
              Homemaker
            </p>
          </div>
        </div>
        <div className="persona-description">
          <p className="quotes">
            “Sitting down and sharing a meal together combines two of my
            favourite loves eating food and talking together.”{" "}
          </p>
          <div className="goal-frustration">
            <div className="goals">
              <h3 style={{ margin: "0px" }} className="dark-orange">
                Goals
              </h3>
              <ul className="list">
                <li>To be the best homemaker,mother,wife and host.</li>
                <li>To enjoy the taste of street food without any stress</li>
              </ul>
            </div>
            <div className="frustration">
              <h3 style={{ margin: "0px" }} className="dark-orange">
                Frustrations
              </h3>
              <ul className="list">
                <li>To wait in the crowd down in the shop with the child</li>
                <li>Keep waiting the guest/friends when arrived</li>
                <li>Not knowing about shop availabilities</li>
                <li>No online payment</li>
              </ul>
            </div>
          </div>
          <p className="about-persona">
            Aarthi priya is a homemaker,she lives with her husband and
            toddler.She likes to eat street food. She used to go down to the
            shop and have them whenever she feels like eating.Also when guests
            or friends come around ,she likes to eat street food with them too.
            As she has the child she cannot manage going down to shop ,waiting
            in the crowd.When guests or friends she cannot keep them waiting.
            She likes to pre-order them so she can save some time and she can
            enjoy alone or with her company.
          </p>
        </div>
      </div>
    </div>
  );
}

function Wireframes() {
  return (
    <>
      <div id="wireframe" className="display-center h1-font">
        <h2>WIREFRAMES</h2>
        <br />
        <h2 className="text h1-font">Paper Wireframes</h2>
        <p className="p1">
          Based on the research, I came up with a number of concepts before
          settling <br />
          on these wireframes.
        </p>
        <div className="box-pic">
          <div className="page-pic">
            <h3 className="page-pic-title">Home page</h3>
            <img
              className="page-image"
              src={paperHome}
              alt="home-paper-wireframe"
            />
          </div>
          <div className="page-pic">
            <h3 className="page-pic-title">Menu page</h3>
            <img
              className="page-image"
              src={paperMenu}
              alt="menu-paper-wireframe"
            />
          </div>
          <div className="page-pic">
            <h3 className="page-pic-title">Item page</h3>
            <img
              className="page-image"
              src={paperItem}
              alt="item-paper-wireframe"
            />
          </div>
          <div className="page-pic">
            <h3 className="page-pic-title">Cart page</h3>
            <img
              className="page-image"
              src={paperCart}
              alt="cart-paper-wireframe"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Digitalcarousel() {
  const [index, setIndex] = useState(0);

  const imageNames = [
    "Digital-All-1.svg",
    "Digital-Home-2.svg",
    "Digital-Menu-3.svg",
    "Digital-Item-4.svg",
    "Digital-Cart-5.svg",
  ];

  const displayPrev = index > 0;
  const displayNext = index < imageNames.length - 1;
  const activeImage = imageNames[index];
  const activeImageUrl = `https://abi-design-portfolio.web.app/assets/${activeImage}`;
  const prevClassName = displayPrev
    ? "material-symbols-outlined carousal-control"
    : "material-symbols-outlined carousal-control invisible";
  const nextClassName = displayNext
    ? "material-symbols-outlined carousal-control"
    : "material-symbols-outlined carousal-control invisible";

  return (
    <>
      <h2 className="text h1-font">Digital Wireframes</h2>
      <div className="carousal">
        <span
          class={prevClassName}
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <ArrowBackIosIcon />
        </span>

        <img
          className="digital-wireframe-carousal"
          alt="digital-wireframe-carousal"
          src={activeImageUrl}
        />

        <span
          class={nextClassName}
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </span>
      </div>
      <div className="carousal-indicators">
        {imageNames.map((imageName, i) => {
          const className =
            i === index
              ? "material-symbols-outlined material-symbols-filled"
              : "material-symbols-outlined";
          return (
            <span className={className}>
              <FiberManualRecordIcon
                color={i === index ? "textPrimary" : "disabled"}
              />
            </span>
          );
        })}
      </div>
    </>
  );
}

function LowFidelityPrototype() {
  return (
    <>
      <h3 className="text h1-font">Low Fidelity Prototype</h3>
      <div className="rectangle-box">
        <div className="page-pic flexible">
          <p className="p1">
            Created the lo-fi prototype using digital wireframes and made the
            primary flow. The flow starts from the home page ,selecting items
            and then completing order.
          </p>
          <p className="p1">View the prototype :</p>
          <a
            className="p1"
            href="https://www.figma.com/proto/L5Eue1DAdZu6rlFOr3Ritb/NORRUKU?page-id=0%3A1&node-id=69%3A549&viewport=686%2C358%2C0.16&scaling=scale-down&starting-point-node-id=69%3A549"
          >
            Norruku lo-fi
          </a>
        </div>

        <img className="flexible" src={lofi} alt="low-fidelity-prototype" />
      </div>
    </>
  );
}

function UsabilityStudyFindings() {
  return (
    <>
      <h2 id="usf" className="h1-font">
        Usability study findings
      </h2>
      <ul className="list p1">
        <li>
          The background on the item, profile, and sign-in screens
          <br /> is different, which disrupts the continuity.
        </li>

        <li>
          Every page's typography is unique and doesn't adhere to any
          <br /> established guidelines on header, paragraph, and other
          typographic elements.
        </li>

        <li>
          The arrangement of the components is not uniform. To keep component
          <br /> locations organized, no grid pattern was utilized.
        </li>

        <li>
          Because of the low color contrast ratio, it is inaccessible to users.
        </li>
      </ul>
    </>
  );
}

function FinalDesign() {
  return (
    <>
      <h2 id="finaldesign" className="h1-font">
        Final Design
      </h2>
      <h3 className="text h1-font">Design System</h3>
      <p className="p1">
        For the app, a design system was established in order to maintain
        consistency in <br />
        the typeface, colour, and component arrangement.
      </p>
      <h4 className="text h1-font">Logo</h4>
      <div className="norruku-logo">
        <img className="norukku-avatar" src={avatar} alt="avatar" />
        <p className="text-norruku">NORRUKU</p>
      </div>
      <p className="p1">
        Norruku is a restaurant on food cart,so the logo is designed to have
        that avatar.
      </p>
      <h4 className="text h1-font">Color</h4>
      <img className="pscolor" src={pscolor} alt="black and orange" />
      <p className="p1">
        When we speak about a dish being prepared on the food cart, the image of
        the
        <br />
        dish being cooked on a pan over the fire comes to mind, so black(for the
        pan) <br />
        and orange(for the fire) were picked. These colours when put together on
        a white <br />
        background has a good contrast ratio.
      </p>

      <h2 className="text h1-font">Mockup</h2>

      <Mockupcarousel />

      <h2 className="text h1-font">High Fidelity Design</h2>
      <div className="final-iframe">
        <iframe
          title="figma_file"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="70%"
          height="644"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL5Eue1DAdZu6rlFOr3Ritb%2FNORRUKU%3Fpage-id%3D891%253A858%26node-id%3D1050%253A3798%26viewport%3D106%252C426%252C0.2%26scaling%3Dscale-down%26starting-point-node-id%3D1050%253A3798"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

function TakeAway() {
  return (
    <>
      <h2 id="takeaway" className="h1-font">
        Takeaway
      </h2>
      <h3 className="text h1-font">Impact</h3>
      <p className="p1">
        The app makes users feel like Norruku really thinks about how to meet
        their needs.
      </p>
      <h3 className="text h1-font">What I learned</h3>
      <p className="p1">
        While designing the app, I learned that the first ideas for the app are
        only <br />
        the beginning of the process. Usability studies and peer feedback
        influenced each
        <br /> iteration of the app’s designs and altered it for the better.
      </p>
      <h2 className="text h1-font">Thank you for viewing the project</h2>
    </>
  );
}

function BreakLine() {
  return <div className="break-line" />;
}

function Mockupcarousel() {
  const isMobile = useMediaQuery({ query: "(max-width: 1180px)" });
  return <>{isMobile ? <Mobilecarousel /> : <Desktopcarousel />}</>;
}

function Mobilecarousel() {
  const [index, setIndex] = useState(0);
  console.log("Mobilecarousel");

  const imageNames = [
    "Mockup-All-1.svg",
    "Mockup-Home-2.svg",
    "Mockup-Home-3.svg",
    "Mockup-Home-4.svg",
    "Mockup-Home-5.svg",
    "Mockup-Menu-6.svg",
    "Mockup-Item-7.svg",
    "Mockup-Cart-8.svg",
  ];

  const displayPrev = index > 0;
  const displayNext = index < imageNames.length - 1;
  const activeImage = imageNames[index];
  const activeImageUrl = `https://abi-design-portfolio.web.app/assets/${activeImage}`;
  const prevClassName = displayPrev ? "IconButton" : "invisible";
  const nextClassName = displayNext ? "IconButton" : "invisible";
  return (
    <>
      <div className="carousal">
        <img
          className="digital-wireframe-carousal"
          alt="digital-wireframe-carousal"
          src={activeImageUrl}
        />
      </div>
      <div className="carousal-indicators">
        <IconButton
          className={prevClassName}
          onClick={() => {
            setIndex(index - 1);
          }}
          size="large"
          style={{
            fontSize: "48px",
          }}
        >
          <ChevronLeftIcon fontSize="inherit" />
        </IconButton>
        <span>
          {imageNames.map((imageName, i) => {
            const className =
              i === index
                ? "material-symbols-outlined material-symbols-filled"
                : "material-symbols-outlined";
            return <span className={className}>fiber_manual_record</span>;
          })}
        </span>
        <IconButton
          className={nextClassName}
          onClick={() => {
            setIndex(index + 1);
          }}
          size="large"
          style={{
            fontSize: "48px",
          }}
        >
          <ChevronRightIcon fontSize="inherit" />
        </IconButton>
      </div>
    </>
  );
}

function Desktopcarousel() {
  const [index, setIndex] = useState(0);

  const imageNames = [
    "Mockup-All-1.svg",
    "Mockup-Home-2.svg",
    "Mockup-Home-3.svg",
    "Mockup-Home-4.svg",
    "Mockup-Home-5.svg",
    "Mockup-Menu-6.svg",
    "Mockup-Item-7.svg",
    "Mockup-Cart-8.svg",
  ];

  const displayPrev = index > 0;
  const displayNext = index < imageNames.length - 1;
  const activeImage = imageNames[index];
  const activeImageUrl = `https://abi-design-portfolio.web.app/assets/${activeImage}`;
  const prevClassName = displayPrev
    ? "material-symbols-outlined carousal-control"
    : "material-symbols-outlined carousal-control invisible";
  const nextClassName = displayNext
    ? "material-symbols-outlined carousal-control"
    : "material-symbols-outlined carousal-control invisible";
  return (
    <>
      <div className="carousal">
        <span
          class={prevClassName}
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          arrow_back_ios
        </span>
        <img
          className="digital-wireframe-carousal"
          alt="digital-wireframe-carousal"
          src={activeImageUrl}
        />
        <span
          class={nextClassName}
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          arrow_forward_ios
        </span>
      </div>
      <div className="carousal-indicators">
        {imageNames.map((imageName, i) => {
          const className =
            i === index
              ? "material-symbols-outlined material-symbols-filled"
              : "material-symbols-outlined";
          return <span className={className}>fiber_manual_record</span>;
        })}
      </div>
    </>
  );
}
