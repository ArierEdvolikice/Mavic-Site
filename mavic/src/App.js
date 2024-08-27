import React, { useState, useEffect } from "react";
import "./App.css";
import imagemFundo01 from "./Imagens/imagem12.jpg";
import imagemFundo02 from "./Imagens/imagem2.png";
import imagemFundo03 from "./Imagens/img3.png";
import logoServ from "./Imagens/logo_serv.png";
import logoMavic from "./Imagens/logo mavic.png";
import Slider from "react-slick";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=IGQWROdEJJRTVPTEQxUUlfQ1lqUlFQQ2hvRmI3d1lCNUtiRVRhekFid3dGNEhFT2VaMWN0WmdqeGVWTERVOUpickh6UGlGVEVzQU9ZAeGdUNkcxUDdGYjVqeEhlSEFUSEFNU0stOC1fWUJyR3dyNnh5OXVOczZA6d00ZD`
        );
        console.log("API response:", response.data);
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        console.log("API Error Response:", error.response);
      }
    };

    fetchPosts();
  }, []);

  const testimonials = [
    {
      image: require("./Imagens/lady.png"),
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: require("./Imagens/frisokar.png"),
      name: "Jane Smith",
      text: "Amazing experience, highly recommended!",
    },
    {
      image: require("./Imagens/frisokar.png"),
      name: "Michael Johnson",
      text: "A fantastic company that provides great value.",
    },
    // Adicione mais testimonials aqui
  ];

  const brands = [
    require("./Imagens/frisokar.png"),
    require("./Imagens/Maranello.png"),
    require("./Imagens/olisan.png"),
    require("./Imagens/plaxmetal.png"),
    require("./Imagens/squadroni.png"),
    require("./Imagens/lady.png"),
  ];

  const slides = [
    {
      image: `url(${imagemFundo01})`,
      text: {
        title: "Criando espaços corporativos com excelência.",
        description:
          "Comprometidos com a excelência, criamos móveis que transformam seu escritório em um ambiente produtivo e elegante.",
      },
    },
    {
      image: `url(${imagemFundo02})`,
      text: {
        title: "Transformando ambientes com qualidade e precisão.",
        description:
          "Na Mavic, cada detalhe é cuidadosamente planejado para transformar seu espaço colaborativo com móveis de alta qualidade e precisão no acabamento.",
      },
    },
    {
      image: `url(${imagemFundo03})`,
      text: {
        title:
          "Para nós, assistência é sinônimo de cuidado e atenção aos detalhes.",
        description:
          "Nossa equipe de assistência técnica está sempre pronta para oferecer soluções rápidas e precisas, garantindo que cada peça do seu mobiliário continue impecável e funcional, com a atenção e o cuidado que seu espaço merece.",
      },
    },
  ];

  const maisVendidos = [
    {
      image: require("./Imagens/bit.png"),
      name: "Cadeira Bit",
      descricao: "A banqueta Bit assento em polipropileno tem design minimalista, descontraído e com boa ergonomia. A base é elegante e sólida, garantindo estabilidade ao usuário"
    },
    {
      image: require("./Imagens/Addit.png"),
      name: "Cadeira Addit",
      descricao: "A Addit traz um moderno e amplo encosto em tela, braços ajustáveis, espuma de boa resiliência e um mecanismo exclusivo, auxiliando na produtividade por um excelente custo-benefício"
    },
    {
      image: require("./Imagens/goah.png"),
      name: "Cadeira Goah",
      descricao: "Goah une leveza, durabilidade e praticidade. Com encosto em tela dublada vulcanizada e estrutura de polímero injetado, possui assento em espuma injetada, braços fixos, ajuste de altura e giro, além de base e rodízios em nylon."
    },
    {
      image: require("./Imagens/prime.png"),
      name: "Poltrona Prime",
      descricao: "A Poltrona Prime oferece uma experiência incomparável de conforto. Fabricada com esponja ensacada de alta qualidade, revestida em courino elegante, possui regulagem de altura e sistema de relax no encosto, garantindo bem-estar em todos os momentos."
    },
    {
      image: require("./Imagens/mesaR.png"),
      name: "Mesa reta",
      descricao: "Mesa reta em MDF com duas gavetas, ideal para organizar seu espaço de trabalho com elegância e praticidade. Fabricada com materiais de alta qualidade, garante durabilidade e um visual moderno."
    },

  ]

  const mobilia = [
    {
      image: require("./Imagens/bit.png"),
      name: "Cadeira Bit",
    },
    {
      image: require("./Imagens/Addit.png"),
      name: "Cadeira Addit",
    },
    {
      image: require("./Imagens/prime.png"),
      name: "Poltrona Prime",
    },
    {
      image: require("./Imagens/gamer.png"),
      name: "Cadeira Gamer Vizon DZ",
    },
    {
      image: require("./Imagens/Pix.png"),
      name: "Poltrona Pix",
    },
    {
      image: require("./Imagens/mesa.png"),
      name: "Mesa de Reunião Retangular",
    },
    {
      image: require("./Imagens/banqueta.png"),
      name: "Banqueta Bit",
    },
    {
      image: require("./Imagens/estacao.png"),
      name: "Estação de Trabalho",
    },
    {
      image: require("./Imagens/connect.png"),
      name: "Cadeira Connect",
    },
    {
      image: require("./Imagens/levoo.png"),
      name: "Puff Levoo",
    },
    {
      image: require("./Imagens/sofa.png"),
      name: "Sofá Pix Individual",
    },
    {
      image: require("./Imagens/armarioAlto.png"),
      name: "Armário Alto",
    },
    {
      image: require("./Imagens/armarioBaico.png"),
      name: "Armário Baixo",
    }
  ]

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <button type="button" className="slick-prev">
        ←
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        →
      </button>
    ),
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsTestemunials = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsPage1 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div className="dots-container">
        <ul className="dots-list"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="dot">{i + 1}</div>,
  };

  const settingsModular = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      setRoomName(current === 0 ? "Room 1" : "Room 2");
    },
  };

  const [roomName, setRoomName] = useState("Room 1");

  const redirectToWhatsApp = () => {
    const message =
      "Olá, gostaria de mais informações sobre os serviços da Mavic.";
    const whatsappLink = `https://wa.me/558594198405?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="App">
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <div id="section1" className="section section1">
        <div className="header">
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <div className="logo">
            <h1>Mavic</h1>
          </div>
          <div className="contact-button">
            <button onClick={redirectToWhatsApp}>contate-nos</button>
          </div>
        </div>

        <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <a href="#section1" onClick={toggleMenu}>
            Seção 1
          </a>
          <a href="#section2" onClick={toggleMenu}>
            Seção 2
          </a>
          <a href="#section3" onClick={toggleMenu}>
            Seção 3
          </a>
          <a href="#section4" onClick={toggleMenu}>
            Seção 4
          </a>
          <a href="#section5" onClick={toggleMenu}>
            Seção 5
          </a>
          <a href="#section6" onClick={toggleMenu}>
            Seção 6
          </a>
          <a href="#section7" onClick={toggleMenu}>
            Seção 7
          </a>
          <a href="#section8" onClick={toggleMenu}>
            Seção 8
          </a>
          <a href="#section9" onClick={toggleMenu}>
            Seção 9
          </a>
          <a href="#section10" onClick={toggleMenu}>
            Seção 10
          </a>
          <a href="#section11" onClick={toggleMenu}>
            Seção 11
          </a>
          <a href="#section12" onClick={toggleMenu}>
            Seção 12
          </a>
          <a href="#section13" onClick={toggleMenu}>
            Seção 13
          </a>
        </div>

        <div className="slide-controls">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? "active" : ""}`}
            style={{ backgroundImage: slide.image }}
          >
            <div className="slide-content">
              <h2>{slide.text.title}</h2>
              <p>{slide.text.description}</p>
              <div className="contact-button segundo">
            <button onClick={redirectToWhatsApp}>contate-nos</button>
          </div>
            </div>
            
          </div>
        ))}
      </div>

      <div id="section2" className="section section2">
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {mobilia.map((item, index) => (
              <div className="slide-item" key={index}>
                <div className="image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="circle-overlay"></div>
                </div>
                <h2>{item.name}</h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div id="section3" className="section section3">
        <p>Em destaque</p>
        <h1>mais vendidos</h1>
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {maisVendidos.map((item, index) => (
              <div className="slide-item" key={index}>

                <div className="image-container">
                 <img
                    src={item.image}
                    alt="Imagem Cadeira 1"
                  />
                </div>
                <h2>{item.name}</h2>
                <p>{item.descricao}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div id="section4" className="section section4">
        <h1>por que nos escolher?</h1>
        <div className="content-wrapper">
          <div className="left-column">
            <div className="opcoes-numero">
              <h1>01</h1>
              <div className="titulo-e-descricao">
                <h2>Experiência de Mercado</h2>
                <p>
                Com 35 anos de mercado, nossa empresa oferece soluções confiáveis, com qualidade e experiência comprovadas.

                </p>
              </div>
            </div>
            <div className="opcoes-numero">
              <h1>02</h1>
              <div className="titulo-e-descricao">
                <h2>Qualidade do Produto</h2>
                <p>
                Nossos produtos garantem qualidade superior, unindo durabilidade e eficiência para superar suas expectativas.
                </p>
              </div>
            </div>
            <div className="opcoes-numero">
              <h1>03</h1>
              <div className="titulo-e-descricao">
                <h2>Atendimento Personalizado</h2>
                <p>           
                  Oferecemos atendimento personalizado, focado em entender e atender às suas necessidades específicas, garantindo uma experiência única e satisfatória.
                </p>
              </div>
            </div>
            <div className="opcoes-numero">
              <h1>04</h1>
              <div className="titulo-e-descricao">
                <h2>Assistência Técnica</h2>
                <p>
                Nossa assistência técnica especializada resolve suas necessidades com eficiência, garantindo suporte de qualidade e total tranquilidade.
                </p>
              </div>
            </div>
            <div className="opcoes-numero">
              <h1>05</h1>
              <div className="titulo-e-descricao">
                <h2>Diversidade de Produtos</h2>
                <p>
                Oferecemos uma ampla diversidade de produtos, garantindo opções para todas as suas necessidades com a mesma qualidade e confiança.
                </p>
              </div>
            </div>
          </div>
          <div className="right-column">
            <img
              src={require("./Imagens/time.png")}
              alt="Descrição da imagem"
            />
          </div>
        </div>
      </div>

      <div id="section5" className="section section5">
        <div className="columns-wrapper">
          <div className="column column-1">
            <div className="content">
              <div className="top-text">
                <h2>01</h2>
              </div>
              <div className="bottom-text">
                <h2>Home Office</h2>
                <p>
                Soluções ergonômicas e funcionais para criar um espaço de trabalho confortável e eficiente na sua casa.
                </p>
              </div>
            </div>
          </div>
          <div className="column column-2">
            <div className="content">
              <div className="top-text">
                <h2>02</h2>
              </div>
              <div className="bottom-text">
                <h2>Ambiente Corporativo</h2>
                <p>
                Mobiliário de alta qualidade que valoriza a imagem da empresa, promovendo produtividade e bem-estar no local de trabalho.
                </p>
              </div>
            </div>
          </div>
          <div className="column column-3">
            <div className="content">
              <div className="top-text">
                <h2>03</h2>
              </div>
              <div className="bottom-text">
                <h2>Ambiente Coletivo</h2>
                <p>
                Produtos versáteis e duráveis, ideais para espaços de uso comum, que garantem conforto e praticidade para todos.
                </p>
              </div>
            </div>
          </div>
          <div className="column column-4">
            <div className="content">
              <div className="top-text">
                <h2>04</h2>
              </div>
              <div className="bottom-text">
                <h2>Ambiente Colaborativo</h2>
                <p>
                Móveis que incentivam a interação e a criatividade, criando espaços dinâmicos e inspiradores para equipes trabalharem juntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section6" className="section section6">
        <h1>galeria de projetos</h1>

        {/* Slider 1 */}
        <Slider {...settingsPage1} className="projects-page1">
          <div className="project project-01">
            <div className="project-content">
              <div className="project-info">
                <h2>Tergran</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="contact-button">
                  <button>ver projeto</button>
                </div>
              </div>
              <div className="project-image">
                <img
                  src="/Imagens/Imagem_Projeto_01.png"
                  alt="Imagem do Projeto 01"
                />
              </div>
            </div>
            <div className="project-content reverse">
              <div className="project-image">
                <img
                  src="/Imagens/Imagem_Projeto_01-Reverse.png"
                  alt="Imagem do Projeto 02"
                />
              </div>
              <div className="project-info">
                <h2>Aço Cearense</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="contact-button">
                  <button>ver projeto</button>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-info">
                <h2>Santa Edwiges Supermercado</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="contact-button">
                  <button>ver projeto</button>
                </div>
              </div>
              <div className="project-image">
                <img
                  src="/Imagens/Imagem_Projeto_01.png"
                  alt="Imagem do Projeto 02"
                />
              </div>
            </div>
          </div>

          <div className="project project-02">
            <div className="project-content">
              <div className="project-info">
                <h2>WSTC</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="contact-button">
                  <button>ver projeto</button>
                </div>
              </div>
              <div className="project-image">
                <img
                  src="/Imagens/Imagem_Projeto_01.png"
                  alt="Imagem do Projeto 02"
                />
              </div>
            </div>
            <div className="project-content reverse">
              <div className="project-image">
                <img
                  src="/Imagens/Imagem_Projeto_01-Reverse.png"
                  alt="Imagem do Projeto 02"
                />
              </div>
              <div className="project-info">
                <h2>M Dias Branco</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="contact-button">
                  <button>ver projeto</button>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-info">
                <h2>SJ Imóveis</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="contact-button">
                  <button>ver projeto</button>
                </div>
              </div>
              <div className="project-image">
                <img
                  src="/Imagens/Imagem_Projeto_01.png"
                  alt="Imagem do Projeto 02"
                />
              </div>
            </div>
          </div>

          <div className="project project-02">
            <div className="project-content">
              <div className="project-info">
                <h2>título do projeto</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="contact-button">
                  <button>ver projeto</button>
                </div>
              </div>
              <div className="project-image">
                <img
                  src="/Imagens/Imagem_Projeto_01.png"
                  alt="Imagem do Projeto 02"
                />
              </div>
            </div>
            <div className="project-content reverse">
              <div className="project-image">
                <img
                  src="/Imagens/Imagem_Projeto_01-Reverse.png"
                  alt="Imagem do Projeto 02"
                />
              </div>
              <div className="project-info">
                <h2>título do projeto</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="contact-button">
                  <button>ver projeto</button>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-info">
                <h2>título do projeto</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="contact-button">
                  <button>ver projeto</button>
                </div>
              </div>
              <div className="project-image">
                <img
                  src="/Imagens/Imagem_Projeto_01.png"
                  alt="Imagem do Projeto 02"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div id="section7" className="section section7">
        <h1>Ambiente Modular</h1>
        <p>Nome do Ambiente: {roomName}</p>
        <Slider {...settingsModular}>
          {/* Primeira Room */}
          <div className="room">
            <div className="top-section">
              <div className="lamp-container">
                <img
                  src="/Imagens/Secao07_Fundo_02_Lamp.png"
                  alt="Nova Imagem"
                />
                <div className="light-effect"></div>
              </div>
            </div>
            <div className="bottom-section">
              <div className="furniture">
                <div className="furniture-overlay">
                  <div className="furniture-info">
                    <div>
                      <h2>Peça 01</h2>
                    </div>
                    <div className="furniture-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="/Imagens/Imagem_Cadeira_Secao_07_02.png"
                  alt="Cadeira"
                />
              </div>
              <div className="furniture tapete">
                <img src="/Imagens/Tapete.png" alt="Tapete" />
              </div>
              <div className="furniture">
                <div className="furniture-overlay">
                  <div className="furniture-info">
                    <div>
                      <h2>Peça 02</h2>
                    </div>
                    <div className="furniture-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent auctor...
                      </p>
                    </div>
                  </div>
                </div>
                <img src="/Imagens/Imagem_Cadeira_Secao_07.png" alt="Mesa" />
              </div>
            </div>
          </div>

          {/* Segunda Room */}
          <div className="room-2">
            <div className="top-section">
              <div className="lamp-container">
                <img
                  src="/Imagens/Secao07_Fundo_02_Lamp.png"
                  alt="Nova Imagem"
                />
                <div className="light-effect"></div>
              </div>
            </div>
            <div className="bottom-section">
              <div className="furniture">
                <div className="furniture-overlay">
                  <div className="furniture-info">
                    <div>
                      <h2>Peça 03</h2>
                    </div>
                    <div className="furniture-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="/Imagens/Imagem_Cadeira_Secao_07_03.png"
                  alt="Cadeira"
                />
              </div>
              <div className="furniture tapete">
                <img src="/Imagens/Tapete.png" alt="Tapete" />
              </div>
              <div className="furniture">
                <div className="furniture-overlay">
                  <div className="furniture-info">
                    <div>
                      <h2>Peça 04</h2>
                    </div>
                    <div className="furniture-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent auctor...
                      </p>
                    </div>
                  </div>
                </div>
                <img src="/Imagens/Imagem_Cadeira_Secao_07.png" alt="Mesa" />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div id="section9" className="section section9">
        <h1>nossos parceiros</h1>
        <Slider {...settings} className="slider-container">
          {brands.map((logo, index) => (
            <div key={index} className="container">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div id="section8" className="section section8">
        <div className="logo-container">
          <img src={logoServ} alt="Logomarca" className="logo" />
        </div>
        <div className="content-wrapper">
          <div className="image-container centered">
            <img
              src="/Imagens/ImagemSecao08.png"
              alt="Imagem"
              className="overflow-image"
            />
          </div>
          <div className="coluna-direita-texto">
            <div className="servico">
              <h2>Nossos Serviços</h2>
              <h3>01 Manutenção Mobiliário Corporativo</h3>
              <p>
                • Manutenção corretiva e preventiva em cadeiras de escritório
                <br />
                • Troca de peças
                <br />
                • Lavagem a seco
                <br />
                • Soldagem
                <br />
                • Pintura
                <br />• Estofamentos em tecido ou couro sintético.
              </p>
            </div>
            <div className="servico">
              <h3>02 Venda de Mobiliário Corporativo</h3>
              <p>
                • Cadeiras para diversos ambientes: Office, Coletivo e
                Colaborativo
                <br />
                • Mesas retas, de reunião, estações de trabalho
                <br />
                • Roupeiros de aço
                <br />
                • Armários
                <br />
              </p>
            </div>
            <div className="contact-button">
              <button onClick={redirectToWhatsApp}>contate-nos</button>
            </div>
          </div>
        </div>
      </div>

      <div id="section10" className="section section10">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/D0UnqGm_miA?si=VQp1_lPJo-tIik15&amp;controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>

      <div id="section11" className="section section11">
        <h1>testimonials</h1>
        <Slider {...settingsTestemunials} className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div id="section12" className="section section12">
        <h1>Postagens Recentes</h1>
        {console.log(posts)}
        <Slider {...settings} className="slider-container">
          {posts.map((post) => (
            <div key={post.id} className="instagram-post">
              {post.media_type === "IMAGE" ||
                post.media_type === "CAROUSEL_ALBUM" ? (
                <img src={post.media_url} alt={post.caption} />
              ) : (
                <video controls>
                  <source src={post.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p>{post.caption}</p>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Instagram
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <div id="section13" className="section section13">
        <div className="column total-footer">
          <div className="column column-left">
            <div className="form-container">
              <div className="form-title">
                <p>Receba algumas de nossas novidades por e-mail</p>
              </div>
              <div className="form-fields">
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  name="name"
                  className="input-name"
                />
                <input
                  type="email"
                  placeholder="Digite seu email"
                  name="email"
                  className="input-email"
                />
                <button className="submit-button">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>

            <div className="image-container">
              <img
                src="/Imagens/Cadeira_Footer.png"
                alt="Imagem Cadeira 1"
                className="image-right"
              />
            </div>
          </div>

          <div className="column column-center">
            <div className="logo-container">
              <img src={logoMavic} alt="Logomarca" className="logo" />
            </div>
            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          <div className="column column-right">
            <div className="footer-info">
              <p>© Criado por Mavic Conceito</p>
              <p>Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
