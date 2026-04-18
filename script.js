/**
 * Olá, seja bem vindo (a)! Meu nome é Lucas Avelino Fraga.
 * Sou desenvolvedor backend e especialista em automação de vendas.
 *
 * Vamos às explicações do código.
 *
 * A função toggleMode() alterna entre os modos "light" (claro) e "dark" (escuro) em uma página HTML.
 *
 * Esta função modifica a classe do elemento raiz (`<html>`),
 * alternando entre os estilos definidos para os modos claro e escuro.
 * Além disso, ajusta a imagem de perfil e seu atributo `alt`
 * dependendo do modo ativo. Caso a imagem não seja encontrada,
 * uma mensagem de erro é registrada no console.
 *
 * Versão aprimorada com foco em conversão, experiência do usuário e elementos mobile otimizados.
 */

function toggleMode() {
  // Obtém o elemento raiz do documento HTML.
  const html = document.documentElement;

  // Alterna a classe 'light' no elemento <html>.
  // Se a classe 'light' não existir, ela será adicionada; caso contrário, será removida.
  html.classList.toggle("light");

  // Seleciona o elemento de imagem dentro de um elemento com a classe 'profile'.
  const img = document.querySelector(".profile img");

  if (img) {
    // Verifica se o modo 'light' está ativo no elemento <html>.
    if (html.classList.contains("light")) {
      // Atualiza o atributo 'src' da imagem para o avatar do modo claro.
      img.setAttribute("src", "/assets/avatar-light.png");
      // Atualiza o atributo 'alt' para descrever a imagem no modo claro.
      img.setAttribute(
        "alt",
        "Lucas Avelino Fraga - Especialista em automação de vendas - Modo claro",
      );
    } else {
      // Atualiza o atributo 'src' da imagem para o avatar do modo escuro.
      img.setAttribute("src", "/assets/avatar-dark.png");
      // Atualiza o atributo 'alt' para descrever a imagem no modo escuro.
      img.setAttribute(
        "alt",
        "Lucas Avelino Fraga - Especialista em automação de vendas - Modo escuro",
      );
    }
  } else {
    // Exibe um erro no console caso o elemento de imagem não seja encontrado.
    console.error("Elemento de imagem não encontrado.");
  }

  // Salva a preferência do usuário no localStorage
  const isDarkMode = !html.classList.contains("light");
  localStorage.setItem("darkMode", isDarkMode);

  // Adiciona feedback tátil para dispositivos móveis
  if ("vibrate" in navigator) {
    navigator.vibrate(50);
  }
}

// Função para carregar a preferência salva do usuário
function loadThemePreference() {
  const savedTheme = localStorage.getItem("darkMode");
  const html = document.documentElement;

  // Se não há preferência salva, usa o modo escuro como padrão
  if (savedTheme === null || savedTheme === "true") {
    html.classList.remove("light");
  } else {
    html.classList.add("light");
  }

  // Atualiza a imagem de acordo com o tema
  const img = document.querySelector(".profile img");
  if (img) {
    if (html.classList.contains("light")) {
      img.setAttribute("src", "/assets/avatar-light.png");
      img.setAttribute(
        "alt",
        "Lucas Avelino Fraga - Especialista em automação de vendas - Modo claro",
      );
    } else {
      img.setAttribute("src", "/assets/avatar-dark.png");
      img.setAttribute(
        "alt",
        "Lucas Avelino Fraga - Especialista em automação de vendas - Modo escuro",
      );
    }
  }
}

// Função para adicionar efeitos visuais aos links (sem ripple problemático)
function addLinkEffects() {
  const links = document.querySelectorAll("ul li a");

  links.forEach((link) => {
    // Efeitos para desktop (hover)
    link.addEventListener("mouseenter", function () {
      if (window.innerWidth > 768) {
        this.style.transform = "translateY(-3px) scale(1.02)";
      }
    });

    link.addEventListener("mouseleave", function () {
      if (window.innerWidth > 768) {
        this.style.transform = "translateY(0) scale(1)";
      }
    });

    // Efeitos para mobile (touch) - mais sutis
    link.addEventListener("touchstart", function (e) {
      if (window.innerWidth <= 768) {
        this.style.transform = "scale(0.96)";
        this.style.transition = "transform 0.1s ease";

        // Feedback tátil sutil
        if ("vibrate" in navigator) {
          navigator.vibrate(30);
        }
      }
    });

    link.addEventListener("touchend", function (e) {
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          this.style.transform = "scale(1)";
          this.style.transition = "all 0.2s ease";
        }, 100);
      }
    });

    // Previne o comportamento padrão que causa problemas
    link.addEventListener("touchcancel", function (e) {
      if (window.innerWidth <= 768) {
        this.style.transform = "scale(1)";
        this.style.transition = "all 0.2s ease";
      }
    });
  });
}

// Função para atualizar o horário na status bar mobile
function updateMobileTime() {
  const timeElement = document.getElementById("mobile-time");
  if (timeElement) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    timeElement.textContent = `${hours}:${minutes}`;
  }
}

// Função para simular mudança de bateria
function updateBattery() {
  const batteryFill = document.querySelector(".battery-fill");
  const batteryText = document.querySelector(".mobile-battery span");

  if (batteryFill && batteryText) {
    // Simula uma bateria que varia entre 75% e 95%
    const batteryLevel = Math.floor(Math.random() * 20) + 75;
    batteryFill.style.width = batteryLevel + "%";
    batteryText.textContent = batteryLevel + "%";

    // Muda a cor baseada no nível da bateria
    if (batteryLevel < 20) {
      batteryFill.style.background = "#ef4444";
    } else if (batteryLevel < 50) {
      batteryFill.style.background = "#f59e0b";
    } else {
      batteryFill.style.background = "#10b981";
    }
  }
}

