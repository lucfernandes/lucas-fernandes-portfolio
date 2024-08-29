class page {
  constructor() {
    this.init();
  }

  init() {
    this.servicesAnimation();
  }

  servicesAnimation() {
    document.querySelectorAll("ul.topic-services li").forEach((item, index) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  }
}

const Page = new page();
