  const showBtn = document.getElementById("showPencilBtn");
  const backBtn = document.getElementById("backPencilBtn");
  const showBtne = document.getElementById("showcolourBtn");
  const backBtne = document.getElementById("backcolourBtn");
  const gallery = document.getElementById("pencilGallery");
  const gallerys = document.getElementById("colourGallery");

  const pencilImages = ["pen1.jpg", "pen2.jpg","pen3.jpg","pen4.jpg","pen5.jpg","pen6.jpg","pen7.jpg","pen8.jpg","pen9.jpg","pen10.jpg","pen11.jpg","pen12.jpg"];
  const colourImages = ["col1.jpg","col2.jpg","col3.jpg","col4.jpg","col5.jpg","col6.jpg","col7.jpg","col8.jpg","col9.jpg","col10.jpg","col11.jpg","col12.jpg","col13.jpg"];
  showBtn.addEventListener("click", function(e) {
    e.preventDefault();
    gallery.innerHTML = "";

    pencilImages.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Pencil Artwork";
      img.style.width = "300px";
      img.style.margin = "10px";
      img.style.border = "1px solid #ccc";
      img.style.borderRadius = "8px";
      gallery.appendChild(img);
    });

    gallery.scrollIntoView({ behavior: "smooth" });
    showBtn.style.display = "none";
    backBtn.style.display = "inline-block";
  });

  backBtn.addEventListener("click", function(e) {
    e.preventDefault();
    gallery.innerHTML = "";
    showBtn.style.display = "inline-block";
    backBtn.style.display = "none";
  });
  showBtne.addEventListener("click", function(e) {
    e.preventDefault();
    gallery.innerHTML = "";

    colourImages.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Coloured Artwork";
      img.style.width = "300px";
      img.style.margin = "10px";
      img.style.border = "1px solid #ccc";
      img.style.borderRadius = "8px";
      gallery.appendChild(img);
    });

    gallery.scrollIntoView({ behavior: "smooth" });
    showBtne.style.display = "none";
    backBtne.style.display = "inline-block";
  });

  backBtne.addEventListener("click", function(e) {
    e.preventDefault();
    gallery.innerHTML = "";
    showBtne.style.display = "inline-block";
    backBtne.style.display = "none";
  });

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