// Função para animar os dots do swipe indicator
function animateSwipeDots() {
  const dots = document.querySelectorAll(".swipe-dot");
  if (dots.length === 0) return;

  let currentDot = 0;

  setInterval(() => {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentDot].classList.add("active");
    currentDot = (currentDot + 1) % dots.length;
  }, 2000);
}

// Função para adicionar animação de entrada
function addEntryAnimation() {
  const elements = document.querySelectorAll(".container-principal > *");

  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";

    setTimeout(() => {
      element.style.transition = "all 0.6s ease";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Função para detectar se é dispositivo móvel
function isMobileDevice() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) || window.innerWidth <= 768
  );
}

// Função para adicionar gestos de swipe (mobile) - versão otimizada
function addSwipeGestures() {
  if (!isMobileDevice()) return;

  let startX = 0;
  let startY = 0;
  let isSwipeGesture = false;

  document.addEventListener(
    "touchstart",
    function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwipeGesture = false;
    },
    { passive: true },
  );

  document.addEventListener(
    "touchmove",
    function (e) {
      if (!startX || !startY) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const diffX = Math.abs(startX - currentX);
      const diffY = Math.abs(startY - currentY);

      // Detecta se é um gesto de swipe horizontal
      if (diffX > 30 && diffX > diffY) {
        isSwipeGesture = true;
      }
    },
    { passive: true },
  );

  document.addEventListener(
    "touchend",
    function (e) {
      if (!startX || !startY || !isSwipeGesture) {
        startX = 0;
        startY = 0;
        return;
      }

      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      // Swipe horizontal para alternar tema (apenas se for um gesto claro)
      if (Math.abs(diffX) > 100) {
        const html = document.documentElement;

        if (diffX > 0) {
          // Swipe left - modo claro
          html.classList.add("light");
        } else {
          // Swipe right - modo escuro
          html.classList.remove("light");
        }

        // Atualiza a imagem
        const img = document.querySelector(".profile img");
        if (img) {
          if (html.classList.contains("light")) {
            img.setAttribute("src", "/assets/avatar-light.png");
          } else {
            img.setAttribute("src", "/assets/avatar-dark.png");
          }
        }

        // Salva preferência
        const isDarkMode = !html.classList.contains("light");
        localStorage.setItem("darkMode", isDarkMode);

        // Feedback tátil
        if ("vibrate" in navigator) {
          navigator.vibrate(50);
        }
      }

      startX = 0;
      startY = 0;
      isSwipeGesture = false;
    },
    { passive: true },
  );
}

// Função para adicionar efeito parallax sutil no mobile
function addParallaxEffect() {
  if (!isMobileDevice()) return;

  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".profile::before");

    parallaxElements.forEach((element) => {
      const speed = 0.3;
      element.style.transform = `translate(-50%, -50%) translateY(${scrolled * speed}px)`;
    });

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true },
  );
}

// Função para otimizar performance em dispositivos móveis
function optimizeForMobile() {
  if (!isMobileDevice()) return;

  // Reduz animações em dispositivos com pouca bateria
  if ("getBattery" in navigator) {
    navigator
      .getBattery()
      .then(function (battery) {
        if (battery.level < 0.2) {
          document.body.classList.add("reduce-motion");
        }
      })
      .catch(() => {
        // Ignora erros de API não suportada
      });
  }

  // Adiciona classe para dispositivos touch
  document.body.classList.add("touch-device");

  // Otimiza scroll para iOS
  document.body.style.webkitOverflowScrolling = "touch";
}

// Função para prevenir zoom acidental em iOS
function preventAccidentalZoom() {
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
  });

  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
  });

  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
  });
}

// Carrega as preferências e adiciona efeitos quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
  loadThemePreference();
  addLinkEffects();
  addEntryAnimation();
  updateMobileTime();
  updateBattery();
  animateSwipeDots();
  addSwipeGestures();
  addParallaxEffect();
  optimizeForMobile();
  preventAccidentalZoom();

  // Atualiza o horário a cada minuto
  setInterval(updateMobileTime, 60000);

  // Atualiza a bateria a cada 5 minutos
  setInterval(updateBattery, 300000);
});

// Detecta mudanças na preferência de tema do sistema
if (window.matchMedia) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  mediaQuery.addEventListener("change", function (e) {
    // Só aplica a preferência do sistema se o usuário não tiver uma preferência salva
    if (localStorage.getItem("darkMode") === null) {
      const html = document.documentElement;
      if (e.matches) {
        html.classList.remove("light");
      } else {
        html.classList.add("light");
      }

      // Atualiza a imagem
      const img = document.querySelector(".profile img");
      if (img) {
        if (html.classList.contains("light")) {
          img.setAttribute("src", "/assets/avatar-light.png");
        } else {
          img.setAttribute("src", "/assets/avatar-dark.png");
        }
      }
    }
  });
}

// Otimização para redimensionamento de janela
let resizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    // Reaplica efeitos baseados no tamanho da tela
    addLinkEffects();
  }, 250);
});

// Adiciona suporte a Service Worker para PWA (opcional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        console.log("ServiceWorker registration successful");
      },
      function (err) {
        console.log("ServiceWorker registration failed");
      },
    );
  });
}
